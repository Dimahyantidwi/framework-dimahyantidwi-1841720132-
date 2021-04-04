import React, { Component } from "react";
import './Smartphone.css';
import Post from "../../component/Kulkas/Post";

class Smartphone extends Component {
    state = {
        listProduk: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/smartphone')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGetSmartphone = data => {
        fetch(`http://localhost:3001/smartphone/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataSmartphone = { ...this.state.insertKeranjang };
                dataSmartphone["id"] = res["id"];
                dataSmartphone["nama"] = res["nama"];
                dataSmartphone["harga"] = res["harga"];
                dataSmartphone["stok"] = res["stok"];
                dataSmartphone["qty"] = 1;
                this.setState({
                    insertKeranjang: dataSmartphone
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-smartphone">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Daftar Barang</h2></center>
                <div className="tgh">
                    {
                        this.state.listProduk.map(smartphone => {
                            return (
                                <Post
                                    key={smartphone.id}
                                    id={smartphone.id}
                                    nama={smartphone.nama}
                                    harga={smartphone.harga}
                                    gambar={smartphone.gambar}
                                    stok={smartphone.stok}
                                    tambahSmartphone={this.handleGetSmartphone} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Smartphone;
import React, { Component } from "react";
import './Smartphone.css';
import PostKeranjang from "../../component/Kulkas/PostKeranjang";

class Smartphone extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

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
        var no = 0;
        var total = 0;
        return (
            <div className="post-smartphone">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Keranjang</h2></center>
                <div className="tgh">
                    <table border="1" cellpadding="5" width="100%">
                        <tr>
                            <th align="center">No</th>
                            <th align="center">ID Produk</th>
                            <th align="left">Nama</th>
                            <th align="center">Harga</th>
                            <th align="center">Qty</th>
                            <th align="center">Subtotal</th>
                        </tr>
                        {
                            this.state.listKeranjang.map(smartphone => {
                                no += 1;
                                total+=smartphone.harga*smartphone.qty
                                return (
                                    <PostKeranjang
                                        no={no}
                                        key={smartphone.id}
                                        id={smartphone.id}
                                        nama={smartphone.nama}
                                        harga={smartphone.harga}
                                        gambar={smartphone.gambar}
                                        stok={smartphone.stok}
                                        qty={smartphone.qty}
                                        tambahSmartphone={this.handleGetSmartphone} />
                                )
                            })
                        }
                        <tr>
                            <td colspan="5" align="right">Total : </td>
                            <td align="center">{total}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Smartphone;
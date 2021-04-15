import React, { Component } from 'react'
import './BlogPost.css'
import Post from '../../component/BlogPost/Post'

class BlogPost extends Component {

    state = {               //komponen state dari react untuk statefull component
        listMhs: [],     //variabel array yang digunakan untuk menyimpan data API
        insertMhs: {
            id: 1,
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 1,
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/mahasiswa?_sort=id&_order=desc')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => { 
            this.setState({
                listMhs: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusMhs =(data) => {
        fetch(`http://localhost:3002/mahasiswa/${data}`,{method:'DELETE'})
        .then(res=> {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahMhs= (event) =>{
        let formInsertMhs = {...this.state.insertMhs};
        let timestamp = new Date().getTime();
        formInsertMhs['id'] = timestamp;
        formInsertMhs[event.target.name] = event.target.value;
        this.setState({
            insertMhs: formInsertMhs
        });
    }

    handleTombolSimpan = () =>{
        fetch('http://localhost:3002/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMhs)
        })
            .then ((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <div className="row">
                    <div className="col-sm">
                        <div className="TopBar">
                            <div className="form pb-2">
                                <h1>INPUT MAHASISWA BARU</h1>
                                <div className="form-group row">
                                    <label htmlFor="NIM" className="col-sm-2 col-form-label">NIM</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMhs} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMhs} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                                    <div className="col-sm-10">
                                        <textarea type="text" className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahMhs} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="hp" className="col-sm-2 col-form-label">No Hp</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMhs} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                                    <div className="col-sm-10">
                                        <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMhs} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMhs} />
                                    </div>
                                </div>
                                <button type="submit" className="btn" id="simpan" onClick={this.handleTombolSimpan}>Simpan</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="isiKonten">
                            <h2>Daftar Mahasiswa</h2><br />{
                                this.state.listMhs.map(mahasiswa => {     // looping dan masukan untuk setiap data yang ada di listArtikel ke variabel artikel
                                    return <Post key={mahasiswa.id} nimMhs={mahasiswa.NIM} namaMhs={mahasiswa.nama} alamatMhs={mahasiswa.alamat} idMahasiswa={mahasiswa.id} noHp={mahasiswa.hp} angkatanMhs={mahasiswa.angkatan} statusMhs={mahasiswa.status} hapusMahasiswa={this.handleHapusMhs} /> // mappingkan data json dari API sesuai kategorinya
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogPost;

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Smartphone from "./container/Kulkas/Smartphone";
import Keranjang from "./container/Kulkas/Keranjang";

function App() {
  return (
    <Router>
      <div>

        <ul className="menu">
          <li>
            <Link to="/"><span>Home</span></Link>
          </li>
          <li>
            <Link to="/list-product"><span>List Produk</span></Link>
          </li>
          <li>
            <Link to="/keranjang"><span>Keranjang</span></Link>
          </li>
          <li>
            <Link to="/about"><span>About</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-product">
            <Products />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <center><h2>Selamat Datang di Online Shop Pilihan Anda!</h2></center>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <center><h2>Biodata</h2>
      <table border="1" cellpadding="10">
        <tr>
            <td>Nama : </td>
            <td>Dimahyanti dwi lestariningsih</td>
        </tr>
        <tr>
            <td>Tempat Lahir:</td>
            <td>Palopo</td>
        </tr>
        <tr>
            <td>Tanggal Lahir:</td>
            <td>15 November 2000</td>
        </tr>
        <tr>
            <td>Alamat:</td>
            <td>Btn Nyiur Permai, Libukang VIIi No. 9</td>
        </tr>
        <tr>
            <td>Kelas:</td>
            <td>TI-3F</td>
        </tr>
        <tr>
            <td>Jurusan:</td>
            <td>Teknologi Informasi</td>
        </tr>
    </table>
    </center>
    </div>
  );
}

function Products() {
  return (
    <div>
      <Smartphone />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

export default App;

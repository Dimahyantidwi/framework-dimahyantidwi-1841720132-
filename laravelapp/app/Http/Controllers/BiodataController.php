<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BiodataController extends Controller
{
    public function index() {
        $nama = 'Dimahyanti Dwi Lestariningsih'; //ubah dengan nama kalian
        $ttl = 'Palopo, 15 November 2000';
        $alamat = 'Btn Nyiur Permai Libukang VIII No.9';
        $agama = 'Islam';
        $umur = '20 Tahun';
        $hobby = 'Menyanyi, Membaca, Dengar lagu';
        return view('biodata' , ['nama' => $nama , 'ttl' => $ttl , 'alamat' => $alamat , 'agama' => $agama , 'umur' => $umur , 'hobby' => $hobby]);
    }
}
// Object
// Object sebenarnya adalah sebuah variabel yg menyimpan nilai (properti) dan fungsi (method)

//contoh object
// let contoh = {
//     key : value,
// }

// let komputer = {
//     prosesor : "intel 19 gen 13",
//     warna : "putih abuabu + rgb",
//     ram : 128,
//     vga : "rtx 4080 super",

// }

//properti = ciri khas dari sebuah object (variabel).
//method = perilaku dari objecty (variabel).

// var mobil = {
//     //object
//     type : "GTR 34",
//     model : "drift",
//     warna : "biru",


// //method
// start: function(){
//     console.log("ini method");
// },

// drive: function(){
//     console.log("ini method");
// },

// break: function(){
//     console.log("ini method");
// },


// }

// console.log(mobil.type);

// mobil.stars();

// //keyword THIS
// let manusia = {
//     firsName : "dudung",
//     lastyName : "dadang",
// showName: function(){
//     console.log(`Nama ${this.fistName} ${this.lastName}`);
// }
// }

// manusia.showName();

//UH PD
//No 1
// function cetakFunction(a){
//     return `Halo Nama Saya ` + a
// }

// console.log(cetakFunction("Alok"));

// //No 2
// function myFunction(a,b){
//     return a + b;
// }
// var a= 20;
// var b= 7;
// var hasil= myFunction(a,b);
// console.log(hasil);

// //No 3
// function hello (){
    
// }

// //No 4
// let obj = {
//     Nama : "jhon",
//     Umur : 22,
//     Bahasa : "Indonesia"
// }

// //No 5
// let objDaftarPeserta = {
//     nama : "Jhon Doe",
//     gender : "laki-laki",
//     hobi : "baca buku",
//     tahun : 1992,
// }
// console.log(objDaftarPeserta);

// //No 6
// const buah = [
// {
//     nama: 'Nanas',
//     warna: 'Kuning',
//     adabijinya: 'tidak',
//     harga: 9000
// },
// {
//     nama: 'Jeruk',
//     warna: 'Oranye',
//     adabijinya: 'ada',
//     harga: 8000
// },
// {
//     nama: 'Semangka',
//     warna: 'Hijau & Merah',
//     adabijinya: 'ada',
//     harga: 10000
// },
// {
//     nama: 'Pisang',
//     warna: 'Kuning',
//     adabijinya: 'tidak',
//     harga: 5000
// },
// ];

// const cekBiji = buah.filter((buah) => buah.adabijinya === 'tidak');

// console.log(cekBiji);


var penumpang = []; //Array
var tambahPenumpang = function(namaPenumpang, penumpang) {  //namaPenumpang, penumpang parameter function
  // if angkot kosong
    //tambah penumpang di awal Array
    //kembalikan isi array & keluar dari function
   // else
    //telusuri seluruh kursi dari awal
      // if ada kursi kosong
        //tambah penumpang di kursi tersebut
        //kembalikan isi Array & keluar dari function
      // if sudah ada nama yang sama
        //tampilkan pesan kesalahannya
        //kembalikan isi array & keluar dari function
      //if seluruh kursi terisi
        //tambah penumpang di akhir array
  
  if (penumpang.length == 0) { //untuk menghitung isi array % keluar dari function
    penumpang.push(namaPenumpang); //untuk menambah data di dalam array
    return penumpang; //untuk mengulang isi array & keluar darifunction
  } else {
    for (i=0; i<penumpang.length; i++) { //untuk mencari ulang isi panjang data yang sudah di isi.
      if (penumpang[i] == undefined) { //jika isi penumpang kosong/undefined
        penumpang[i] = namaPenumpang; //kita menambahkan isi kursi yang kosong
        return penumpang; //mengembalikan isi array & keluar dari function
      } else if (namaPenumpang == penumpang[i]) { //untuk mencari data yang sama telah diimput datanya
        console.log('Penumpang tersebut sudah ada di dalam angkot.'); //memberikan informasi data yang sama/sudah ada
        return penumpang; //mengembalikan isi array & keluar dari function
      } else if (i == penumpang.length - 1) { //karena 1 nilainya 0, dan penumpang .lenght mempunyai nilai 1. fungsi - 1 setelah penumpang.lenght adalah untuk mneyamakan nilai 1 dan penumpang.lenght.
        penumpang.push(namaPenumpang); //menambah nama penumpang
        return penumpang; //mengembalikan isi array & keluar dari function.
      }
    }
  }
}


//penumpang di sebelah namaPenumpang maksudnya = masuk ke array penumpang
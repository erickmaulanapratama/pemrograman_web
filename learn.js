let myNumber = 16;
let myString = "Hello";
let myBoolean = true;
const phi = 3.14;

console.log(myNumber);
console.log(myString);
console.log(myBoolean);
console.log(phi);

window.alert("Angka favorit saya :" + myNumber);
window.alert('Angka favorit saya adalah : ' + myNumber);
window.alert(`Angka favorit saya adalah : ${myNumber}`);

let x = 8;
let y = 4;
console.log(x, y); // menampilkan 8, 4
console.log('x + y =', x + y); // menampilkan 12
console.log('x - y =', x - y); // menampilkan 4
console.log('x * y =', x * y); // menampilkan 32
console.log('x / y =', x / y); // menampilkan 2
console.log('x % y =', x % y); // menampilkan 0
console.log('x++ =', x++); // menampilkan 8
console.log('++x =', ++x); // menampilkan 10
console.log('x-- =', x--); // menampilkan 10
console.log('--x =', --x); // menampilkan 8

let a = 8;
let b = 4;
console.log(a, b); // menampilkan 8, 4
console.log('a > b =', a > b); // menampilkan true
console.log('a < b =', a < b); // menampilkan false
console.log('a >= b =', a >= b); // menampilkan true
console.log('a <= b =', a <= b); // menampilkan false
console.log('a == b =', a == b); // menampilkan false
console.log('a != b =', a != b); // menampilkan true
console.log('a === b =', a === b); // menampilkan false
console.log('a !== b =', a !== b); // menampilkan false

console.log('true && true =', true && true); // menampilkan true
console.log('true && false =', true && false); // menampilkan false
console.log('false && true =', false && true); // menampilkan false
console.log('false && false =', false && false); // menampilkan false
console.log('true || true =', true || true); // menampilkan true
console.log('true || false =', true || false); // menampilkan true 
console.log('false || true =', false || true); // menampilkan true 
console.log('false || false =', false || false); // menampilkan false
console.log('!true =', !true); // menampilkan false
console.log('!false =', !false); // menampilkan true

function luasPersegi(sisi){
    let luasPersegi = sisi * sisi;
    return luasPersegi;
}
console.log('Luas Persegi = ', luasPersegi(9)); // Luas Persegi = 81

function luasSegitiga(alas,tinggi){
    let luasSegitiga = 0.5 * alas * tinggi;
    return luasSegitiga;
}
console.log('Luas Segitiga = ', luasSegitiga(7,8)); // Luas Segitiga = 28

function volumeBalok(panjang,lebar,t){
    let volumeBalok = panjang * lebar * t;
    return volumeBalok;
}
console.log('Volume Balok = ', volumeBalok(4,5,6)); // Volume Balok = 120

var buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
console.log(buah[0]); // menampilkan Apel
console.log(buah[1]); // menampilkan Jeruk
console.log(buah[2]); // menampilkan Mangga
console.log(buah[3]); // menampilkan Pisang
buah[1] = "Anggur"; // mengganti Jeruk menjadi Anggur
console.log(buah); // mengecek perubahan
buah.push("Pepaya"); // menambah Pepaya di akhir Array
console.log(buah); // mengecek perubahan
buah.pop("Pepaya"); // melihat dan menghapus item dari Array
console.log(buah); // mengecek perubahan
console.log('Panjang Array = ', buah.length); // menghitung panjang Array
buah.unshift("Semangka"); // menambah Semangka di awal Array
console.log(buah); // mengecek perubahan
buah.shift(); // menampilkan dan menghapus item awal dari array
console.log(buah); // mengecek perubahan
console.log(buah.sort()); // mengurutkan Array
console.log(buah.reverse()); // membalikkan urutan Array

let profil = {
    namaDepan : "Erick",
    namaBelakang : "Maulana",
    alamat : "Pekanbaru",
    kontak : "081261826687",
    pekerjaan : "Mahasiswa",
    namaLengkap : function(){
        return this.namaDepan + " " + this.namaBelakang;
    }
}

console.log(profil.namaDepan); // menampilkan nama depan
console.log(profil.namaBelakang); // menampilkan nama belakang
console.log(profil.alamat); // menampilkan alamat
console.log(profil.kontak); // menampilkan kontak
console.log(profil.pekerjaan); // menampilkan pekerjaan 
console.log(profil.namaLengkap()); // menampilkan nama lengkap

console.log(profil["namaDepan"]); // menampilkan nama depan
console.log(profil["namaBelakang"]); // menampilkan nama belakang
console.log(profil["alamat"]); // menampilkan alamat
console.log(profil["kontak"]); // menampilkan kontak
console.log(profil["pekerjaan"]); // menampilkan pekerjaan
console.log(profil["namaLengkap"]()); // menampilkan nama lengkap
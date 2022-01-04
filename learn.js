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

console.log('Luas Persegi = ',luasPersegi(9)); // Luas Persegi = 81

function luasSegitiga(a,t){
    let luasSegitiga = 0.5 * a * t;
    return luasSegitiga;
}

console.log('Luas Segitiga = ', luasSegitiga(7,8)); // Luas Segitiga = 28

function volumeBalok(p,l,t){
    let volumeBalok = p * l * t;
    return volumeBalok;
}

console.log('Volume Balok = ', volumeBalok(4,5,6)); // Volume Balok = 120
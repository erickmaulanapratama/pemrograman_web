let myNumber = 16;
let myString = "Hello";
let myBoolean = true;
const phi = 3.14;

console.log = myNumber;
console.log = myString;
console.log = myBoolean;
console.log = phi;

window.alert ("Angka favorit saya :" + myNumber);
window.alert ('Angka favorit saya adalah : ' + myNumber);
window.alert (`Angka favorit saya adalah : ${myNumber}`);
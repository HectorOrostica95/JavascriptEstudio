

/*
var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.456789;

console.log(num1);
//Redondea al numero mas cercano
console.log(Math.round(num1*100)/100);

//Corta todos los decimales
console.log(Math.floor(num1));

var rnd = Math.random();
console.log(rnd);
*/

function randomEntre (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomEntre(1, 6));

console.log(Math.sqrt(16));

console.log( Math.pow(5, 3));
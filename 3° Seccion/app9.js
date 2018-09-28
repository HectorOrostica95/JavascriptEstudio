
var a = new String('Hector Francisco Orostica Orostica');

var b = 'Orostica';

console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf('Fran');
console.log('La letra esta en la posicion: ' + i);

var i = a.lastIndexOf('o');
console.log('La letra esta en la posicion: ' + i);
/*
var nombre =  a.substr(7, 4);
console.log(nombre);
*/
var nombre =  a.substr(0, a.indexOf(' '));
console.log(nombre);

var split = a.split(' ');
console.log(split)
console.log(split.length)

//--------------------

document.write( a.italics() );

document.write( '<br>' );
document.write( '<br>' );

document.write( a.blink() );

document.write( '<br>' );
document.write( '<br>' );

document.write( a.strike() );

document.write( '<br>' );
document.write( '<br>' );

document.write( a.bold() );

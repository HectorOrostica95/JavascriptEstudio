
/*
var hoy = new Date();
var fMili = new Date(1538066427005);

//var fFija = new Date( años, mes, dia, hora, min, seg , mili );
var fFija = new Date( 2016, 9, 21, 23, 10, 15, 1 );

console.log(hoy);
console.log(fMili);
console.log(fFija);


console.log( hoy.getFullYear() );
console.log( hoy.getMonth() );
console.log( hoy.getDate() );
console.log( hoy.getHours() );
console.log( hoy.getMinutes() );
console.log( hoy.getSeconds() );
 */

var inicio = new Date();

for (let i = 0; i < 15000; i++) {
    console.log('Algo....');     
}   
var fin = new Date();

//console.log(inicio);
//console.log(fin);

var duracion = fin.getTime() - inicio.getTime();

console.log('La duracion de la ejecucion del for fue de ' + duracion + ' milisegundos');
console.log('La duracion de la ejecucion del for fue de ' + duracion/1000 + ' segundos');
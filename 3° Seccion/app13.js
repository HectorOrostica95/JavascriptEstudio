/* 
    Si encuentra la palabra regresara un arreglo, de no encontrar
    nada regresara un null

    
    var reg1 = RegExp('a');
    var reg2 = /a/;
*/


var texto = 'Hola Mundoooo, 12345.';

/*
Busca en el principio los dos primeros caracteres 
var arr = texto.match( /^../ );

Busca los primeros numeros que se encuentren en la cadena de texto
var arr = texto.match( /[0-9]/ );

Busca la primera letra minuscula que se encuentre
var arr = texto.match( /[a-z]/ );

Busca la primera letra mayuscula que se encuentre
var arr = texto.match( /[A-Z]/ );

Busca la primera letra mayuscula o minuscula que se encuentre
var arr = texto.match( /[a-zA-Z]/ );

Busca la primera vocal y luego cualquier caracter
var arr = texto.match( /[aeiou]./ );


Busca la primera vocal y luego cualquier caracter pero desde el final
var arr = texto.match( /[aeiou].$/ );

Busca cualquier caracter ya sea mayuscula, minuscula o numero
var arr = texto.match( /[a-zA-Z0-9]/ );

Es similar al de arriba
var arr = texto.match( /\w/ );

Busca cualquier numero 
var arr = texto.match( /\d/ );

/===============

i = Insensible
g = todas las apariciones
m = Multilinea

/===============

busca todas las vocales ya sea que se encuentran en mayusculas o 
minusculas y a su vez me listara todas las apariciones
var arr = texto.match( /[aeiou]/ig );

Buscara todas las letras "o", si encuentra dos juntas estas las 
muestra juntas.
var arr = texto.match( /o+/g );

Muestra todas las posiciones en donde se encuentra la letra o
var arr = texto.match( /o?/g );

*/
//Busca la posicion de la letro "o" pero esta aparece en las posiciones
//var arr = texto.match( /o*/g );
//console.log(arr);
/* 
Busca todas las ocurrencias donde se presente la letra "o" dos veces 
var arr = texto.match( /o{2}/g );



//var texto = 'Hola Mundo.';
var texto = 'Hola Mundooo.';

//considera solo las 2 "o" pedidas en el codigo
var arr = texto.match( /o{2}/g );

console.log(arr);
*/

var texto = 'Aeropuerto';
var texto = 'La Respuesta de la suma es: 45 + 60 = 105';
console.log(texto);
//Separa la palabra de dos en dos 
//var arr  = texto.match(/\w{2,2}/ig);
//var arr  = texto.match(/\d{1,}/ig);
var arr  = texto.match(/\d{1,}|respuesta/ig);


console.log(arr);
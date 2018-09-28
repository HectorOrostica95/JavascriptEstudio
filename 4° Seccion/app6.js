/*

var nota = 55;


if (nota >= 90 ) {

    console.log('A');

} else if (nota >= 80 ) {

    console.log('B');

} else if (nota >= 70 ) {

    console.log('C');

} else if (nota >= 60 ) {

    console.log('D');

} else {

    //si no se ponen las llaves es por que solo se pondra una sola linea a continuacion
    if (nota > 50)
        console.log('F');

    console.log('Algo por aquii!!');

}

console.log('Termino el codigo!!');

 */

//var a = 10;
//var b = 20;

var c = 0;
/*
if (a > b){
    c = a;
} else {
    c = b;
}

//=================
// Otra forma de hacer las condicionales de recien 
c = (a > b)? a:b;


//Creando una funcion dentro de una variable para que esta 
//retorne la opcion correcta

c = (a > b)? function(){
    
    console.log('A es mayor a B');
    return a;
    
}() : function(){
    
    console.log('B es mayor a A');
    return b;
    
}();


console.log(c);
*/

//==========================


/*
Realiza una comparacion entre ambos valores para saber cual 
tiene data a modo de ejemplo si a estuviera con undefined 
seleccionaria el valor de b  

var a = 30;
var b = 20;

var c = a || b;

console.log(c);
*/

function getNombre(nombre){
    //var nomb = nombre || '<Sin nombre>'
    //var nomb = nombre || null || null || undefined
    var nomb = null || null || null || null || 123

    console.log(nomb);
}

getNombre();


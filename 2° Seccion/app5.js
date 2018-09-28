/*function imprimir(nombre, apellido){
    //if (apellido === undefined){ apellido = 'xxx'; }
    //apellido = apellido || 'xxx';
    //console.log(nombre + ' ' + apellido);
}

imprimir('Hector', 'Orostica');
imprimir('Hector');

//-----------------------------------

function imprimir(persona){

    console.log(persona.nombre + ' ' + persona.apellido);
}

imprimir({
    nombre: 'Hector',
    apellido: 'Orostica'
});

//-----------------------------------

*/

function imprimir(fn){

    fn();
}

var persona = {
    nombre: 'Hector',
    apellido: 'Orostica'
}

var miFuncion = function(){ 
    console.log('Funcion anonima');
}

//imprimir( function(){ console.log('Funcion anonima') });

imprimir(miFuncion);
/*
function Persona(){

    this.nombre = 'Javiera';
    this.apellido = 'Muñoz';
    this.edad = 50;

    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }

    //console.log('Paso por aqui');

}


var hector = new Persona();

console.log(hector);
console.log(hector.nombre);

console.log(hector.nombreCompleto());

*/

function Persona(nombre, apellido){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 23;

    this.imprimirPersona = function(){
        return this.nombre + ' ' + this.apellido + ' (' + this.edad + ')';
    }
}

var hector = new Persona('Hector', 'Orostica');

console.log(hector.imprimirPersona());
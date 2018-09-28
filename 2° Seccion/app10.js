function Persona(){

    this.nombre = 'Gato';
    this.apellido = 'Orostica';
    this.edad = 23;
    this.pais = 'Chile';

}

Persona.prototype.imprimirInfo = function () {
    console.log(this.nombre  + ' ' + this.apellido + ' (' + this.edad +')');
    
}

var gato = new Persona();

//gato.imprimirInfo();

//console.log(gato);
//console.log(gato.pais);

var a = 'Hector';

Number.prototype.esPositivo =  function(){
    if(this > 0 ){
        return true;
    } else {
        return false;
    }
}
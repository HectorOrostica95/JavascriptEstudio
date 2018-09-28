
var carro = {
    color: 'Blanco',
    marca: 'Mazda',
    imprimir: function(){
        var salida = this.marca + ' - ' + this.color;

        return salida;
    }
}

var carro2 = {
    color: 'rojo',
    marca: 'Toyota',

}


console.log(carro.imprimir());

var logCarro = function(arg1, arg2){
    console.log('Carro: ', this.imprimir());
    console.log('Argumentos: ', arg1, arg2);
    console.log('============================');

}
//logCarro();

var logModeloCarro = logCarro.bind(carro);

logModeloCarro('abc', 'xyz');


//============================

//La diferencia entre el "call" y el "aplly"es que en el 
//segundo se espera un arreglo

logModeloCarro.call(carro, '123', '456');
logModeloCarro.apply(carro, ['asd', 'qwe']);


/*//Funciones prestadas 
    Estas funciones permiten utilizar metodos de otras funciones ya 
    creadas anteriormente
*/
console.log(carro.imprimir.call(carro2));

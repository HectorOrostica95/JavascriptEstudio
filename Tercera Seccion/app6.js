function crearFunciones (){
    var arr = [];
    var numero = 1;

    arr.push(function(){
        console.log(numero);
    })
    return arr
}


var funciones = crearFunciones();
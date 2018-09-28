

// comentario de linea

/*
Comentario de multilinea
Comentario de multilinea
Comentario de multilinea
*/

var arr = [
    //La primera posicion del arreglo hace tal cosa....
    'Hector',
    //la segunda es un objeto 
    { 
        //Esta propiedad hace tal cosa 
        //por lo cual 
        nombre: 
            'Gato',
        apellido: 
            'Orostica',
        //Esta funcion retorna el nombre y el apellido de objeto
        getNombre: function(){
            return this.nombre + ' ' + this.apellido;
        }
    }, 
    //tercera posicion del arreglo 
    true,
    //Cuarta posicion del arreglo
    function(){ console.log('this'); }

    //Fin del arreglo principal
];

console.log(
    arr
)
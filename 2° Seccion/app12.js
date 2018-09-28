/*  La diferencia entre el typeof y el instanceof es 
    es que en el caso del typeof es me permite identificar el tipo de dato 
    que se esta utilizando, mientras que en el instanceof nos permite 
    comparar si el parametro enviado corresponde al indicado, entonces este retornara TRUE, de no ser asi retornara FALSE.

*/

function identifica (param){
/*  
    if (typeof param == 'function'){
        param();
    } else {
        console.log(param);
    }
*/  
    console.log(typeof param);
    console.log(param instanceof Persona);
}

function Persona(){
    this.nombre = 'Gato',
    this.edad = 23;
}

var hector = new Persona();

//identifica( 1 );
//identifica( 'Hola Prrx' );
//identifica( {} );
identifica( hector );
//identifica( function(){ console.log('Soy anonima'); } );
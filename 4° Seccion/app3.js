/*
try{
    var a = 100;

    if (a === 103 ){
        throw 'Que mal perro';
    } else {
        throw 'oh oh';
    }


    console.log('El valor de a: ' + a);

} 
catch(e){
    
    if (e === 'Que mal perro' ){
        console.log('Error tipo 1');
    }

    if (e === 'oh oh' ){
        console.log('Error tipo 2');
    }

}
finally{
    console.log('Finalmente');
}

//====================================

try{

//    throw new Error('Error tipo 1');
    throw {
        nombreError: 'Errortipo1',
        accion: 'Salir corriendo a echarle agua el servidor',
        coderror:1
    }
    
    console.log('Esta parte nunca se ejecutara');

} 
catch(e){
    //console.log(e);
    //console.log(e.message);
    
    console.log(e);
    console.log(e.nombreError);
    console.log(e.accion);
    console.log(e.coderror);
    
    console.log('Parte del catch');
}
finally{
    console.log('Finalmente');
}

//====================================

//Al ejecutar un "throw" fuera de una funcion esta detendra todo el 
//archivo que se encuentra ejecutandose y pasara al siguiente archivo

//throw 'Error';

//====================================

try{

    throw function(){
        console.log('Funcion del throw...');
    }

    console.log('Esta parte nunca se ejecutara');
} 
catch(e){
    e();
    
    console.log('Parte del catch');
}
finally{
    console.log('Finalmente');
}


//console.log('Cualquier cosa');

*/

try{
    throw new Error('Nombre del error');
} 
catch(e){

    console.log(e);
    //registroErrores(e);

}
finally{
    console.log('Finalmente');
}


function registroErrores(e){
    var hoy = new Date();
    console.log('Se registro un error: ' + e + ' a las: ' + hoy.getTime());
}
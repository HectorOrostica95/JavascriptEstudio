
function determinarDato(a) { 
    if (a === undefined){
        console.log('A es undefined... no se que hacer');
    }

    if (typeof a === 'number'){
        console.log('A es un numero... puedo hacer operaciones con numeros');
    }

    if (typeof a === 'string'){
        console.log('A es un texto... puedo hacer operaciones con texto');
    }

    if (typeof a === 'object'){
        console.log('A es un objeto... puedo hacer cualquier cosa...');
        if (a instanceof Number){
            console.log('A es un objeto numerico.....');
        }
    }
 }

var b = new Number(3);
//console.log(b);

determinarDato(b);
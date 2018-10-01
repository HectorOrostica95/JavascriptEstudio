
/*
setTimeout(function(){
    console.log('Acaba de pasar un segundo');
}, 1000);

var segundo =  0;

//=====================

var intervalo = setInterval(function(){
    segundo++;
    console.log('Seg: ', segundo);
    
    if (segundo == 3){
        clearInterval(intervalo);
    }
    
}, 1000);
*/
//=====================

var nombre = 'Pedro';
var edad = 60;


var juan = {
    nombre: 'Juan',
    edad: 30,
    imprimir: function(){
        var self= this;

        setTimeout(function() {
            
            console.log(self.nombre, self.edad);
        }, 1000);

    }
};

juan.imprimir();
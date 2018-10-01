/*  Siempre tratar de tener encapsulado el "use strict" para 
    evitar problemas que pueda tener con librerias de terceros
 */

(function(){
    "use strict";

    function getNombre (){
    
        nombre2 = "Perro";
    
        return nombre2;
    }
        
    var nombre = "Gato";
    
    console.log( nombre );
    console.log( getNombre() );
    
})();


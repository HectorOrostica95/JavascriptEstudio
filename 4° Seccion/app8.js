

var objetoJS = {
    nombre: "Gato",
    edad: 23,
    imprimir: function(){
        console.log(this.nombre + ' ' + this.edad);
    }
};

console.log("Objeto literal", objetoJS);


var jsonString = JSON.stringify(objetoJS);

console.log(jsonString);

// como convertir el objeto json

var objetoDesdeJson = JSON.parse(jsonString);
console.log(objetoDesdeJson);

console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);
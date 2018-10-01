
/*
for( var i = 0; i <= 10; i++){

    if (i == 5){
        //continue;
        break;
    }    
    console.log(i);
}

var Persona = function(){
    this.nombre = 'Juan',
    this.apellido = 'Pineda',
    this.edad = 18;
};

var juan = new Persona();
Persona.prototype.direccion = 'San Jose';


for (const key in juan) {
    if (!juan.hasOwnProperty(key) ) { continue; }
    console.log(key, ': ', juan.hasOwnProperty(key));
    console.log(key, ': ', juan[key]);
}

for (num in [1,2,3,4,5,6,7,8,9,10]) {
    console.log(num);
}
  */

[1,2,3,4,5,6,7,8,9,10].forEach(function(val){

    console.log(val);
});
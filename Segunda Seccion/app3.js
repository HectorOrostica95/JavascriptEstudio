var persona = {
    nombre: 'Hector',
    apellido: 'Orostica',
    edad: 23, 
    direccion: {
        pais: 'Chile',
        ciudad: 'San Felipe',
        edificio: {
            nombre: 'Edificio Principal',
            telefono: '3450059234'
        }
    }
}
/*
console.log(persona.nombre);
console.log(persona.direccion.pais);

persona.direccion.codigoPostal = 212345;

console.log(persona.direccion);
console.log(persona.direccion.edificio.telefono);

var edificio = persona.direccion.edificio;
edificio.nPiso = '8vo Piso';

console.log(persona);
*/
var campo = 'edad';

console.log(persona[campo]);
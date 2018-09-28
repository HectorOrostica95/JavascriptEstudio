
var arr = [
    true, 
    {
        nombre: 'Gato',
        apellido: 'Orostica'
    },
    function(){
        console.log('Estoy viviendo en un arreglo');
    },
    function(persona){
        console.log(persona.nombre + ' ' + persona.apellido)
    },
    [
        'Matias', 
        'Hector', 
        'Felipe', 
        'Valentina',
        [
            'Juan',
            'Pedro',
            'Elisa',
            function(){
                console.log(this);
            }
        ]
    ]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + ' ' + arr[1].apellido);

arr[2]();
arr[3](arr[1]);
console.log(arr[4][3]);
console.log(arr[4][4][2]);

var arreglo2 = arr[4][4];
arreglo2[1] = 'Pedra!!'
console.log(arreglo2);
console.log(arr);

arreglo2[3]();
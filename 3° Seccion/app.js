
var arr = [5,4,3,2,1];

console.log(arr);

console.log(arr[0], arr[4], arr[5]);

arr.reverse();
console.log(arr);

//Multiplicando el valor por si mismo
arr = arr.map(function(elem){
    elem *= elem;
    return elem;
});

console.log(arr);

//Raiz cuadrada 
arr = arr.map(Math.sqrt);
console.log(arr);

//cambia los corchetes por el elemento ingresado
arr = arr.join('|');
console.log(arr);

//regresa el elemento del arreglo
arr = arr.split('|');
console.log(arr);

//agrega a la ultima posicion del arreglo
arr.push('6');
console.log(arr);

//agrega en la primera posicion del arreglo
arr.unshift('0');
console.log(arr);


console.log(arr.toString());

//elimina el ultimo elemento del arreglo
var elimine = arr.pop();
console.log(arr + ' ' + elimine);

//Permite cortar y agregar elementos al arreglo
arr.splice(1, 1, '10', '20');
console.log (arr)

//Corta los elementos del arreglo y no incluye la posicion del elemento seleccionado
arr = arr.slice(0, 2);
console.log(arr);



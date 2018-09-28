/* 
    En javascript no existe la sobre carga de operadores 
    debido a que cuando se lee el archivo este tomara la ultima 
    funcion creada y las demas quedaran pisadas por esa

 */

 function crearProducto(nombre, precio) { 
     nombre = nombre || 'Sin Nombre';
     precio = precio || 0;

     console.log('Producto: ', nombre, 'Precio: ', precio);
  }

function crearProducto100(nombre) { 
    crearProducto(nombre, 100);
 }


 function crearProductoCamisa(precio) { 
     crearProducto('Camisa', precio)
  }

  crearProducto('Lapiz');
  crearProducto100('Corrector');
  crearProductoCamisa(1000);
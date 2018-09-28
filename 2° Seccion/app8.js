nombre = 'Marcia Vargas'

var persona = {
    nombre: 'Hector',
    apellido: 'Orostica',
    imprimirNombre: function() {
        //console.log(nombre);      
        //console.log(this);      
        console.log(this.nombre + ' ' + this.apellido);      
    },
    direccion: {
        pais: 'Chile',
        obtenerPais: function(){
            //console.log(this);

            var self = this;
            
            var nuevaDireccion = function(){
                console.log(self);
                console.log('La direccion es en ' + self.pais);
            }

            nuevaDireccion();
        }
    }
};

//persona.nombre = 'Francisco';
//persona.imprimirNombre();

persona.direccion.obtenerPais();
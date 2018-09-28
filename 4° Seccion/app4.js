

function crearCookie(nombre,valor){
	
	valor = escape(valor);
	var hoy = new Date();
	hoy.setMonth(hoy.getMonth() + 1);
	
	document.cookie = nombre + '=' + valor + ';expires=' + hoy.toGMTString() + ';';
	
}

function borrarCookie(nombre){
	
	var hoy = new Date();
	hoy.setMonth(hoy.getMonth() - 1);
	
	document.cookie = nombre + '=x;expires=' + hoy.toGMTString() + ';';
}

/*
var demo = '123;123*213+';
console.log(demo);
console.log(escape(demo));
console.log(unescape(escape(demo)));

document.cookie = 'nombre=Gato;';
document.cookie = 'apellido=Oros;tica;';
*/

crearCookie('nombre', 'Gato');
crearCookie('apellido', 'Orostica');
crearCookie('correo', 'h.orostica.95@gmail.com');
crearCookie('direccion', 'Calle San Fernando 275, Santa Maria, Valparaiso, Chile');



//Como obtener la cookie
function getCookie(nombre){
	
	var cookie = document.cookie;
	var cookieArr = cookie.split('; ');
	console.log(cookieArr);
	
	for (var i = 0; i < cookieArr.length; i++){
		
		var parArr = cookieArr[i].split('=');
		cookieArr[i] = parArr;
		
		if (parArr[0] === nombre){
			return unescape(parArr[1]);
		};
	}
	
	console.log(cookieArr);
	
	return undefined;
}

console.log(getCookie('correo'));

//borrarCookie('nombre');


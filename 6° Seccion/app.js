


function evento(arg){
    console.log('Me dispare');
    console.log(arg);
  //  console.log(arg.x, arg.y);
}
//console.log(objeto);

var objeto = document.getElementById('objDemo');

//objeto.addEventListener("keypress", evento);
objeto.addEventListener("click", evento);

//objeto.click();
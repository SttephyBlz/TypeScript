function holaMundo(nombre){
  return "Hola mundo. Soy "+ nombre;
}

var nombre ="Stephy";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;

alert("Hola mundo alert");
//Se compila en consola el TS:
//tsc <nombre del ficher>.ts
//tsc -w *.ts -> Checa continuamente las modificaciones

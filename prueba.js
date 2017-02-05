function holaMundo(nombre) {
    return "Hola mundo. Soy " + nombre;
}
var nombre = "Stephy";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//Variables y tipos
var nombre2 = "John"; //Cualquier tipo de datos.
var edad = 21;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS"];
etiqueta.innerHTML = nombre2 + " - " + edad;
alert("Hola mundo alert");
//Se compila en consola el TS:
//tsc <nombre del ficher>.ts
//tsc -w *.ts -> Checa continuamente las modificaciones

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
var a = 7;
var b = 12;
if (a === 7) {
    //Una variable let solo tiene alcance dentro
    //del bloque en cuestión. Mientras que var
    //se puede utilizar donde sea.
    var a_1 = 4;
    var b = 1;
    console.log("Dentro del if: " + a_1 + " - " + b);
}
console.log("Fuera del if: " + a + " - " + b);
//Se compila en consola el TS:
//tsc <nombre del ficher>.ts
//tsc -w *.ts -> Checa continuamente las modificaciones

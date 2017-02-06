function holaMundo(nombre){
  return "Hola mundo. Soy "+ nombre;
}

var nombre ="Stephy";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;


//Variables y tipos
var nombre2:any = "John"; //Cualquier tipo de datos.
var edad:number = 21;
var programador:boolean = true;
var langs: Array<string> = ["PHP", "JavaScript", "CSS"];

etiqueta.innerHTML =nombre2+" - "+edad;

var a = 7;
var b = 12;

if(a === 7){
  //Una variable let solo tiene alcance dentro
  //del bloque en cuestión. Mientras que var
  //se puede utilizar donde sea.
  let a = 4;
  var b = 1;

  console.log("Dentro del if: "+a+" - "+b);
}

console.log("Fuera del if: "+a+" - "+b);

//Funciones y tipado

//Debe devolver string
function devuelveString(num:number):string{
  return ""+num;
}

//Debe devolver numero
function devuelveNumero(texto:string):number{
  if(texto == "hola"){
    var num=66;
  }else{
    var num=90;
  }
  return num;
}

alert(devuelveString(32));
alert(devuelveNumero("hola"));
//Se compila en consola el TS:
//tsc <nombre del ficher>.ts
//tsc -w *.ts -> Checa continuamente las modificaciones

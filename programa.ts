/*
  A la clase donde estemos usando el decorador arranque le
  estamos añadiendo un nuevo método llamado lanzamiento.
*/
function arranque(lanzar: string){
  return function(target: function){
      target.prototype.lanzamiento = function(): void{
        alert(lanzar);
      }
  }
}

@arranque("Lanzamiento del curso de NodeJS y Angular 2")
class Programa{
  public nombre: string;
  public version: number;

  getNombre(){
    return this.nombre;
  }
  setNombre(nombre: string){
    this.nombre = nombre;
  }

  getVersion(){
    return this.version;
  }

  setVersion(version: number){
    this.version = version;
  }
}

class EditorVideo extends Programa{
  public timeline: number;

  getTimeline(){
    return this.timeline;
  }

  setTimeline(timeline: number){
    this.timeline = timeline;
  }

  getAllData():string{
    return this.getNombre()+" - "+this.getVersion()+" - "+this.getTimeline();
  }

}

var programa1 = new Programa();
programa1.lanzamiento();

var editor = new EditorVideo();

editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);

console.log(editor.getAllData());

//Lógica del formulario

var programas = [];

function guardar(){
  var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

  var programa = new Programa();
  programa.setNombre(nombre);
  programa.setVersion(1);

  //Añade al arreglo el objeto.
  programas.push(programa);

  var list = "";

  for(var i=0; i<programas.length; i++){
    list = list+"<li>"+programas[i].getNombre()+"</li>";
  }

  var listado = <HTMLElement> document.getElementById("listado");
  listado.innerHTML = list;

  (<HTMLInputElement>document.getElementById("nombre")).value = "";
}

class Coche{
  public color: string;
  public modelo: string;
  public velocidad: number;

  public getColor(){
    return this.color;
  }

  public setColor(color: string){
    this.color = color;
  }
}

//Crear un objeto
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();

coche.setColor("Rojo");
coche2.setColor("Azul");
coche3.setColor("Verde");

console.log("El color del coche 1 es: "+coche.getColor());
console.log("El color del coche 2 es: "+coche2.getColor());
console.log("El color del coche 3 es: "+coche3.getColor());

class Coche{
  public color: string;
  public modelo: string;
  public velocidad: number;

  constructor(modelo:any = null){
    this.color = "Blanco";
    this.velocidad=0;
    if(modelo == null){
      this.modelo = "BMW Genérico";
    }else{
      this.modelo = modelo;
    }
  }

  public getColor(){
    return this.color;
  }

  public setColor(color: string){
    this.color = color;
  }

  public getVelocidad():number{
    return this.velocidad;
  }

  public getModelo(){
    return this.modelo;
  }

  public setModelo(modelo: string){
    this.modelo = modelo;
  }

  public acelerar(){
    this.velocidad++;
  }

  public frenar(){
    this.velocidad--;
  }
}

//Crear un objeto
var coche = new Coche("Renault Clio");
var coche2 = new Coche();
var coche3 = new Coche();

coche.setColor("Rojo");
coche2.setColor("Azul");
coche3.setColor("Verde");

console.log("El color del coche 1 es: "+coche.getColor());
console.log("El color del coche 2 es: "+coche2.getColor());
console.log("El color del coche 3 es: "+coche3.getColor());

coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log("La velocidad del coche 1 es: "+coche.getVelocidad());

coche.frenar();
console.log("La velocidad después de frenar el coche 1 es: "+coche.getVelocidad());

console.log("El modelo del coche 1 es: "+coche.getModelo());

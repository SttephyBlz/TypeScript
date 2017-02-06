var Coche = (function () {
    function Coche() {
        this.velocidad = 0;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
//Crear un objeto
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor("Rojo");
coche2.setColor("Azul");
coche3.setColor("Verde");
console.log("El color del coche 1 es: " + coche.getColor());
console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El color del coche 3 es: " + coche3.getColor());
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());
coche.frenar();
console.log("La velocidad después de frenar el coche 1 es: " + coche.getVelocidad());

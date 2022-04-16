class Coche{
    constructor(Peso, Potencia, Marca){
        this.peso = Peso;
        this.potencia = Potencia;
        this.marca = Marca;
    }
}

console.log(new Coche(2000, 200, 'BMW'));

module.exports = Coche;
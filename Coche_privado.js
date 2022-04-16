class Coche{
    #privateField
    #Peso
    #Potencia
    #Marca
    constructor(Peso,Potencia, Marca){
        this.#Peso = Peso;
        this.#Potencia = Potencia;
        this.#Marca = Marca;
    }
}

console.log(new Coche(2000, 200, 'BMW'));

module.exports = Coche;
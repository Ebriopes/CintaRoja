const carro = {
    color: 'rojo',
    velocidad: 80,
    motor: 'v6',
    arranca() {
        console.log('run run')
    }
}

class TipoDePuerta {
    constructor(cantidad,automaticas,blindadas){
        this.cantidad = cantidad;
        this.automaticas = automaticas;
        this.blindadas   = blindadas  ;
    }
}

class Carro {
    constructor(peso,longitud,alto,quemacocos,tipoPuerta){
        this.peso = peso
        this.longitud = longitud
        this.alto = alto
        this.quemacocos = quemacocos
        this.tipoPuerta = tipoPuerta
    }
}

const Kitt = new Carro (500,3,2,true,new TipoDePuerta(4,true,false))

console.log(Kitt)
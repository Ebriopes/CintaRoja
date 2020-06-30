// HELP!
function mensajeNuevo(callback, perdido) {
    //console.warn(callback(perdido));
};

mensajeNuevo( (perdido) => {
    return "Estoy " + perdido + "\n\n";
}, "perdido");

//---------------------------------------------------------------------//


function mensajeHora(callback, ejemplo) {
    const minToHour = ejemplo.map(x => x/60);
    //console.error(callback(minToHour));
};

mensajeHora( arrayNew => {
    for (let i = 0; i < arrayNew.length; i++) {
        arrayNew[i] > 2 ? arrayNew[i] = arrayNew[i] : (arrayNew.splice(i,1) && i--);
    };

    return arrayNew;
}, [120, 80, 200, 100, 300]);

//-----------------------------------------------------------------------------------//
//Ejercicios

class Bebida {
    constructor(cantidad) {
        this.cantidad = cantidad;
    };

    get _cantidad () {
        return this.cantidad
    }

    set _cantidad (ml) {
        return this.cantidad = ml
    }
};

class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar;
    };

    get _azucar () {
        return this.azucar;
    };

    set _azucar (g) {
        return this.azucar = g;
    };
};

const fanta = new Refresco (150, 25);

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol) {
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    };

    get _porcentajeAlcohol () {
        return this.porcentajeAlcohol;
    };

    set _porcentajeAlcohol(g) {
        this.porcentajeAlcohol = g;
    };
};

const indio = new Cerveza(600, 8);

//console.log(indio._porcentajeAlcohol = 6)
//console.log(indio._porcentajeAlcohol)

//----- Ejercicio 2 --------//

class Electrodomestico {
    constructor(precio,color,capacidad) {
        this.precio = precio;
        this.color  = color;
        this.capacidad  = capacidad;
        this.consumoEnergetico = 100;
    }
}

class Lavadora extends Electrodomestico {
    constructor(color, capacidad, carga){
        super(null ,color, capacidad);
        this.carga = carga;
        this.precio = this.precioFinal();
    }

    precioFinal() {
        //this.precio = this.carga * super.consumoEnergetico
        return this.carga * this.consumoEnergetico
    }
}

const lavalava = new Lavadora("azul",20,16)

console.log(lavalava)
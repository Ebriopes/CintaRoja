class Persona {
    constructor(nombre,nacer,sexo,altura) {
        this.nombre = nombre;
        this.fecha  = nacer;
        this.sexo   = sexo;
        this.altura = altura;
        
        //Separar día, mes y año
        this.dia    = this.fecha.substring(0 , this.fecha.indexOf("/") );
        this.mes    = this.fecha.substring(this.fecha.indexOf("/") +1 , this.fecha.lastIndexOf("/") ) ;
        this.año    = this.fecha.substring( this.fecha.lastIndexOf("/") +1);       
        
        //generamos el RFC
        this.rfc    = this.genRFC();
    };
    
    genRFC (){
        const ultApellido       = this.nombre.lastIndexOf(" ");
        const primerApellido    = this.nombre.lastIndexOf( " " , ultApellido - 1 ) + 1;
        const inicialesRFC      = this.nombre.substr( primerApellido , 2).toUpperCase() + this.nombre[ultApellido + 1].toUpperCase() + this.nombre[0].toUpperCase();
        const finalRFC          = inicialesRFC + this.año.slice(2,4) + this.mes + this.dia;

        return finalRFC;
    };

    calcularIMC(peso) {
        this.peso = peso;

        return peso/(this.altura * this.altura);
    };

    esMayorDeEdad() {
        const fecha         = new Date();
        const liveYears     = fecha.getFullYear() - this.año;
        const liveMonths    = fecha.getMonth() - this.mes +1;
        const liveDays      = fecha.getDate() - this.dia;
        
        if (liveYears < 18 || (liveYears == 18 && liveMonths < 0) || (liveYears == 18 && liveMonths == 0 && liveDays < 0) ) {
           return false;
        } else  {
            return true;
        };
    }
}

class Cuenta {
    constructor(titular,cantidad) {
        this.titular    = titular;
        this.cantidad   = cantidad;
        this.estado     = this.evaluarCuenta();
    }

    ingresarCantidad(monto) {
        switch (this.estado) {
            case true:     
                if ( this.cantidad + monto > 900) {
                    console.log("Error: monto máximo excedido.\nDebes ingresar menos dinero");
                    return 1;
                }
                
                this.cantidad += monto;
                console.log("Ingreso exitoso\nSaldo actual: " + this.cantidad);
                break;
        
            default:
                if ( this.cantidad > 900) {
                    console.log("Error: monto máximo excedido.\nDebes retirar dinero");
                    return 1;
                } else if ( this.cantidad + monto > 900) {
                    console.log("Error: monto máximo excedido.\nDebes ingresar menos dinero");
                    return 1;
                } else if ( this.cantidad + monto < 10 ) {
                    console.log("Error: monto minimo no alcanzado.\nprueba ingresando una cantidad mayor");
                    return 1;
                }
                
                this.cantidad += monto;
                this.estado = true;
                console.log("Ingreso exitoso\nSaldo actual: " + this.cantidad);
                break;
        }
        return 0;
    }

    retirarCantidad(monto) {
        switch (this.estado) {
            case true:     
                if ( this.cantidad - monto < 10) {
                    console.log("Error: monto minimo no alcanzado.\nDebes retirar menos dinero");
                    return 1;
                }
                
                this.cantidad -= monto
                console.log("Retiro exitoso\nSaldo actual: " + this.cantidad);
                break;
        
            default:
                if ( this.cantidad - monto > 900) {
                    console.log("Error: monto máximo excedido.\nDebes retirar más dinero");
                    return 1;
                } else if ( this.cantidad < 10) {
                    console.log("Error: monto minimo no alcanzado.\nNo puedes retirar dinero");
                    return 1;
                } else if ( this.cantidad - monto < 10 ) {
                    console.log("Error: monto minimo no alcanzado.\nprueba retirando una cantidad menor");
                    return 1;
                }
                this.cantidad += monto;
                this.estado = true;
                console.log("Retiro exitoso\nSaldo actual: " + this.cantidad);
                break;
        }
        return 0;
    }

    evaluarCuenta() {
        if (this.cantidad > 900 ) {
            //cuenta desactivada
            console.log("Error: monto máximo excedido.\nCuenta DESACTIVADA")
            return false
        } else if (this.cantidad < 10) {
            console.log("Error: monto minimo incompleto.\nCuenta DESACTIVADA")
            return false
        } 

        return true
    }
}
//Objetos son creados

    //Este objeto requiere que la fecha se introduzca con "/" que dividan dd/mm/yy
    //Tampoco debe terminar el nombre con un " " (espacio) y la estatura está en metros  
const daniel = new Persona ("Daniel Antonio Vargas Rosales", "19/10/1997" , 'masculino', 1.75);

const cuentaDaniel = new Cuenta ("Daniel", 500)

//Llamadas verifican los datos
console.log("\n\nRFC: " + daniel.rfc);
console.log("IMC: " + daniel.calcularIMC(68).toFixed(1));
console.log("Es mayor de edad: " + daniel.esMayorDeEdad());

console.log("\n--------------------------------------------------------\n")


console.log(cuentaDaniel)
cuentaDaniel.ingresarCantidad(200)
cuentaDaniel.retirarCantidad(100)
const myPenguin = {
    character : "Tux",
    origin : "Linux",
    notes : "He is the mascot of the Linux kernel and appears in many other Linux programs"
}

console.log(`Hola, soy un pingüino y me llamo ${myPenguin.character}`)

myPenguin.puedeVolar = false

myPenguin.graznar = function graznar () {
    console.log("Kaww kaww!")
    return 'Kaww kaww!'
}

myPenguin.graznar()

myPenguin.saludar = function () {
    console.log(`Hola, soy un pingüino y mi nombre es ${this.character}`)
}

myPenguin.saludar()

myPenguin.character = "Señor Pingu"

myPenguin.saludar()

myPenguin.volar = () => {
    if (myPenguin.puedeVolar) {
        console.log(`¡Puedo volar!`)
    } else {
        console.log("No Puedo volar :(")
    }
}

myPenguin.volar()

myPenguin.puedeVolar = true

myPenguin.volar()


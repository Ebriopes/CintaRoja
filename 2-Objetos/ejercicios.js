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

console.log(myPenguin)

myPenguin.graznar()

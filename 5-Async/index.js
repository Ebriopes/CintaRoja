// HELP!
function mensajeNuevo(callback, perdido) {
    console.warn(callback(perdido));
};

mensajeNuevo( (perdido) => {
    return "Estoy " + perdido + "\n\n";
}, "perdido");

//---------------------------------------------------------------------


function mensajeHora(callback, ejemplo) {
    const minToHour = ejemplo.map(x => x/60);
    console.error(callback(minToHour));
};

mensajeHora( arrayNew => {
    for (let i = 0; i < arrayNew.length; i++) {
        arrayNew[i] > 2 ? arrayNew[i] = arrayNew[i] : (arrayNew.splice(i,1) && i--);
    };

    return arrayNew;
}, [120, 80, 200, 100, 300]);
import React from 'react';
import './Recuadro.css';

function Recuadro({logo}){
    return ( 
        <div className="Cuadro">
            <img className="RecuadroLogo" src={logo} />
            <p>Esta es la prueba</p>
        </div>
    )
}

/*

import React, { Component } from 'react';

class ItemFrame extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="it-frame">

            </div>
        )
    }
}
Vaaaa. Normalmente los componentes se ponen con mayúsucla

Y si nos ponemos mamones, el archivo se debe llamar igual. Recuadro.jsAh va
*/

export default Recuadro;
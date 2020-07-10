import React from 'react';
import './ToDoList.css';

function Base({children}) {
    return (
        <div className="Cuadro">
            {children}
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

Y si nos ponemos mamones, el archivo se debe llamar igual. Base.jsAh va
*/

export default Base;
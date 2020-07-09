import React,{useState} from 'react';
//import "./Card.css"

const Card = ({title,src,alt}) => {
    const [colorC, setColorC] = useState ()

    return (
        <div className="col-sm" style={{backgroundColor: colorC}}>
            <h1>{title}</h1>
            <img className="img-fluid" src={src} alt={alt}/>
            <button onClick={() => setColorC(`#${Math.round((Math.random() * 4096)).toString(16)}`)}>Cambiando Color</button>
        </div>);
};

export default Card
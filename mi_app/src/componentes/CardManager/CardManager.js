import React,{useEffect,useState} from 'react';
import Card from '../Cards/Card';
import axios from 'axios'
import './CardManager.css'

const CardManager = () => {
    const [data,setData] = useState([]);
    const [palabra, setPalabra] = useState('');
    const Api_key = "9CmaT75HBcgkxcpoM0xfoKZAJsrX1s5X"
    const cards = data.map(item => <Card src={item.images.downsized_large.url} key={item.id}alt={item.title}></Card>);
    useEffect(() => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${Api_key}&q=${palabra}&limit=4`)
        .then(({data})=>setData(data.data))
    }
    , [palabra])

    return (
        <>
            <label>Buscanding</label>
            <input 
                type="text" 
                placeholder="Escribeme"
                onChange={(event) => 
                    setPalabra(event.target.value)
                }/>
            {palabra}
            <div className="card-manager container row">
                {cards}
            </div>
        </>
    );
};

export default CardManager;

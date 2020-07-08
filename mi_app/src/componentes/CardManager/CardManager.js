import React,{useEffect,useState} from 'react';
import Card from '../Cards/Card';
import axios from 'axios'
import './CardManager.css'

const CardManager = () => {
    const [data,setData] = useState([]);
    const [palabra, setPalabra] =useState('');
    const Api_key = "9CmaT75HBcgkxcpoM0xfoKZAJsrX1s5X"
    const getGifs = () =>{
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${Api_key}&q=${palabra}&limit=4`)
        .then(({data,status})=>
            setData(data.data)
        )
    }
    useEffect(()=> getGifs, [palabra])
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
            {console.log(data)}
            <div className="card-manager">
                {data.map(item => <Card src={item.images.downsized_large.url}></Card>)}
            </div>
        </>
    );
};

export default CardManager;

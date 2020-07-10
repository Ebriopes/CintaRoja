import React,{useState,useEffect} from 'react'
//import {Link} from 'react-router-dom'

const Task = ({title,description,priority,time}) => {
    const [BorColor,setBorColor] = useState("-light")
    const setPriority = () =>{
        let newColor
        switch (priority) {
            case 1:
                newColor="-info";
                break;
            case 2:
                newColor="-primary";
                break;
            case 3:
                newColor="-warning";
                break;
            case 4:
                newColor="-danger";
                break;
            default:
                newColor="-secondary";
                break;
        }
        setBorColor(newColor)
    }
    useEffect(setPriority,[])
    return(
        <div className={`card border${BorColor} m-2`}>
            <div className={`card-header bg${BorColor} text-white d-flex`}>
                <h3 className="flex-grow-1 p-0 mr-3">{title}</h3>
                <time className="btn-info rounded-lg h-100 p-2">{time} {time === 1 ?`hour`:`hours`}</time>
            </div>
            <div className="card-body">
                <label className="card-text">{description}</label>
            </div>
        </div>
    )
} 
export default Task
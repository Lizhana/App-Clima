import React from "react";
import { Link } from "react-router-dom";
import './Css/card.css';

export default function Card({name, min, max, img, onClose, id}){
    return (
        <div className='ciudades' >
            <button onClick={onClose}>X</button>
            <img 
            className="imagen"
            src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="Imagen del Clima" />
            <Link to={`/ciudad/${id}`}>
            <h2>{name}</h2>
            </Link>
            <div>
                <span className="temp1" >❄️Min</span> <span className="temp2" >☀️Max</span>
            </div>
            <div>
          <span className="temp1" >{Math.round(min)}°C -</span>
          <span className="temp2" >{Math.round(max)}°C</span>
          <hr />
        </div>
        </div>
    )
}
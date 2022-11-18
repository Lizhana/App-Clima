import React from "react";
import './Css/Ciudad.css'


export default function Ciudad(ciudadId) {
  return (
    <>
      <img
        src="https://juanjoromero.es/wp-content/uploads/2008/01/Variaciones-temperatura-Tierra.gif"
        alt="Temperatura Globo"
        className="imagenC"
      />
      <div className="divC" >
        <h2>{ciudadId.ciudad.name}</h2>
        <img src={`http://openweathermap.org/img/wn/${ciudadId.ciudad.img}@2x.png`}
          alt="Imagen climatica" 
        />
        <hr />
        <p className="p" >Minima: {ciudadId.ciudad.min}°C</p>
        <p className="p" >Maxima: {ciudadId.ciudad.max}°C</p>
        <p className="p" >Temperatura: {ciudadId.ciudad.temp}°C</p>
        <p className="p" >Latitud: {ciudadId.ciudad.latitud} Km</p>
        <p className="p" >Longitud: {ciudadId.ciudad.longitud} Km</p>
        <p className="p" > Weather: {ciudadId.ciudad.weather}</p>
      </div>
    </>
  );
}

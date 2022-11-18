import React, {useState} from "react";
import Nav from "./Components/Nav";
import Cards from "./Components/Cards";
import Ciudad from "./Components/Ciudad";
import {Route} from 'react-router-dom/';
import './App.css'


function App() {
  const [cities, setCities] = useState([]);
  

  async function onSearch(ciudad) {
   

    console.log(ciudad);

    try {
       await  fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
      )
        .then((r) => r.json())
        .then((recurso) => {
          if (recurso.main !== undefined) {
            const cities = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon,
            };
            setCities((oldCities) => [...oldCities, cities]);
          } else {
            alert("No se encontro la ciudad");
          }
        });
    } catch (error) {
      console.log(error);
    }
  } 



  function onClose(id){
    setCities(oldCities => oldCities.filter( c => c.id !== id));
    
  }
  
  return (
    <div className="App">
          <div>
        <Route path='/' render={()=> 
        <Nav onSearch={onSearch} />}/>
       <br/>
      </div>
      <div>
        <Route exact path="/" render={()=> 
        <Cards cities= {cities} onClose={onClose} />}/>
        <br/>
       <div>
        <Route exact path="/ciudad/:ciudadId"
        render={ ({match}) =>  <Ciudad ciudad= {cities.filter((city)=> city.id === parseInt(match.params.ciudadId))[0]} /> } />
        </div> 
      </div>


    </div>
  );
}

export default App;

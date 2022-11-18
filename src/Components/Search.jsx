import React, { useState } from "react";
import './Css/Search.css'

export default function Search({onSearch}){
    const [ciudad, setCity] = useState("");

    const changeHandler = (e) => { setCity(e.target.value);
    }

    const changeReset = ()=>{
        setCity("")
    }
    
    const enter = (e) =>{
        if(e.key === 'Enter'){
            onSearch(ciudad)
            changeReset()
        }
    }
    console.log(ciudad)

    return (
        <div className="divN" >
            <input className="input"
            type="text"
            placeholder="🔎 Ciudad..."
            onChange={changeHandler}
            value={ciudad}
            onKeyPress={enter}
            />
            <button className="boton"
            onClick={(e) => {
                e.preventDefault();
                onSearch(ciudad);
                changeReset();
            }} type='submit'
            > Add 
            </button>
        </div>
    );
            
}
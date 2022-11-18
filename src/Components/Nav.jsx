import React from "react";
import Search from './Search'
import { Link } from "react-router-dom";
import Logo from './Imagenes/logoHenry.png'
import './Css/Nav.css'

export default function Nav({onSearch}){
    return (
        <div className="divtop">
            <img src={Logo} alt="Logo Henry" className="img" />
            <Link to="/">
            <div className="titulo"  >
                Aplicacion del Clima - Lizhana
            </div>
            </Link>
            <Search onSearch={onSearch}/>
        </div>
    )
};
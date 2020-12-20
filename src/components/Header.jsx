import React from 'react'
import logo from '../images/header-logo.png'


export const Header = () => {
    return (
        <header>
            <div class="contenedor">
                <div class="textos">
                    <img src={logo} className="header-img-logo" alt="Main Logo"/>
                    <h1>Martin Pino</h1>
                    <h2>Jr. Developer</h2>
                    <a class="boton" href="#iconos-contacto">Know me!</a>
                </div>
            </div>
        </header>
    )
}

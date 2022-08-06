import React from 'react'
import 'animate.css';
import logo from '../images/header-logo.png'


export const Header = () => {
    return (
        <header>
            <div className="contenedor">
                <div className="textos">
                    <img src={logo} className="header-img-logo animate__animated animate__fadeIn" alt="Main Logo"/>
                    <h1 className='animate__animated animate__fadeInLeft'>Martin Pino</h1>
                    <h2 className='animate__animated animate__fadeInRight'>Frontend Developer</h2>
                    {/* <a className="boton" href="#iconos-contacto">Know me!</a> */}
                </div>
            </div>
        </header>
    )
}

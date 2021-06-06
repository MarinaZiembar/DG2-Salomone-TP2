import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {

    // method
    function toggleMenu (event) {
        document.querySelector('.hamburger').classList.toggle('is-active');
        document.querySelector( ".menuppal" ).classList.toggle("is_active");
        event.preventDefault();
    }

    return (
        <>
            <div className="hamburger" onClick={(e) => toggleMenu(e)}>
                <div className="_layer -top"></div>
                <div className="_layer -mid"></div>
                <div className="_layer -bottom"></div>
            </div>
            <nav className="menuppal">
                <ul>
                    <li className="li-home">
                        <Link to="/">Home</Link>
                        <div className="underline-home"></div>
                    </li>
                    <li className="li-articulos">
                        <Link to="/articulos">Artículos</Link>
                        <div className="underline-articulos"></div>
                    </li>
                    <li className="li-contacto">
                        <Link to="/contacto">Contacto</Link>
                        <div className="underline-contacto"></div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;
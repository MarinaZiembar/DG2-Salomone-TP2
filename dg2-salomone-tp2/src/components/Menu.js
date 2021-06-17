import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


function Menu(props) {

    // method
    function toggleMenu (event) {
        document.querySelector('.hamburger').classList.toggle('is-active');
        document.querySelector( ".menuppal" ).classList.toggle("is_active");
        event.preventDefault();
    }
    useEffect(() => {
    
        const bkVideo = document.getElementById("menu-bk");
        bkVideo.play();
    
      }, [])

    return (
        <>
            <div className="hamburger" onClick={(e) => toggleMenu(e)}>
                <div className="_layer -top"></div>
                <div className="_layer -mid"></div>
                <div className="_layer -bottom"></div>
            </div>
            <nav className="menuppal">
                <video 
                    src={props.background_url} 
                    autoPlay 
                    muted 
                    loop 
                    id="menu-bk" 
                />
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
                    <div className="sabias-que">
                        <h3>Sabías que...?</h3>
                        <p>{props.dato_curioso}</p>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default Menu;
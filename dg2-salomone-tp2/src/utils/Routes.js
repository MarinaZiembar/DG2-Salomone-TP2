import Home from '../pages/Home';
import Articulos from '../pages/Articulos';
import Contacto from '../pages/Contacto';



export const routes = [
    {
        label:"Home",
        path:"/",
        component:Home,
    },
    {
        label:"Artículos",
        path:"/articulos",
        component:Articulos,
    },
    {
        label:"Contacto",
        path:"/contacto",
        component:Contacto,
    },
]
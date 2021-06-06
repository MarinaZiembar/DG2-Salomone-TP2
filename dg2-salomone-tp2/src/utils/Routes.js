import Home from '../pages/Home';
import Articulos from '../pages/Articulos';
import Articulo1 from '../pages/articles/Articulo1';
import Articulo2 from '../pages/articles/Articulo2';
import Articulo3 from '../pages/articles/Articulo3';
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
        label:"Artículo 1",
        path:"/articulo-1",
        component:Articulo1,
    },
    {
        label:"Artículo 2",
        path:"/articulo-2",
        component:Articulo2,
    },
    {
        label:"Artículo 3",
        path:"/articulo-3",
        component:Articulo3,
    },
    {
        label:"Contacto",
        path:"/contacto",
        component:Contacto,
    },
]
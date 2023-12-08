//Imagen
import Jona from '../assets/Imagenes y gifs/Jonathan.png'
//Letras
import Q from '../assets/Imagenes y gifs/letra-q.gif'
import U from '../assets/Imagenes y gifs/letra-u.gif'
import I from '../assets/Imagenes y gifs/letra-i.gif'
import E from '../assets/Imagenes y gifs/letra-e.gif'
import N from '../assets/Imagenes y gifs/letra-n.gif'
import S from '../assets/Imagenes y gifs/letra-s.gif'
import O from '../assets/Imagenes y gifs/letra-o.gif'
import Y from '../assets/Imagenes y gifs/letra-y.gif'
//Tecnologias
import Python from '../assets/Imagenes y gifs/python.png'
import JS from '../assets/Imagenes y gifs/js.png'
import Postgres from '../assets/Imagenes y gifs/postgre.png'
import VisualSC from '../assets/Imagenes y gifs/visual-basic.png'
import Bootstrap from '../assets/Imagenes y gifs/bootstrap.png'
import HTML from '../assets/Imagenes y gifs/html5.png'
import CSS from '../assets/Imagenes y gifs/css3-alt.png'
import React from '../assets/Imagenes y gifs/react.png'
//Navlink
import { NavLink } from "react-router-dom";


const Jonathan = () => {
  return (
    <div>

      <div className='row align-items-center'>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img className="img-fluid" src={Jona} alt="imagen1"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={Q} alt="q" height="50px"/>
            <img src={U} alt="u" height="50px"/>
            <img src={I} alt="i" height="50px"/>
            <img src={E} alt="e" height="50px"/>
            <img src={N} alt="n" height="50px"/>
            <br />
            <img src={S} alt="s" height="50px"/>
            <img src={O} alt="o" height="50px"/>
            <img src={Y} alt="y" height="50px"/>
            <p className="text-justify display-4 fs-2">
              Desarrollador Fullstack JR con pasión por la creación de aplicaciones web de alto rendimiento.
              <br/>
              <h3 className="text-justify display-4 fs-1" >Front: </h3>

              <NavLink to='https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals' >
                <img src={HTML} alt="html" height="50px"/>
              </NavLink>

              <NavLink to='https://developer.mozilla.org/es/docs/Web/CSS'>
                <img src={CSS} alt="css" height="50px"/>
              </NavLink>

              <NavLink to='https://es.react.dev/' >
                <img src={React} alt="react" height="50px"/>
              </NavLink>

              <NavLink to='https://developer.mozilla.org/es/docs/Web/JavaScript'>
                <img src={JS} alt="javascript" height="50px" />
              </NavLink>

              <NavLink to='https://getbootstrap.com/'>
                <img src={Bootstrap} alt="bootstrap" height="50px"/>
              </NavLink>

              <br />

              <h3 className="text-justify display-4 fs-1">Back: </h3>
              <NavLink to='https://code.visualstudio.com/' >
                <img src={VisualSC} alt="visual" height="50px"/>
              </NavLink>

              <NavLink to='https://www.python.org/' >
                <img src={Python} alt="python" height="50px"/>
              </NavLink>

              <NavLink to='https://www.postgresql.org/'>
                <img src={Postgres} alt="postgres" height="50px"/>
              </NavLink>
            </p>
        </div>
      </div>

    </div>
  )
}

export default Jonathan;
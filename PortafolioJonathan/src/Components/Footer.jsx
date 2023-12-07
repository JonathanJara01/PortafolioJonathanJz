import { NavLink } from "react-router-dom";

import Git from '../assets/Imagenes y gifs/github.png'
import LinkedIn from '../assets/Imagenes y gifs/linkedin.png'
import Wpp from '../assets/Imagenes y gifs/whatsapp.png'

const Footer = () => {
  return (
    <div className="container animate__animated animate__fadeInDown" >
    <div className="row">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                    <NavLink to='https://github.com/JonathanJara01' className='git'>
                        <img  src={Git} height='50px'></img>
                    </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink to='https://www.linkedin.com/in/jonathan-jaramillo-671434265/' className='linkedIn'>
                        <img  src={LinkedIn} height='50px'></img>
                    </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink to='https://www.wa.link/mx47s9' className='Whatsapp'>
                        <img  src={Wpp} height='50px'></img>
                    </NavLink>
                    </li>
                </ul>
                <h6 className="text-center text-muted">© 2023 Jonathan Jaramillo Zapata</h6>
                
            </footer>
        </div>
    </div>
  )
}

export default Footer;
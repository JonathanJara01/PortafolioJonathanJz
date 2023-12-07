 
//Componentes
import Home from './Components/Home';
import Footer from './Components/Footer.jsx';

import './App.css'

import {Routes,Route} from 'react-router-dom';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/Footer' element={<Footer/>} ></Route>
    </Routes>

    </>
  )
}

export default App

import ReactPlayer from 'react-player'
import Video from '../assets/Imagenes y gifs/Proyectos.mp4';

const Proyectos = () => {
  return (
    <div className='row align-items-center'>
        <div className="position-relative border shadow-lg rounded-md overflow-hidden w-900 h-500 drop-shadow group">
            <ReactPlayer
            url={Video}  // Corrige la importación aquí
            width='100%'
            height='100%'
            controls={true}  // Puedes usar controls sin comillas para indicar que es un valor booleano
            playing={true}
            volume={0.20}
            loop={true}
            onPlay={true}
            />
        </div>
  </div>
  )
}

export default Proyectos
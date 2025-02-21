import { Link } from "react-router-dom";
import './Galeria.css';
import img1G from '../assets/Galeria/img1G.jpg';
import img2G from '../assets/Galeria/img2G.jpg'; 
import img3G from '../assets/Galeria/img3G.jpg'; 
import img4G from '../assets/Galeria/img4G.jpg'; 

    function Galeria(){
        return (
            <div className="galeria">
                <h1>Galería de Imágenes</h1>
                    <div className="galeria-container">
                        <img src={img1G} alt="Imagen 1" className="galeria-imagen" />
                        <img src={img2G} alt="Imagen 2" className="galeria-imagen" />
                        <img src={img3G} alt="Imagen 3" className="galeria-imagen" />
                        <img src={img4G} alt="Imagen 4" className="galeria-imagen" />
                    </div>
            </div>
        )
    }

export default Galeria;<Link to="/">Home</Link>
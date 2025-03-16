import react from "react";
import logoAdidas from "../assets/Decoracion/Adidas_Logo.jpg";
import './Home.css'
    function Home(){
        return (
            <div> 
                <h1>¡Hola! Somos AdidasStore, tenemos los mejores productos y precios, ultimos modelos solo para vos!</h1>
                <img src={logoAdidas} alt="Logo Adidas"/>
                
                <div class="social-media">
                    <h3>Síguenos en:</h3>
                    <div class="social-icons">
                        <a href="https://facebook.com" target="_blank" class="social-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook"/>
                        </a>
                        <a href="https://twitter.com" target="_blank" class="social-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter"/>
                        </a>
                        <a href="https://instagram.com" target="_blank" class="social-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram"/>
                        </a>
                    </div>
                </div>
            </div>

            
        
    )
}

export default Home;
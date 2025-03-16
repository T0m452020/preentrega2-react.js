import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./Layout.css";

function Layout() {
    return (
        <div className="layout">
            <NavBar />
            <div className="content">
                <Outlet />
            </div>
            <footer className="footer">
                <p>&copy; 2024 AdidasStore. Todos los derechos reservados.</p>
                <div className="footer-links">
                    <a href="/terminos">Términos y Condiciones</a>
                    <a href="/privacidad">Política de Privacidad</a>
                    <a href="/contacto">Contacto</a>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
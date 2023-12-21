import { Link } from "react-router-dom";
import "../assets/css/forms.css";
import logo from "../assets/img/DataRoomLogoOscuro.png";

export function Login() {
    return (
        <main>
            <div className="container_form text-center">
                <aside className="container_form_data">
                    <h1>Inicio de sesión</h1>
                    <form>
                        <div className="container_inputs">
                            <label>Usuario:</label>
                            <input type="text" />
                        </div>
                        <div className="container_inputs">
                            <label>Contraseña:</label>
                            <input type="password" />
                        </div>
                        <div className="buttons_form">
                            <input className="buttons_general" type="submit" value="Iniciar sesión" />
                            <Link to="/register">¿No tienes una cuenta? Regístrate aquí</Link>
                        </div>
                    </form>
                </aside>
                <img className="img_form" src={logo} alt="Logo de la empresa" />
            </div>
        </main>
    )
}
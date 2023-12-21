import { Link } from "react-router-dom";
import "../assets/css/forms.css";
import logo from "../assets/img/DataRoomLogoOscuro.png";

import { useState } from "react";

export function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleUserChange = (event) => {
        setUser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        if (user === "" || password === "") {
            alert("Por favor ingresa un usuario y contraseña");
            return;
        } else if (user === "admin" && password === "admin") {
            alert("Bienvenido administrador");
            window.location.href = "/";
            localStorage.setItem("user", user);
            return;
        }
        // Aquí puedes hacer algo con los datos del usuario y la contraseña
        console.log("Usuario:", user);
        console.log("Contraseña:", password);
    };

    return (
        <main>
            <div className="container_form text-center">
                <aside className="container_form_data">
                    <h1>Inicio de sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="container_inputs">
                            <label>Usuario:</label>
                            <input type="text" id="user" value={user} onChange={handleUserChange} />
                        </div>
                        <div className="container_inputs">
                            <label>Contraseña:</label>
                            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
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
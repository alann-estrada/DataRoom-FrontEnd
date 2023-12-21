import { useEffect, useState } from "react";
import logoDark from "../assets/img/DataRoomLogoOscuro.png";
import "../assets/css/nav.css";
import { Link } from "react-router-dom";

export function Nav({ user }) {
    const [darkMode, setDarkMode] = useState(false);
    const handleMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode === true) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }
    useEffect(() => {
        console.log("darkMode", darkMode);
        const darkModeLocal = localStorage.getItem("darkMode");
        console.log("darkModeLocal", darkModeLocal)
        if (darkModeLocal === true) {
            setDarkMode(true);
            document.body.classList.add("dark");
        } else if (darkModeLocal === false) {
            setDarkMode(false);
            document.body.classList.remove("dark");
        }
    }, [])
    return (
        <nav>
            <a href={user ? "/dashboard" : "/"}>
                <img className={darkMode ? "logo_img logo-white" : "logo_img"} src={logoDark} alt="Logo Data Room" />
            </a>
            <div className="nav-links">
                {user ? (
                    <>
                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/profile">Alumnos</Link>
                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/students">Materias</Link>
                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/teachers">Grupo</Link>

                        {/* <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/profile">Maestros</Link>
                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/students">Materias</Link>
                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/teachers">Grupo</Link>  */}

                        {/* <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/profile">Alumno</Link>
                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/profile">Maestro</Link> 
                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/students">Materias</Link>
                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/teachers">Grupo</Link> */}

                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/dashboard">Dashboard</Link>
                        <Link className={!darkMode ? "link text-dark" : "link text-light"} to="/logout">Cerrar Sesion</Link>
                    </>
                ) : (
                    <>
                        <a className={!darkMode ? "link text-dark" : "link text-light"} href="/login">Iniciar Sesion</a>
                        <a className={!darkMode ? "link text-dark" : "link text-light"} href="/register">Registrarse</a>
                    </>
                )}
                {/* eslint-disable-next-line */}
                <a className={!darkMode ? "link text-dark changeMode link" : "link text-light changeMode link"} onClick={() => handleMode()}>Modo {darkMode ? "Claro" : "Oscuro"}</a>
            </div>
        </nav >
    )
}
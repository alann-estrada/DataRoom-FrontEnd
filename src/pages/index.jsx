import { GeneralButton } from "../components/buttons/general";
import imageIndex from "../assets/img/imageIndex.png";
import "../assets/css/home.css";
import "../assets/css/planes.css";
import { Card } from "../components/cards";
export function Home() {
    const handleLogin = () => {
        window.location.href = "/login";
    }
    return (
        <main className="container_Index text-center">
            <h1>Bienvenidos al sistema de gestión de alumnos <strong>"Data Room"</strong></h1>
            <p>El mejor sistema para la administración de los alumnos para su institución, este puede mostrar las calificaciones, informacion del alumno. </p>
            <div className="container_Text">
                <div className="div_index text-center">
                    <h2 className="m-4">Para iniciar crea una cuenta, si ya tienes una inicia <span style={{ textDecoration: "underline" }}>sesión aquí</span></h2>
                    <GeneralButton className="buttons_general" text="Iniciar sesión" onClick={handleLogin} />
                </div>
                <img className="image_index" src={imageIndex} alt="Imagen Principal" />
            </div>
            <h1 className="text-center">Conoce nuestros planes</h1>
            <main class="main flow">
                <div class="main__cards cards">
                    <div class="cards__inner">
                        <Card moonth="1" price="200" bullets_1="Administración completa de calificaciones" bullets_2="Atención a cliente por Correo" cta="Plan Mensual" />
                        <Card moonth="3" price="500" bullets_1="Administración completa de calificaciones" bullets_2="Atención a cliente por Correo" bullets_3="Ahorra 2 semanas" cta="Plan Trimestral" />
                        <Card moonth="12" price="2,000" bullets_1="Administración completa de calificaciones" bullets_2="Atención a cliente por Correo" bullets_3="Ahorra hasta 2 meses" cta="Plan Anual" />
                    </div>
                    <div class="overlay cards__inner"></div>
                </div>
            </main>
        </main>
    )
}
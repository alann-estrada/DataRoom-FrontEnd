import { Card } from "../components/cards";

export function Payment() {
    return (
        <main className="text-center center">
            <h1>Pagina de Pagos</h1>
            <p>Bienvenido a nuestra pagina de pagos</p>
            <br />
            <h4>Seleccione el metodo de pago</h4>
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
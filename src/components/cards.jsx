export function Card({ moonth, price, bullets_1, bullets_2, bullets_3, cta }) {
    return (
        <div class="cards__card card">
            <h2 class="card__heading">{moonth} mes/meses</h2>
            <p class="card__price">${price}.00</p>
            <ul role="list" class="card__bullets flow">
                <li>{bullets_1}</li>
                <li>{bullets_2}</li>
                {bullets_3 && <li>{bullets_3}</li>}
            </ul>
            <a href="/payment" class="card__cta cta">{cta}</a>
        </div>
    )
}
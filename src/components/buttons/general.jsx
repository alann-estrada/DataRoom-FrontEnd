import "../../assets/css/buttons.css";

export function GeneralButton({ text, onClick, className }) {
    return (
        <button onClick={onClick} className={className}>{text}</button>
    )
}
import "./Button.css";

function Button({ type = "button", text, disabled, onClick, btnStyle, hasIcon, iconRoute, rounded, color = "yellow"}) {
    return (
        <div className="button-container">
            <button
                className={`button 
                ${btnStyle === "line" && "line-button"} 
                ${color === "white" && "white-button"} 
                ${color === "yellow" && "yellow-button"}
                ${rounded && "btn-rounded"}`}
                type={type}
                disabled={disabled}
                onClick={onClick}
            >
                {hasIcon && (
                    <img src={iconRoute} alt="Icono" className="button-icon" />
                )}
                {text}
            </button>
        </div>
    );
}

export default Button;

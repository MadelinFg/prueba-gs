import './Button.css';

function Button({type, text, disabled, onClick}) {
    return (
        <div className="button-container">
            <button className='simple-button' type={type} disabled={disabled} onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;
import './Input.css';

function Input({type, title, value, placeholder, name, disabled, onChange, lineInput}) {
    return (
        <div className="input-container">
            <label htmlFor={name} className='input-label'>{title}</label>
            <input className={[lineInput ? 'line-input input-component' : 'normal-input input-component']}
                type={type}
                value={value} 
                name={name} 
                placeholder={placeholder} 
                disabled={disabled} 
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
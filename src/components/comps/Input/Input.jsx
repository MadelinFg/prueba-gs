import './Input.css';

function Input({type, title, value, placeholder = "", name, disabled, required, onChange, lineInput, hasIcon, iconSource = ''}) {
    return (
        <div className="input-container">
            <div className="input-title">
                <label htmlFor={name} className='input-label'>{title}</label>
                {
                    required && <p className='required-text'>*</p>
                }
                {
                    hasIcon && <img src={iconSource} alt="Icon" className='input-icon' />
                }
            </div>
            
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
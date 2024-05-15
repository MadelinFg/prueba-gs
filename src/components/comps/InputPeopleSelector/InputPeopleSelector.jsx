import './InputPeopleSelector.css';

function InputPeopleSelector({options, title}) {
    return (
        <div className="selector-container">
            <label htmlFor="title" className='label-select'>{title}</label>
                <select id='title' className='input-select'>
                    {
                        options.map((option, index) => {
                            return index === 0 ?
                            <option key={index} value={index} selected disabled>{option}</option>
                            :
                            <option key={index} value={index}>{option}</option>
                        })
                    }
                </select>
        </div>
    );
}

export default InputPeopleSelector;
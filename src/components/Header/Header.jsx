import './Header.css';
import hamburguesa from '../../assets/svg/hamburguesa.svg';
import home from '../../assets/svg/home.svg';

function Header({}) {
    return (
        <div className="header">
            <div className="left-section">
                <div className="menu">
                    <img src={hamburguesa} alt="Menu" className='menu-icon' />
                </div>
                <div className="home">
                    <img src={home} alt="Inicio" className='home-icon' />
                </div>
            </div>
            <div className="right-section">
                <div className="account">
                    <img src="https://picsum.photos/200" alt="Cuenta" className='account-icon' />
                </div>
            </div>
        </div>
    );
}

export default Header;
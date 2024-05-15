import './Modal.css'

import close from '../../assets/svg/cerrar.svg'

export const Modal = ({isOpen, closeModal, title, canClose = true, children}) => {
    const handleModalContainerClick = (e) => {
        e.stopPropagation() 
    }

    const can = () => {
        if (canClose) {
            closeModal()
        }
    }
    
    return (
        <div className={`modal ${isOpen && "is-open"}`} onClick={can}>
            <div className="modal-container" onClick={handleModalContainerClick} >
                {
                    canClose && 
                    <button className="modal-close" onClick={closeModal}>
                        <img src={close} alt="Cerrar" className='close-button' />
                    </button>
                }
                <div className="modal-header">
                    <h2 className='title'>{title}</h2>
                </div>
                <div className="divider"></div>
                {children}
            </div>
        </div>
    )
}

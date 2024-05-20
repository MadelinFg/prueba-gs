import Input from "../comps/Input/Input";
import Button from "../comps/Button/Button";

import infoIcon from '../../assets/svg/informacion.svg'

function AddModal({handleMainButton = () => {}, handleSecondaryButton = () => {}, formInputs, mainButtonTitle, secondaryButtonTitle}) {
    return (
        <div className="modal-content-container">
            <div className="inputs-container">
                <Input
                    type="text"
                    title="Título de la iniciativa:"
                    required
                    name="inpt-title"
                    value={formInputs.title}
                    onChange={(e) => formInputs.setStageTitle(e.target.value)}
                />
                <Input
                    type="text"
                    title="Descripción de la etapa:"
                    name="inpt-stage"
                    value={formInputs.description}
                    onChange={(e) => formInputs.setStageDescription(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    title="Entregable de la etapa:"
                    name="inpt-stage"
                    value={formInputs.delivery}
                    onChange={(e) => formInputs.setStageDelivery(e.target.value)}
                    hasIcon
                    iconSource={infoIcon}
                />
                <Input
                    type="date"
                    title="Fecha Inicio:"
                    name="inpt-initial-date"
                    required
                    value={formInputs.initialDate}
                    onChange={(e) => formInputs.setModalInitialDate(e.target.value)}
                    hasIcon
                    iconSource={infoIcon}
                />
                <Input
                    type="date"
                    title="Fecha Fin:"
                    name="inpt-final-date"
                    required
                    value={formInputs.finalDate}
                    onChange={(e) => formInputs.setModalFinalDate(e.target.value)}
                    hasIcon
                    iconSource={infoIcon}
                />
            </div>

            <div className="buttons-container">
                <Button text={secondaryButtonTitle} color="white" onClick={handleSecondaryButton} />
                <Button text={mainButtonTitle} onClick={handleMainButton} />
            </div>
        </div>
    );
}

export default AddModal;
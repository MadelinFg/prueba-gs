import { useState } from "react";

import Input from "../comps/Input/Input";
import Button from "../comps/Button/Button";

import infoIcon from '../../assets/svg/informacion.svg'

function AddModal({}) {
    const [stageTitle, setStageTitle] = useState("");
    const [stageStage, setStageStage] = useState("");
    const [initialDate, setInitialDate] = useState("");
    const [finalDate, setFinalDate] = useState("");

    const handleAdd = () => {
        alert("Agregar etapa")
    }
    const handleCancel = () => {
        alert("Cancelar")
    }
    
    return (
        <div className="modal-content-container">
            <div className="inputs-container">
                <Input
                    type="text"
                    title="Título de la iniciativa:"
                    required
                    name="inpt-title"
                    value={stageTitle}
                    onChange={(e) => setStageTitle(e.target.value)}
                />
                <Input
                    type="text"
                    title="Entregable de la etapa:"
                    name="inpt-stage"
                    value={stageStage}
                    onChange={(e) => setStageStage(e.target.value)}
                    hasIcon
                    iconSource={infoIcon}
                />
                <Input
                    type="date"
                    title="Fecha Inicio:"
                    name="inpt-initial-date"
                    required
                    value={initialDate}
                    onChange={(e) => setInitialDate(e.target.value)}
                    hasIcon
                    iconSource={infoIcon}
                />
                <Input
                    type="date"
                    title="Fecha Fin:"
                    name="inpt-final-date"
                    required
                    value={finalDate}
                    onChange={(e) => setFinalDate(e.target.value)}
                    hasIcon
                    iconSource={infoIcon}
                />
            </div>

            <div className="buttons-container">
                <Button text="Cancelar" color="white" onClick={handleCancel} />
                <Button text="Agregar" onClick={handleAdd} />
            </div>
        </div>
    );
}

export default AddModal;
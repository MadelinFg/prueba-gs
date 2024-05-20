import { useEffect, useState } from "react";

import Input from "../comps/Input/Input";
import InputSelector from "../comps/InputSelector/InputSelector";
import InputPeopleSelector from "../comps/InputPeopleSelector/InputPeopleSelector";
import Button from "../comps/Button/Button";
import { Modal } from "../Modal/Modal";
import AddModal from "../Modal/AddModal";

import { useModal } from "../../hooks/useModal";

import "./TabDatos.css";

import info from "../../assets/svg/informacion.svg";
import addIcon from "../../assets/svg/agregar.svg";
import editIcon from "../../assets/svg/editar.svg";
import deleteIcon from "../../assets/svg/delete.svg";

function TabDatos() {
    const [ID, setID] = useState("0");
    const [IDSpires, setIDSpires] = useState("");
    const [name1, setName1] = useState("");
    const [desc1, setDesc1] = useState("");
    const [name2, setName2] = useState("");
    const [desc2, setDesc2] = useState("");
    const [initialDate, setInitialDate] = useState("");
    const [finalDate, setFinalDate] = useState("");
    const [pilarVal, setPilarVal] = useState("");
    const [clasifVal, setClasifVal] = useState("");
    const [objetivos, setObjetivos] = useState([
        "Selecciona",
        "Objetivo 1",
        "Objetivo 2",
        "Objetivo 3",
        "Objetivo 4",
        "Objetivo 5",
        "Objetivo 6",
        "Objetivo 7",
        "Objetivo 8",
    ]);
    const [responsables, setResponsables] = useState([
        "Selecciona",
        "Madelin Flores",
        "Juan Perez",
    ]);

    const [isOpen, openModal, closeModal] = useModal(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMainButton, setModalMainButton] = useState("");
    const [modalType, setModalType] = useState(1);

    // const [stages, setStages] = useState([
    //     {
    //         id: 0,
    //         title: "title 0",
    //         delivery: "delivery 0",
    //         description: "description 0",
    //         initialDate: "2024-05-31",
    //         finalDate: "2024-06-01",
    //     },
    //     {
    //         id: 1,
    //         title: "title 1",
    //         delivery: "delivery 1",
    //         delivery: "delivery 1",
    //         description: "description 1",
    //         initialDate: "2024-01-10",
    //         finalDate: "2024-02-01",
    //     },
    // ]);
    const [stages, setStages] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const [auxID, setAuxID] = useState("");

    const [stageId, setStageId] = useState("");
    const [stageTitle, setStageTitle] = useState("");
    const [stageDelivery, setStageDelivery] = useState("");
    const [stageDescription, setStageDescription] = useState("");
    const [modalInitialDate, setModalInitialDate] = useState("");
    const [modalFinalDate, setModalFinalDate] = useState("");

    const newStageForm = {
        id: stageId,
        title: stageTitle,
        setStageTitle: setStageTitle,
        delivery: stageDelivery,
        setStageDelivery: setStageDelivery,
        description: stageDescription,
        setStageDescription: setStageDescription,
        initialDate: modalInitialDate,
        setModalInitialDate: setModalInitialDate,
        finalDate: modalFinalDate,
        setModalFinalDate: setModalFinalDate,
    };

    const handleSearchProj = () => {
        alert("Hiciste clic en Buscar proyecto");
    };

    const handlePriorityProj = () => {
        alert("Hiciste clic en Prioridad de proyecto");
    };

    const clearForm = () => {
        setStageId("");
        setStageTitle("");
        setStageDelivery("");
        setStageDescription("");
        setModalInitialDate("");
        setModalFinalDate("");
    };

    const handleMainButton = () => {
        modalType === 1 ? handleAddStage() : onUpdateStage();
    };

    const handleAddStage = () => {
        setModalType(1);

        //Add the modal input values to the stages array as an object
        setStages([
            ...stages,
            {
                id: stages.length,
                title: newStageForm.title,
                delivery: newStageForm.delivery,
                description: newStageForm.description,
                initialDate: newStageForm.initialDate,
                finalDate: newStageForm.finalDate,
            },
        ]);

        clearForm();
        closeModal();

        !showTable && setShowTable(true); //Show the table if is not visible
    };

    const handleEditStage = (index) => {
        setAuxID(index);
        setModalType(2);

        setStageId(stages[index].id);
        setStageTitle(stages[index].title);
        setStageDelivery(stages[index].delivery);
        setStageDescription(stages[index].description)
        setModalInitialDate(stages[index].initialDate);
        setModalFinalDate(stages[index].finalDate);

        openModal();
    };

    const onUpdateStage = () => {
        stages.splice(auxID, 1, {
            title: newStageForm.title,
            delivery: newStageForm.delivery,
            description: newStageForm.description,
            initialDate: newStageForm.initialDate,
            finalDate: newStageForm.finalDate,
        });
        closeModal();
        clearForm();
    };

    const handleDeleteStage = (index) => {
        const temp = [...stages];
        temp.splice(index, 1);
        setStages(temp);
    };

    const handleCancel = () => {
        clearForm();
        closeModal();
    };

    useEffect(() => {
        //Show or hide table if the stages array has values or not
        stages.length === 0 ? setShowTable(false) : setShowTable(true);
    }, [stages]);

    useEffect(() => {
        if (modalType === 1) {
            setModalTitle("Agregar")
            setModalMainButton("Agregar");
        } else {
            setModalTitle("Editar"); 
            setModalMainButton("Modificar");
        }
    }, [isOpen, modalType]);

    return (
        <div className="tab-datos-container">
            <div className="tab-container">
                <div className="column">
                    <Input
                        type="text"
                        title="ID Sistema ORC's"
                        name="inpt-id"
                        placeholder="0"
                        value={ID}
                        disabled
                        onChange={(e) => setID(e.target.value)}
                    />
                    <Input
                        type="text"
                        title="Nombre del proyecto"
                        name="inpt-name1"
                        value={name1}
                        onChange={(e) => setName1(e.target.value)}
                    />
                    <Input
                        type="text"
                        title="Descipción de proyecto"
                        name="inpt-desc1"
                        value={desc1}
                        onChange={(e) => setDesc1(e.target.value)}
                    />
                    <InputSelector
                        title="Objetivos a los que contribuye el proyecto"
                        options={objetivos}
                    />
                    <div className="row-container">
                        <Input
                            type="date"
                            title="Fecha Inicio"
                            name="inpt-initial-date"
                            value={initialDate}
                            onChange={(e) => setInitialDate(e.target.value)}
                            hasIcon
                            iconSource={info}
                        />
                        <Input
                            type="date"
                            title="Fecha Fin"
                            name="inpt-final-date"
                            value={finalDate}
                            onChange={(e) => setFinalDate(e.target.value)}
                            hasIcon
                            iconSource={info}
                        />
                    </div>
                    <Button
                        text="Prioridad de proyecto"
                        rounded
                        onClick={handlePriorityProj}
                    />
                </div>

                <div className="column bg-white">
                    <div className="row-container">
                        <Input
                            type="text"
                            title="ID Proyecto"
                            name="inpt-id-proy"
                            placeholder="Escribe el número de ID Proyectos Spires"
                            value={IDSpires}
                            onChange={(e) => setIDSpires(e.target.value)}
                        />
                        <Button
                            text="Buscar proyecto"
                            rounded
                            onClick={handleSearchProj}
                        />
                    </div>
                    <Input
                        type="text"
                        title="Nombre del proyecto"
                        name="inpt-name2"
                        value={name2}
                        onChange={(e) => setName2(e.target.value)}
                        disabled
                    />
                    <Input
                        type="text"
                        title="Descipción de proyecto"
                        name="inpt-desc2"
                        value={desc2}
                        onChange={(e) => setDesc2(e.target.value)}
                        disabled
                    />
                    <div className="row-container">
                        <Input
                            type="date"
                            title="Fecha de creación"
                            name="inpt-date2"
                            value={desc2}
                            onChange={(e) => setDesc2(e.target.value)}
                            disabled
                        />
                        <Input
                            type="text"
                            title="Capex"
                            name="inpt-capex"
                            value={desc2}
                            onChange={(e) => setDesc2(e.target.value)}
                            disabled
                        />
                        <Input
                            type="text"
                            title="Opex"
                            name="inpt-opex"
                            value={desc2}
                            onChange={(e) => setDesc2(e.target.value)}
                            disabled
                        />
                    </div>
                    <div className="row-container">
                        <Input
                            type="text"
                            lineInput
                            title="Pilar del proyecto"
                            name="inpt-pilar"
                            value={pilarVal}
                            onChange={(e) => setPilarVal(e.target.value)}
                            disabled
                        />
                        <Input
                            type="text"
                            lineInput
                            title="Clasificación Comité de Inversión"
                            name="inpt-clasif"
                            value={clasifVal}
                            onChange={(e) => setClasifVal(e.target.value)}
                            disabled
                        />
                    </div>
                </div>
            </div>

            <div className="tab-container-two">
                <InputPeopleSelector
                    title="Responsables del proyecto"
                    options={responsables}
                />
                <InputPeopleSelector
                    title="Administrador"
                    options={objetivos}
                />
                <InputPeopleSelector
                    title="Involucrados (opcional)"
                    options={objetivos}
                />
            </div>

            <div className="stage-container">
                <Button
                    onClick={() => {
                        setModalType(1);
                        openModal();
                    }}
                    text="Agregar etapa"
                    style="line"
                    color="none"
                    hasIcon
                    iconRoute={addIcon}
                />

                <Modal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    title={`${modalTitle} etapa`}
                >
                    <AddModal
                        mainButtonTitle={modalMainButton}
                        handleMainButton={handleMainButton}
                        secondaryButtonTitle="Cancelar"
                        handleSecondaryButton={handleCancel}
                        formInputs={newStageForm}
                    />
                </Modal>
            </div>

            {showTable && (
                <div className="table-container">
                    <h4 className="table-title">Etapas</h4>
                    <table className="table">
                        <tr>
                            <th className="table-column-title">Título</th>
                            <th className="table-column-title">Descripción</th>
                            <th className="table-column-title">Entregable</th>
                            <th className="table-column-title">Fecha inicio</th>
                            <th className="table-column-title">Fecha fin</th>
                            <th className="table-column-title">
                                <img
                                    src={editIcon}
                                    alt="Editar etapa"
                                    className="table-icon"
                                />
                            </th>
                            <th className="table-column-title">
                                <img
                                    src={deleteIcon}
                                    alt="Eliminar etapa"
                                    className="table-icon"
                                />
                            </th>
                        </tr>

                        {stages.map((stage, index) => {
                            return (
                                <tr key={index} className="table-row">
                                    <td>{stage.title}</td>
                                    <td>{stage.description}</td>
                                    <td>{stage.delivery}</td>
                                    <td>{stage.initialDate}</td>
                                    <td>{stage.finalDate}</td>
                                    <td>
                                        <Button
                                            onClick={() =>
                                                handleEditStage(index)
                                            }
                                            text="Editar"
                                            style="line"
                                            color="none"
                                        />
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() =>
                                                handleDeleteStage(index)
                                            }
                                            text="Eliminar"
                                            style="line"
                                            color="none"
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </table>

                    <div className="final-btn-container">
                        <Button
                            onClick={() => {
                                setModalType(1);
                                openModal();
                            }}
                            text="Agregar etapa"
                            style="line"
                            color="none"
                            hasIcon
                            iconRoute={addIcon}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TabDatos;

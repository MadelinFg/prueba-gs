import { useState } from "react";

import Input from "../comps/Input/Input";
import InputSelector from "../comps/InputSelector/InputSelector";
import InputPeopleSelector from "../comps/InputPeopleSelector/InputPeopleSelector";
import Button from "../comps/Button/Button";

import "./TabDatos.css";

function TabDatos() {
    const [ID, setID] = useState("0");
    const [IDSpires, setIDSpires] = useState("");
    const [name1, setName1] = useState("");
    const [desc1, setDesc1] = useState("");
    const [name2, setName2] = useState("");
    const [desc2, setDesc2] = useState("");
    const [initialDate, setInitialDate] = useState("");
    const [finalDate, setFinalDate] = useState("");
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
                    <InputSelector title='Objetivos a los que contribuye el proyecto' options={objetivos} />
                    <div className="row-container">
                        <Input
                            type="date"
                            title="Fecha Inicio"
                            name="inpt-initial-date"
                            value={initialDate}
                            onChange={(e) => setInitialDate(e.target.value)}
                        />
                        <Input
                            type="date"
                            title="Fecha Fin"
                            name="inpt-final-date"
                            value={finalDate}
                            onChange={(e) => setFinalDate(e.target.value)}
                        />
                    </div>
                    <Button text="Prioridad de proyecto" />
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
                        <Button text="Buscar proyecto" />
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
                            value={desc2}
                            onChange={(e) => setDesc2(e.target.value)}
                            disabled
                        />
                        <Input
                            type="text"
                            lineInput
                            title="Clasificación Comité de Inversión"
                            name="inpt-pilar"
                            value={desc2}
                            onChange={(e) => setDesc2(e.target.value)}
                            disabled
                        />
                    </div>
                </div>
            </div>

            <div className="tab-container-two">
                <InputPeopleSelector title='Responsables del proyecto' options={responsables} />
                <InputPeopleSelector title='Administrador' options={objetivos} />
                <InputPeopleSelector title='Involucrados (opcional)' options={objetivos} />
            </div>
        </div>
    );
}

export default TabDatos;

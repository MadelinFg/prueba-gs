import { useState } from "react";

import TabDatos from "./TabDatos";
import TabPlan from "./TabPlan";

import { TabsData } from "../../data/data";

import "./Tabs.css";

import plan from "../../assets/svg/plandetrabajo.svg"
import datos from "../../assets/svg/datos-generales.svg"

function Tabs() {
    const [tab, setTab] = useState(0);

    const toggleTab = (index) => {
        setTab(index);
    };

    return (
        <section className="section tabs-container">
            <ul className="tabs-title-container">
                <li
                    className={tab === 0 ? "tab-title active" : "tab-title"}
                    onClick={() => toggleTab(0)}
                >
                    <img src={datos} alt="Datos" className='datos-icon' />
                    {TabsData.Datos.Nombre}
                </li>
                <li
                    className={tab === 1 ? "tab-title active" : "tab-title"}
                    onClick={() => toggleTab(1)}
                >
                    <img src={plan} alt="Plan" className='plan-icon' />
                    {TabsData.Plan.Nombre}
                </li>
            </ul>

            <div className="content">
                {tab === 0 ? <TabDatos /> : <TabPlan />}
            </div>
        </section>
    );
}

export default Tabs;

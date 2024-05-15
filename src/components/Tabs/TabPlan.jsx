import './TabPlan.css';

import { TabsData } from '../../data/data';

function TabPlan() {
    return (
        <div className="container">
            <p>{TabsData.Plan.Nombre}</p>
            <p>{TabsData.Plan.Content.Info}</p>
        </div>
    );
}

export default TabPlan;

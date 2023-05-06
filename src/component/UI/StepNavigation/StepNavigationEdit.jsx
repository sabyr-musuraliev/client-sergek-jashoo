import React from "react";
import { useSelector } from "react-redux";
import "./StepNavigation.css";

import StepEdit from "./Step/StepEdit";

const StepNavigationEdit = () => {
    const labelArray = useSelector((state) => state.form.stepsTitle);
    return (
        <div className="stepWrapper">
            {labelArray.map((item, index) => (
                <StepEdit key={index} index={index} label={item}></StepEdit>
            ))}
        </div>
    );
};

export default StepNavigationEdit;

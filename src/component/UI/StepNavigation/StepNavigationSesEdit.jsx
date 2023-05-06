import React from "react";
import { useSelector } from "react-redux";
import "./StepNavigation.css";

import StepSesEdit from "./Step/StepSesEdit";

const StepNavigationSesEdit = () => {
    const labelArray = useSelector((state) => state.form.stepsTitleSes);
    return (
        <div className="stepWrapper">
            {labelArray.map((item, index) => (
                <StepSesEdit
                    key={index}
                    index={index}
                    label={item}
                ></StepSesEdit>
            ))}
        </div>
    );
};

export default StepNavigationSesEdit;

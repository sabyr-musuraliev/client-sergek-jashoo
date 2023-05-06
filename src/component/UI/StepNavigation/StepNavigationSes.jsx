import React from "react";
import { useSelector } from "react-redux";
import "./StepNavigation.css";

import StepSes from "./Step/StepSes";

const StepNavigationSes = () => {
    const labelArray = useSelector((state) => state.form.stepsTitleSes);
    return (
        <div className="stepWrapper">
            {labelArray.map((item, index) => (
                <StepSes key={index} index={index} label={item}></StepSes>
            ))}
        </div>
    );
};

export default StepNavigationSes;

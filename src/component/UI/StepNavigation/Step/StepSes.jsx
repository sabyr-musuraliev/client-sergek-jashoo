import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStepSes } from "../../../../reducers/formReducer";

const StepSes = (props) => {
    const currentStep = useSelector((state) => state.form.currentStepSes);
    const dispatch = useDispatch();

    return (
        <div
            className={
                "stepBlock" + (currentStep === props.index ? " selected" : "")
            }
        >
            <div className={"circleWrapper"}>
                <div
                    className="circle"
                    onClick={() => dispatch(updateStepSes(props.index))}
                >
                    {props.index + 1}
                </div>
            </div>
            <span>{props.label}</span>
        </div>
    );
};

export default StepSes;

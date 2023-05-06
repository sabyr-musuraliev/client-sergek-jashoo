import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStepSesEdit } from "../../../../reducers/formReducer";

const StepSesEdit = (props) => {
    const currentStep = useSelector((state) => state.form.currentStepSesEdit);
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
                    onClick={() => dispatch(updateStepSesEdit(props.index))}
                >
                    {props.index + 1}
                </div>
            </div>
            <span>{props.label}</span>
        </div>
    );
};

export default StepSesEdit;

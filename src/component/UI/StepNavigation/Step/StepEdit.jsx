import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStepEdit } from "../../../../reducers/formReducer";

const StepEdit = (props) => {
    const currentStep = useSelector((state) => state.form.currentStepEdit);
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
                    onClick={() => dispatch(updateStepEdit(props.index))}
                >
                    {props.index + 1}
                </div>
            </div>
            <span>{props.label}</span>
        </div>
    );
};

export default StepEdit;

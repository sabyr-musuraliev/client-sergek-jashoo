import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStep } from "../../../../reducers/formReducer";

const Step = (props) => {
    const currentStep = useSelector((state) => state.form.currentStep);
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
                    onClick={() => dispatch(updateStep(props.index))}
                >
                    {props.index + 1}
                </div>
            </div>
            <span>{props.label}</span>
        </div>
    );
};

export default Step;

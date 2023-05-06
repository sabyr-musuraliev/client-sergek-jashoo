import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../reducers/formReducer";
import { createPatient } from "../actions/form";
import { useNavigate } from "react-router-dom";
import "../styles/FormCreate.css";

import FormAnamLife from "./Form/FormAnamLife";
import FormFirstView from "./Form/FormFirstView";
import StepNavigation from "./UI/StepNavigation/StepNavigation";

const FormCreate = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.form.currentStep);
    const stepsTitle = useSelector((state) => state.form.stepsTitle);
    const navigate = useNavigate();

    const submitBtn = (patientName, patient) => {
        dispatch(createPatient(patientName, patient));
        navigate("/");
    };

    const [patientName, setPatientName] = useState({
        firstname: "",
        lastname: "",
        middlename: "",
    });
    const [patient, setPatient] = useState({
        dateBirth: new Date().toISOString().slice(0, 10),
        address: "",
        contacts: "",
        sex: "",
        status: false,
        education: "",
        marriage: "",
        job: "",
        guilty: "",
        allergy: "",
        partDesease: "",
    });

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <FormFirstView
                        patientName={patientName}
                        setPatientName={setPatientName}
                        patient={patient}
                        setPatient={setPatient}
                    />
                );
            case 1:
                return (
                    <FormAnamLife patient={patient} setPatient={setPatient} />
                );
            default:
                throw new Error("Unknown step");
        }
    }

    return (
        <div className="wrapper-block container">
            <h2 className="title">Добавить нового пациента</h2>
            <div className="inner-block form-wrapper">
                <StepNavigation></StepNavigation>
                <div className="container form-inner-wrapper">
                    {getStepContent(currentStep)}
                </div>
                <div className="btnWrapper">
                    {!(currentStep === 0) && (
                        <button
                            className="btn button-prime"
                            onClick={() => dispatch(prevStep())}
                        >
                            Назад
                        </button>
                    )}
                    {stepsTitle.length - 1 === currentStep ? (
                        <button
                            className="btn button-prime"
                            onClick={() => submitBtn(patientName, patient)}
                        >
                            Готово
                        </button>
                    ) : (
                        <button
                            className="btn button-prime"
                            onClick={() => dispatch(nextStep())}
                        >
                            Следуйщий шаг
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormCreate;

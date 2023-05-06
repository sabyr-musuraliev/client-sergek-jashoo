import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStepEdit, prevStepEdit } from "../reducers/formReducer";
import { getUpdatePatient, updatePatient } from "../actions/form";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/FormCreate.css";

import FormAnamLifeEdit from "./FormUpdate/FormAnamLifeEdit";
import FormFirstViewEdit from "./FormUpdate/FormFirstViewEdit";
import StepNavigationEdit from "./UI/StepNavigation/StepNavigationEdit";
import Loader from "./UI/Loader/Loader";

const FormCreate = () => {
    const { idName } = useParams();
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.form.currentStepEdit);
    const patientForm = useSelector((state) => state.form.onePatientEdit);
    let isLoading = useSelector((state) => state.form.isLoadingSes);
    const stepsTitle = useSelector((state) => state.form.stepsTitle);
    const navigate = useNavigate();

    const submitBtn = (patientName, patient) => {
        dispatch(updatePatient(patientName, patient, idName));
        navigate("/");
    };

    useEffect(() => {
        dispatch(getUpdatePatient(idName));
    }, [dispatch, idName]);

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

    useEffect(() => {
        if (patientForm) {
            setPatientName({
                firstname: patientForm.name.firstname,
                lastname: patientForm.name.lastname,
                middlename: patientForm.name.middlename,
            });
            setPatient({
                dateBirth: patientForm.dateBirth.substring(0, 10),
                address: patientForm.address,
                contacts: patientForm.contacts,
                sex: patientForm.sex,
                education: patientForm.education,
                marriage: patientForm.marriage,
                job: patientForm.job,
                guilty: patientForm.guilty,
                allergy: patientForm.allergy,
                partDesease: patientForm.partDesease,
            });
        }
    }, [patientForm]);

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <FormFirstViewEdit
                        patientName={patientName}
                        setPatientName={setPatientName}
                        patient={patient}
                        setPatient={setPatient}
                    />
                );
            case 1:
                return (
                    <FormAnamLifeEdit
                        patient={patient}
                        setPatient={setPatient}
                    />
                );
            default:
                throw new Error("Unknown step");
        }
    }

    return (
        <div className="wrapper-block container">
            <h2 className="title">Редактировать данные пациента</h2>
            <div className="inner-block form-wrapper">
                {!isLoading ? (
                    <>
                        <StepNavigationEdit></StepNavigationEdit>
                        <div className="container form-inner-wrapper">
                            {getStepContent(currentStep)}
                        </div>
                        <div className="btnWrapper">
                            {!(currentStep === 0) && (
                                <button
                                    className="btn button-prime"
                                    onClick={() => dispatch(prevStepEdit())}
                                >
                                    Назад
                                </button>
                            )}
                            {!(stepsTitle.length - 1 === currentStep) && (
                                <button
                                    className="btn button-prime"
                                    onClick={() => dispatch(nextStepEdit())}
                                >
                                    Следуйщий шаг
                                </button>
                            )}
                            {stepsTitle.length - 1 === currentStep && (
                                <button
                                    className="btn button-prime"
                                    onClick={() =>
                                        submitBtn(patientName, patient)
                                    }
                                >
                                    Готово
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default FormCreate;

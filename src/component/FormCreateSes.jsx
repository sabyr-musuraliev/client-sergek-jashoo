import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStepSes, prevStepSes } from "../reducers/formReducer";
import { createSession } from "../actions/form";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/FormCreate.css";

import FormAnamDiseaseSes from "./FormSession/FormAnamDiseaseSes";
import FormNervStatusSes from "./FormSession/FormNervStatusSes";
import FormPsychStatusSes from "./FormSession/FormPsychStatusSes";
import FormSomatStatusSes from "./FormSession/FormSomatStatusSes";
import FormFirstViewSes from "./FormSession/FormFirstViewSes";
import StepNavigationSes from "./UI/StepNavigation/StepNavigationSes";
import Loader from "./UI/Loader/Loader";

const FormCreate = () => {
    let { idName } = useParams();
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.form.currentStepSes);
    const stepsTitle = useSelector((state) => state.form.stepsTitleSes);
    const isLoadingSes = useSelector((state) => state.form.isLoadingSes);
    const history = useNavigate();

    const submitBtn = (
        anamnesisDisease,
        somatStatus,
        nervStatus,
        psychStatus,
        formData,
        idName
    ) => {
        history("/");
        dispatch(
            createSession(
                anamnesisDisease,
                somatStatus,
                nervStatus,
                psychStatus,
                formData,
                idName
            )
        );
    };

    const [anamnesisDisease, setAnamnesisDisease] = useState({
        medicineTake: "",
        pavIntake: "",
        pavIntakeSign: "",
        abstinentSomat: "",
        abstinentPsych: "",
        patalogicStream: "",
        patalogicFight: "",
        control: "",
        palimp: "",
        amnesia: "",
        typeAlco: "",
        tolerant: "",
        maxTolerant: "",
        maxTolerantSign: "",
        typeLiquid: "",
        zapoi: "",
        zapoiSign: "",
        lightTimeline: "",
        lightTimelineSign: "",
        lastZapoi: "",
        lastZapoiSign: "",
        lastRemiss: "",
        lastRemissSign: "",
        lastMedicine: "",
        lastAlcoIncome: "",
        doseAlco: "",
        doseAlcoSign: "",
        additionalInfo: "",
    });

    const [somatStatus, setSomatStatus] = useState({
        condition: "",
        nutrition: "",
        skinColor: "",
        skinHumidity: "",
        scars: "",
        eyeState: "",
        breathe: "",
        wheezing: "",
        saturation: "",
        tonesHeart: "",
        antPressure1: "",
        antPressure2: "",
        pulse: "",
        fill: "",
        deficite: "",
        tongue: "",
        stomach: "",
        liver: "",
        vomit: "",
        diarrhea: "",
        diuresis: "",
        edema: "",
        glucose: "",
        bonesLink: "",
        periferState: "",
        additionalInfo: "",
    });

    const [nervStatus, setNervStatus] = useState({
        pupil: "",
        photoReaction: "",
        meningit: "",
        coordinate: "",
        romberg: "",
        convulsions: "",
        dysarthria: "",
    });

    const [psychStatus, setPsychStatus] = useState({
        look: "",
        breathSmell: "",
        behave: "",
        consciousness: "",
        orientation: "",
        perception: "",
        emotion: "",
        sleep: "",
        suicide: "",
        motive: "",
        goalMed: "",
    });

    const [formData, setFormData] = useState({
        incomeState: "",
        escort: "",
        escortWith: "",
        complaints: "",
        contacts: "",
    });

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <FormFirstViewSes
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            case 1:
                return (
                    <FormAnamDiseaseSes
                        anamnesisDisease={anamnesisDisease}
                        setAnamnesisDisease={setAnamnesisDisease}
                    />
                );
            case 2:
                return (
                    <FormSomatStatusSes
                        somatStatus={somatStatus}
                        setSomatStatus={setSomatStatus}
                    />
                );
            case 3:
                return (
                    <FormNervStatusSes
                        nervStatus={nervStatus}
                        setNervStatus={setNervStatus}
                    />
                );
            case 4:
                return (
                    <FormPsychStatusSes
                        psychStatus={psychStatus}
                        setPsychStatus={setPsychStatus}
                    />
                );
            default:
                throw new Error("Unknown step");
        }
    }

    return (
        <div className="wrapper-block container">
            <h2 className="title">Добавить нового пациента</h2>
            <div className="inner-block form-wrapper">
                {isLoadingSes ? (
                    <Loader />
                ) : (
                    <>
                        <StepNavigationSes></StepNavigationSes>
                        <div className="container form-inner-wrapper">
                            {getStepContent(currentStep)}
                        </div>
                        <div className="btnWrapper">
                            {!(currentStep === 0) && (
                                <button
                                    className="btn button-prime"
                                    onClick={() => dispatch(prevStepSes())}
                                >
                                    Назад
                                </button>
                            )}
                            {!(stepsTitle.length - 1 === currentStep) && (
                                <button
                                    className="btn button-prime"
                                    onClick={() => dispatch(nextStepSes())}
                                >
                                    Следуйщий шаг
                                </button>
                            )}
                            {stepsTitle.length - 1 === currentStep && (
                                <button
                                    className="btn button-prime"
                                    onClick={() =>
                                        submitBtn(
                                            anamnesisDisease,
                                            somatStatus,
                                            nervStatus,
                                            psychStatus,
                                            formData,
                                            idName
                                        )
                                    }
                                >
                                    Готово
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FormCreate;

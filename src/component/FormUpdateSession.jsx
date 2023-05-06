import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStepSesEdit, prevStepSesEdit } from "../reducers/formReducer";
import { getUpdateSession, updateSession } from "../actions/form";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/FormCreate.css";

import FormAnamDiseaseSesEdit from "./FormSessionUpdate/FormAnamDiseaseSesEdit";
import FormNervStatusSesEdit from "./FormSessionUpdate/FormNervStatusSesEdit";
import FormPsychStatusSesEdit from "./FormSessionUpdate/FormPsychStatusSesEdit";
import FormSomatStatusSesEdit from "./FormSessionUpdate/FormSomatStatusSesEdit";
import FormFirstViewSesEdit from "./FormSessionUpdate/FormFirstViewSesEdit";
import StepNavigationSesEdit from "./UI/StepNavigation/StepNavigationSesEdit";
import Loader from "./UI/Loader/Loader";

const FormUpdateSession = () => {
    let { idName } = useParams();
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.form.currentStepSesEdit);
    const stepsTitle = useSelector((state) => state.form.stepsTitleSes);
    const isLoadingSes = useSelector((state) => state.form.isLoadingSes);
    const oneSessionEdit = useSelector((state) => state.form.oneSessionEdit);
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
            updateSession(
                anamnesisDisease,
                somatStatus,
                nervStatus,
                psychStatus,
                formData,
                idName
            )
        );
    };

    useEffect(() => {
        dispatch(getUpdateSession(idName));
    }, [dispatch, idName]);

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

    useEffect(() => {
        if (oneSessionEdit) {
            setAnamnesisDisease({
                medicineTake: oneSessionEdit.anamnesisLife.medicineTake,
                pavIntake: oneSessionEdit.anamnesisDisease.pavIntake,
                pavIntakeSign: "",
                abstinentSomat: oneSessionEdit.anamnesisDisease.abstinent.somat,
                abstinentPsych: oneSessionEdit.anamnesisDisease.abstinent.psych,
                patalogicStream:
                    oneSessionEdit.anamnesisDisease.patalogic.stream,
                patalogicFight: oneSessionEdit.anamnesisDisease.patalogic.fight,
                control: oneSessionEdit.anamnesisDisease.control,
                palimp: oneSessionEdit.anamnesisDisease.palimp,
                amnesia: oneSessionEdit.anamnesisDisease.amnesia,
                typeAlco: oneSessionEdit.anamnesisDisease.typeAlco,
                tolerant: oneSessionEdit.anamnesisDisease.tolerant,
                maxTolerant: oneSessionEdit.anamnesisDisease.maxTolerant,
                maxTolerantSign: "",
                typeLiquid: oneSessionEdit.anamnesisDisease.typeLiquid,
                zapoi: oneSessionEdit.anamnesisDisease.zapoi,
                zapoiSign: "",
                lightTimeline: oneSessionEdit.anamnesisDisease.lightTimeline,
                lightTimelineSign: "",
                lastZapoi: oneSessionEdit.anamnesisDisease.lastZapoi,
                lastZapoiSign: "",
                lastRemiss: oneSessionEdit.anamnesisDisease.lastRemiss,
                lastRemissSign: "",
                lastMedicine: oneSessionEdit.anamnesisDisease.lastMedicine,
                lastAlcoIncome: oneSessionEdit.anamnesisDisease.lastAlcoIncome,
                doseAlco: oneSessionEdit.anamnesisDisease.doseAlco,
                doseAlcoSign: "",
                additionalInfo: oneSessionEdit.anamnesisDisease.additionalInfo,
            });
            setSomatStatus({
                condition: oneSessionEdit.somatStatus.condition,
                nutrition: oneSessionEdit.somatStatus.nutrition,
                skinColor: oneSessionEdit.somatStatus.skin.color,
                skinHumidity: oneSessionEdit.somatStatus.skin.humidity,
                scars: oneSessionEdit.somatStatus.scars,
                eyeState: oneSessionEdit.somatStatus.eyeState,
                breathe: oneSessionEdit.somatStatus.breathe,
                wheezing: oneSessionEdit.somatStatus.wheezing,
                saturation: oneSessionEdit.somatStatus.saturation,
                tonesHeart: oneSessionEdit.somatStatus.tonesHeart,
                antPressure1: oneSessionEdit.somatStatus.antPressure,
                antPressure2: "",
                pulse: oneSessionEdit.somatStatus.pulse,
                fill: oneSessionEdit.somatStatus.fill,
                deficite: oneSessionEdit.somatStatus.deficite,
                tongue: oneSessionEdit.somatStatus.tongue,
                stomach: oneSessionEdit.somatStatus.stomach,
                liver: oneSessionEdit.somatStatus.liver,
                vomit: oneSessionEdit.somatStatus.vomit,
                diarrhea: oneSessionEdit.somatStatus.diarrhea,
                diuresis: oneSessionEdit.somatStatus.diuresis,
                edema: oneSessionEdit.somatStatus.edema,
                glucose: oneSessionEdit.somatStatus.glucose,
                bonesLink: oneSessionEdit.somatStatus.bonesLink,
                periferState: oneSessionEdit.somatStatus.periferState,
                additionalInfo: oneSessionEdit.somatStatus.additionalInfo,
            });
            setNervStatus({
                pupil: oneSessionEdit.nervStatus.pupil,
                photoReaction: oneSessionEdit.nervStatus.photoReaction,
                meningit: oneSessionEdit.nervStatus.meningit,
                coordinate: oneSessionEdit.nervStatus.coordinate,
                romberg: oneSessionEdit.nervStatus.romberg,
                convulsions: oneSessionEdit.nervStatus.convulsions,
                dysarthria: oneSessionEdit.nervStatus.dysarthria,
            });
            setPsychStatus({
                look: oneSessionEdit.psychStatus.look,
                breathSmell: oneSessionEdit.psychStatus.breathSmell,
                behave: oneSessionEdit.psychStatus.behave,
                consciousness: oneSessionEdit.psychStatus.consciousness,
                orientation: oneSessionEdit.psychStatus.orientation,
                perception: oneSessionEdit.psychStatus.perception,
                emotion: oneSessionEdit.psychStatus.emotion,
                sleep: oneSessionEdit.psychStatus.sleep,
                suicide: oneSessionEdit.psychStatus.suicide,
                motive: oneSessionEdit.psychStatus.motive,
                goalMed: oneSessionEdit.psychStatus.goalMed,
            });
            setFormData({
                incomeState: oneSessionEdit.incomeState,
                escort: oneSessionEdit.escort,
                escortWith: oneSessionEdit.escortWith,
                complaints: oneSessionEdit.complaints,
                contacts: oneSessionEdit.contacts,
            });
        }
    }, [oneSessionEdit]);

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <FormFirstViewSesEdit
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            case 1:
                return (
                    <FormAnamDiseaseSesEdit
                        anamnesisDisease={anamnesisDisease}
                        setAnamnesisDisease={setAnamnesisDisease}
                    />
                );
            case 2:
                return (
                    <FormSomatStatusSesEdit
                        somatStatus={somatStatus}
                        setSomatStatus={setSomatStatus}
                    />
                );
            case 3:
                return (
                    <FormNervStatusSesEdit
                        nervStatus={nervStatus}
                        setNervStatus={setNervStatus}
                    />
                );
            case 4:
                return (
                    <FormPsychStatusSesEdit
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
                        <StepNavigationSesEdit></StepNavigationSesEdit>
                        <div className="container form-inner-wrapper">
                            {getStepContent(currentStep)}
                        </div>
                        <div className="btnWrapper">
                            {!(currentStep === 0) && (
                                <button
                                    className="btn button-prime"
                                    onClick={() => dispatch(prevStepSesEdit())}
                                >
                                    Назад
                                </button>
                            )}
                            {!(stepsTitle.length - 1 === currentStep) && (
                                <button
                                    className="btn button-prime"
                                    onClick={() => dispatch(nextStepSesEdit())}
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

export default FormUpdateSession;

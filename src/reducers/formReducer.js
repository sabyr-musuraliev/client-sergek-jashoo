const NEXT_STEP = "NEXT_STEP";
const PREV_STEP = "PREV_STEP";
const UPDATE_STEP = "UPDATE_STEP";

const NEXT_STEP_SES = "NEXT_STEP_SES";
const PREV_STEP_SES = "PREV_STEP_SES";
const UPDATE_STEP_SES = "UPDATE_STEP_SES";

const NEXT_STEP_EDIT = "NEXT_STEP_EDIT";
const PREV_STEP_EDIT = "PREV_STEP_EDIT";
const UPDATE_STEP_EDIT = "UPDATE_STEP_EDIT";

const NEXT_STEP_SES_EDIT = "NEXT_STEP_SES_EDIT";
const PREV_STEP_SES_EDIT = "PREV_STEP_SES_EDIT";
const UPDATE_STEP_SES_EDIT = "UPDATE_STEP_SES_EDIT";

const SET_ONE_PATIENT_EDIT = "SET_ONE_PATIENT_EDIT";
const SET_ONE_SESSION_EDIT = "SET_ONE_SESSION_EDIT";
const SET_LOADING = "SET_LOADING";

const initialState = {
    currentStep: 0,
    currentStepSes: 0,
    currentStepEdit: 0,
    currentStepSesEdit: 0,
    isLoadingSes: false,
    onePatientEdit: null,
    oneSessionEdit: null,
    stepsTitle: ["Инфо о пациенте", "Анамнез жизни"],
    stepsTitleSes: [
        "Первичный осмотр",
        "Анамнез болезни",
        "Соматический статус",
        "Неврологический статус",
        "Психический статус",
    ],
};

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_STEP:
            return {
                ...state,
                currentStep: state.currentStep + 1,
            };
        case PREV_STEP:
            return {
                ...state,
                currentStep: state.currentStep - 1,
            };
        case UPDATE_STEP:
            return {
                ...state,
                currentStep: action.payload,
            };
        case NEXT_STEP_SES:
            return {
                ...state,
                currentStepSes: state.currentStepSes + 1,
            };
        case PREV_STEP_SES:
            return {
                ...state,
                currentStepSes: state.currentStepSes - 1,
            };
        case UPDATE_STEP_SES:
            return {
                ...state,
                currentStepSes: action.payload,
            };
        case NEXT_STEP_EDIT:
            return {
                ...state,
                currentStepEdit: state.currentStepEdit + 1,
            };
        case PREV_STEP_EDIT:
            return {
                ...state,
                currentStepEdit: state.currentStepEdit - 1,
            };
        case UPDATE_STEP_EDIT:
            return {
                ...state,
                currentStepEdit: action.payload,
            };
        case SET_ONE_PATIENT_EDIT:
            return {
                ...state,
                onePatientEdit: action.payload,
            };
        case SET_ONE_SESSION_EDIT:
            return {
                ...state,
                oneSessionEdit: action.payload,
            };
        case NEXT_STEP_SES_EDIT:
            return {
                ...state,
                currentStepSesEdit: state.currentStepSesEdit + 1,
            };
        case PREV_STEP_SES_EDIT:
            return {
                ...state,
                currentStepSesEdit: state.currentStepSesEdit - 1,
            };
        case UPDATE_STEP_SES_EDIT:
            return {
                ...state,
                currentStepSesEdit: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                isLoadingSes: action.payload,
            };
        default:
            return state;
    }
}

export const nextStep = () => ({ type: NEXT_STEP });
export const prevStep = () => ({ type: PREV_STEP });
export const updateStep = (status) => ({ type: UPDATE_STEP, payload: status });

export const nextStepSes = () => ({ type: NEXT_STEP_SES });
export const prevStepSes = () => ({ type: PREV_STEP_SES });
export const updateStepSes = (status) => ({
    type: UPDATE_STEP_SES,
    payload: status,
});

export const nextStepEdit = () => ({ type: NEXT_STEP_EDIT });
export const prevStepEdit = () => ({ type: PREV_STEP_EDIT });
export const updateStepEdit = (status) => ({
    type: UPDATE_STEP_EDIT,
    payload: status,
});

export const nextStepSesEdit = () => ({ type: NEXT_STEP_SES_EDIT });
export const prevStepSesEdit = () => ({ type: PREV_STEP_SES_EDIT });
export const updateStepSesEdit = (status) => ({
    type: UPDATE_STEP_SES_EDIT,
    payload: status,
});

export const setOnePatientEdit = (data) => ({
    type: SET_ONE_PATIENT_EDIT,
    payload: data,
});
export const setOneSessionEdit = (data) => ({
    type: SET_ONE_SESSION_EDIT,
    payload: data,
});
export const isLoadingSes = (bool) => ({ type: SET_LOADING, payload: bool });

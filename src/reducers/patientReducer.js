const NEXT_STEP = "NEXT_STEP";
const PREV_STEP = "PREV_STEP";
const UPDATE_STEP = "UPDATE_STEP";
const NEXT_STEP_SEARCH = "NEXT_STEP_SEARCH";
const PREV_STEP_SEARCH = "PREV_STEP_SEARCH";
const UPDATE_STEP_SEARCH = "UPDATE_STEP_SEARCH";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const SET_TOTAL_PATIENTS_SEARCH = "SET_TOTAL_PATIENTS_SEARCH";
const SET_TOTAL_PAGES_SEARCH = "SET_TOTAL_PAGES_SEARCH";

const SET_PATIENT = "SET_PATIENT";
const SET_PATIENT_SEARCH = "SET_PATIENT_SEARCH";
const SET_ONE_PATIENT = "SET_ONE_PATIENT";
const SET_ONE_PATIENT_SESSIONS = "SET_ONE_PATIENT_SESSIONS";
const SET_TOTAL_PATIENTS = "SET_TOTAL_PATIENTS";
const SET_ONE_SESSION = "SET_ONE_SESSION";

const IS_LOADING = "IS_LOADING";
const IS_LOADING_SEARCH = "IS_LOADING_SEARCH";
const IS_LOADING_CART = "IS_LOADING_CART";
const IS_LOADING_SESSION = "IS_LOADING_SESSION";

const initialState = {
    patients: [],
    patientsSearch: [],
    currentPageSearch: 1,
    limitSearch: 10,
    totalPatientsSearch: 0,
    totalPagesSearch: 0,

    totalPatients: 0,
    currentPage: 1,
    totalPages: 0,
    onePatient: {
        name: { firstname: "", lastname: "", middlename: "" },
        dateBirth: "",
        address: "",
        contacts: "",
        status: true,
        education: "",
        marriage: "",
        job: "",
        guilty: "",
    },
    onePatientSessions: [],
    isLoading: false,
    isLoadingSearch: false,
    isLoadCart: false,
    isLoadSession: false,
    oneSession: {
        dateIn: "",
        dateOut: "",
        repeatTreat: "",
        incomeState: "",
        escort: "",
        escortWith: "",
        complaints: "",
        status: "",
        anamnesisLife: {
            partDesease: "",
            medicineTake: "",
            allergy: "",
        },
        anamnesisDisease: {
            pavIntake: "",
            abstinent: {
                somat: "",
                psych: "",
            },
            patalogic: {
                stream: "",
                fight: "",
            },
            control: "",
            palimp: "",
            amnesia: "",
            typeAlco: "",
            tolerant: "",
            maxTolerant: "",
            typeLiquid: "",
            zapoi: "",
            lightTimeline: "",
            lastZapoi: "",
            lastRemiss: "",
            lastMedicine: "",
            lastAlcoIncome: "",
            doseAlco: "",
            additionalInfo: "",
        },
        somatStatus: {
            condition: "",
            nutrition: "",
            skin: {
                color: "",
                humidity: "",
            },
            scars: "",
            eyeState: "",
            breathe: "",
            wheezing: "",
            saturation: "",
            tonesHeart: "",
            antPressure: "",
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
        },
        nervStatus: {
            pupil: "",
            photoReaction: "",
            meningit: "",
            coordinate: "",
            romberg: "",
            convulsions: "",
            dysarthria: "",
        },
        psychStatus: {
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
        },
    },
};

export default function patientReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_STEP:
            return {
                ...state,
                currentPage: parseInt(state.currentStep) + 1,
            };
        case PREV_STEP:
            return {
                ...state,
                currentPage: parseInt(state.currentStep) - 1,
            };
        case UPDATE_STEP:
            return {
                ...state,
                currentPage: action.payload,
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case IS_LOADING_SEARCH:
            return {
                ...state,
                isLoadingSearch: action.payload,
            };
        case NEXT_STEP_SEARCH:
            return {
                ...state,
                currentStepSearch: state.currentStepSearch + 1,
            };
        case PREV_STEP_SEARCH:
            return {
                ...state,
                currentStepSearch: state.currentStepSearch - 1,
            };
        case UPDATE_STEP_SEARCH:
            return {
                ...state,
                currentPageSearch: action.payload,
            };
        case SET_PATIENT_SEARCH:
            return {
                ...state,
                patientsSearch: action.payload,
            };
        case SET_TOTAL_PATIENTS_SEARCH:
            return {
                ...state,
                totalPatientsSearch: action.payload,
            };
        case SET_PATIENT:
            return {
                ...state,
                patients: action.payload,
            };
        case SET_ONE_PATIENT:
            return {
                ...state,
                onePatient: action.payload,
            };
        case SET_ONE_PATIENT_SESSIONS:
            return {
                ...state,
                onePatientSessions: action.payload,
            };
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.payload,
            };
        case SET_TOTAL_PATIENTS:
            return {
                ...state,
                totalPatients: action.payload,
            };
        case IS_LOADING_CART:
            return {
                ...state,
                isLoadCart: action.payload,
            };
        case IS_LOADING_SESSION:
            return {
                ...state,
                isLoadSession: action.payload,
            };
        case SET_ONE_SESSION:
            return {
                ...state,
                oneSession: action.payload,
            };
        case SET_TOTAL_PAGES_SEARCH:
            return {
                ...state,
                totalPagesSearch: action.payload,
            };
        default:
            return state;
    }
}

export const nextStep = () => ({ type: NEXT_STEP });
export const prevStep = () => ({ type: PREV_STEP });
export const updateStep = (status) => ({ type: UPDATE_STEP, payload: status });
export const setTotalPages = (count) => ({
    type: SET_TOTAL_PAGES,
    payload: count,
});

export const nextStepSearch = () => ({ type: NEXT_STEP_SEARCH });
export const prevStepSearch = () => ({ type: PREV_STEP_SEARCH });
export const updateStepSearch = (status) => ({
    type: UPDATE_STEP_SEARCH,
    payload: status,
});
export const setTotalPagesSearch = (count) => ({
    type: SET_TOTAL_PAGES_SEARCH,
    payload: count,
});
export const setPatientSearch = (data) => ({
    type: SET_PATIENT_SEARCH,
    payload: data,
});
export const setTotalPatientsSearch = (count) => ({
    type: SET_TOTAL_PATIENTS_SEARCH,
    payload: count,
});

export const setPatient = (data) => ({ type: SET_PATIENT, payload: data });
export const setTotalPatients = (count) => ({
    type: SET_TOTAL_PATIENTS,
    payload: count,
});
export const setOnePatient = (data) => ({
    type: SET_ONE_PATIENT,
    payload: data,
});
export const setOnePatientSessions = (data) => ({
    type: SET_ONE_PATIENT_SESSIONS,
    payload: data,
});
export const setOneSession = (data) => ({
    type: SET_ONE_SESSION,
    payload: data,
});

export const isLoading = (status) => ({ type: IS_LOADING, payload: status });
export const isLoadingSearch = (status) => ({
    type: IS_LOADING_SEARCH,
    payload: status,
});
export const isLoadingCart = (status) => ({
    type: IS_LOADING_CART,
    payload: status,
});
export const isLoadingSession = (status) => ({
    type: IS_LOADING_SESSION,
    payload: status,
});

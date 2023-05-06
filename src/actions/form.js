import axios from "axios";
import {
    setOnePatientEdit,
    isLoadingSes,
    updateStep,
    setOneSessionEdit,
} from "../reducers/formReducer";

export const createPatient = (patientName, patient) => {
    return async (dispatch) => {
        try {
            await axios.post("http://localhost:5000/patients/create", {
                patientName,
                patient,
            });
            await dispatch(updateStep(0));
        } catch (error) {
            alert(error.response.data.message);
        }
    };
};

export const updatePatient = (patientName, patient, id) => {
    return async (dispatch) => {
        try {
            await axios.put(`http://localhost:5000/patients/${id}/edit`, {
                patientName,
                patient,
            });
        } catch (error) {
            alert(error);
        }
    };
};

export const updateSession = (
    anamnesisDisease,
    somatStatus,
    nervStatus,
    psychStatus,
    formData,
    id
) => {
    return async (dispatch) => {
        try {
            await axios.put(
                `http://localhost:5000/patients/${id}/session/edit`,
                {
                    anamnesisDisease,
                    somatStatus,
                    nervStatus,
                    psychStatus,
                    formData,
                }
            );
        } catch (error) {
            alert(error);
        }
    };
};

export const getUpdatePatient = (id) => {
    return async (dispatch) => {
        dispatch(isLoadingSes(true));
        try {
            const response = await axios.get(
                `http://localhost:5000/patients/${id}/edit`
            );
            await dispatch(setOnePatientEdit(response.data));
            await dispatch(isLoadingSes(false));
            console.log("From form action", response.data);
        } catch (error) {
            console.log(error);
            await dispatch(isLoadingSes(false));
        }
    };
};

export const getUpdateSession = (id) => {
    return async (dispatch) => {
        dispatch(isLoadingSes(true));
        try {
            const response = await axios.get(
                `http://localhost:5000/patients/${id}/session/edit`
            );
            await dispatch(setOneSessionEdit(response.data));
            await dispatch(isLoadingSes(false));
            console.log("From form action session", response.data);
        } catch (error) {
            console.log(error);
            await dispatch(isLoadingSes(false));
        }
    };
};

export const createSession = (
    anamnesisDisease,
    somatStatus,
    nervStatus,
    psychStatus,
    formData,
    idName
) => {
    return async (dispatch) => {
        try {
            await axios.post("http://localhost:5000/patients/createSession", {
                anamnesisDisease,
                somatStatus,
                nervStatus,
                psychStatus,
                formData,
                idName,
            });
        } catch (error) {
            alert(error.response.data.message);
        }
    };
};

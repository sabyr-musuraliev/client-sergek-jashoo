import axios from "axios";
import {
    isLoading,
    setTotalPages,
    setPatient,
    setOnePatient,
    setOnePatientSessions,
    updateStep,
    isLoadingCart,
    isLoadingSession,
    setOneSession,
    isLoadingSearch,
    setTotalPagesSearch,
    setPatientSearch,
    updateStepSearch,
} from "../reducers/patientReducer";

export const fetchPatients = (page) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        try {
            const response = await axios.get(
                `http://localhost:5000/patients?page=${page}&size=10`
            );
            await dispatch(setTotalPages(response.data.totalPages));
            await dispatch(setPatient(response.data.patients));
            await dispatch(updateStep(response.data.currentPage));
            await dispatch(isLoading(false));
        } catch (error) {
            console.log(error);
            dispatch(isLoading(false));
        }
    };
};

export const fetchPatientData = (id) => {
    return async (dispatch) => {
        dispatch(isLoadingCart(true));
        try {
            const response = await axios.get(
                `http://localhost:5000/patients/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            await dispatch(setOnePatient(response.data.patientInfo));
            await dispatch(setOnePatientSessions(response.data.sessionsInfo));
            await dispatch(isLoadingCart(false));
        } catch (error) {
            console.log(error);
            dispatch(isLoadingCart(false));
        }
    };
};

export const fetchSessionData = (id) => {
    return async (dispatch) => {
        dispatch(isLoadingSession(true));
        try {
            const response = await axios.get(
                `http://localhost:5000/patients/session/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            await dispatch(setOneSession(response.data.sessionsInfo));
            await dispatch(isLoadingSession(false));
        } catch (error) {
            console.log(error);
            dispatch(isLoadingSession(false));
        }
    };
};

export const deactivateSession = (id) => {
    return async (dispatch) => {
        dispatch(isLoadingCart(true));
        try {
            const response = await axios.patch(
                `http://localhost:5000/patients/session/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            await dispatch(isLoadingCart(false));
        } catch (error) {
            console.log(error);
            dispatch(isLoadingCart(false));
        }
    };
};

export const searchPatient = (limit = 10, page, search) => {
    return async (dispatch) => {
        dispatch(isLoadingSearch(true));
        try {
            const response = await axios.get(
                `http://localhost:5000/patients/searchTag?size=${limit}&page=${page}&searchName=${search}`
            );
            console.log(
                "from actions total pages search",
                response.data.totalPages
            );
            await dispatch(setTotalPagesSearch(response.data.totalPages));
            await dispatch(updateStepSearch(response.data.currentPage));
            await dispatch(setPatientSearch(response.data.patients));
            await dispatch(isLoadingSearch(false));
        } catch (error) {
            console.log(error);
            dispatch(isLoadingSearch(false));
        }
    };
};

export const deletePatient = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/patients/delete/${id}`
            );
        } catch (error) {
            console.log(error);
        }
    };
};

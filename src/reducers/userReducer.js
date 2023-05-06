const IS_LOADING = "IS_LOADING";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR";
const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
const LOGOUT = "LOGOUT";

const initialState = {
    isAuthenticated: false,
    accessToken: null,
    isLoading: false,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload,
                isAuthenticated: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
            };
        case REFRESH_TOKEN_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                accessToken: null,
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
}

export const logOut = () => ({ type: LOGOUT });
export const isLoading = (status) => ({ type: IS_LOADING, payload: status });
export const registerSuccess = () => ({ type: REGISTER_SUCCESS });
export const registerFail = () => ({ type: REGISTER_FAIL });
export const loginSuccess = (tokens) => ({
    type: LOGIN_SUCCESS,
    payload: tokens,
});
export const loginFail = () => ({ type: LOGIN_FAIL });
export const refreshTokenSuccess = (token) => ({
    type: REFRESH_TOKEN_SUCCESS,
    payload: token,
});
export const refreshTokenError = () => ({ type: REFRESH_TOKEN_ERROR });

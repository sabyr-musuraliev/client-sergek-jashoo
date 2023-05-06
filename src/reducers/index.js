import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "./userReducer";
import patientReducer from "./patientReducer";
import formReducer from "./formReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
    user: userReducer,
    patient: patientReducer,
    form: formReducer,
    message: messageReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

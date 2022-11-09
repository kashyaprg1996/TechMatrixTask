import { combineReducers } from "redux";
import placeReducer from "./place/placeReducer";

const rootReducer = combineReducers({
    placeReducer: placeReducer,
})

export default rootReducer;
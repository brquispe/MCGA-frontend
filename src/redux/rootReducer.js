import { combineReducers } from "redux";
import productReducer from "./Products/reducer";

const rootReducer = combineReducers({productReducer: productReducer});

export default rootReducer;
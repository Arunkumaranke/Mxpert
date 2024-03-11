import {combineReducers} from "redux";
import { tableData, userData, authorization} from "./reducer";

export default combineReducers({
    tableData,
    userData,
    authorization,
})
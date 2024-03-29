import { combineReducers } from "redux";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/conterReducer";

// 여러개의 리듀서를 하나로 합쳐주는 combineReducer
const rootReducer = combineReducers({
    isData:isDataReducer,
    counter:counterReducer,
});

export default rootReducer;
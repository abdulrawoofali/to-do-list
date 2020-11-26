import { createStore, combineReducers } from "redux";
import inputReducer from"./TextAreaRedux/reducer";
import taskDataProviderReducer from "./TaskDataProviderRedux/reducer";
import taskViewReducer from "./TextViewerRedux/reducer";

console.log(taskDataProviderReducer,"am your data provider....");

const rootReducer = combineReducers({
    inputReducer: inputReducer,
    taskDataProviderReducer:taskDataProviderReducer,
    // taskViewReducer:taskViewReducer

    
});

export default createStore(rootReducer);
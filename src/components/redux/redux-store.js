import { combineReducers, legacy_createStore } from "redux";
import clientsReducer from "./clientsReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    clientsPage: clientsReducer,
});

let store = legacy_createStore(reducers);


export default store;
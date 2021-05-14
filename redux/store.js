import { createStore, combineReducers } from "redux";
import route from "./reducers/routeReducer";
import audio from "./reducers/audioReducer";
//import thunk from 'redux-thunk'

const state = combineReducers({
    route,
    audio,
});

const storeFunction = () => {
    let store = createStore(state /*, applyMiddleware(thunk)*/);
    return store;
};

export default storeFunction;

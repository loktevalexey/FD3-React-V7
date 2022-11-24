import { combineReducers } from 'redux';

import fruitsReducer from "./fruitsReducer";
import profileReducer from "./profileReducer";

let combinedReducer=combineReducers({
    fruits: fruitsReducer,    // the reducer fruitsReducer is in charge for the Redux partition named "fruits"
    profile: profileReducer,  // the reducer profileReducer is in charge for the Redux partition named "profile"
    // + other reducers if need be
});

export default combinedReducer;

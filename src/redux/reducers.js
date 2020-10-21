import googleReducer from './googleSearch/reducer'
import bingReducer from './bingSearch/reducer'
import engineReducer from './engine/reducer'

import { combineReducers } from "redux";

export default combineReducers({
    google: googleReducer,
    bing: bingReducer,
    engine: engineReducer
})
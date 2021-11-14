import {combineReducers} from 'redux'
import sidebar from "./slices/sidebar";
const reducers = combineReducers({
    sidebar:sidebar,
})

export default reducers;
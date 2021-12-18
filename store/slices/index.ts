import { combineReducers } from 'redux';

import sidebar from './sidebar';

const rootReducer = combineReducers({
  sidebar: sidebar
});

export default rootReducer;

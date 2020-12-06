import { combineReducers } from 'redux';

import { getJob } from './Job';

const rootReducer = combineReducers({
  getJob
});

export default rootReducer;
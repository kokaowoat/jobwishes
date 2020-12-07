import { combineReducers } from 'redux';

import { jobs } from './Job';

const rootReducer = combineReducers({
  jobs
});

export default rootReducer;
import { combineReducers } from 'redux';

import { jobs, filterJobs } from './Job';

const rootReducer = combineReducers({
  jobs,
  filterJobs
});

export default rootReducer;
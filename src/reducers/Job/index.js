import { GET_JOB_SUCCESS, GET_JOB_FAILURE } from '../../actions';

export function jobs(state = {}, action) {
  switch (action.type) {
    case GET_JOB_FAILURE:
      return Object.assign({}, state, { ...action });
    case GET_JOB_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}


export const GET_JOB_SUCCESS = 'GET_JOB_SUCCESS';
export const GET_JOB_FAILURE = 'GET_JOB_FAILURE';
export const FILTER_JOB_SUCCESS = 'FILTER_JOB_SUCCESS';
export const FILTER_JOB_FAILURE = 'FILTER_JOB_FAILURE';

const host = process.env.REACT_APP_API_HOST;
export function fetchGetJob(page) {
  return async dispatch => {
    const dateTime = new Date();
    try {
      const res = await fetch(`${host}/jobs/position?page=${page}`);   
      const data = await res.json(); 
      if (res.status === 200) {
        return await dispatch({
          type: GET_JOB_SUCCESS,
          data: data.body,
          status: res.status,
          dateTime
        });
      }
      else {
        return await dispatch({
          type: GET_JOB_FAILURE,
          data: null,
          status: res.status,
          dateTime,
        });
      }
    } catch (err) {
      return await dispatch({
        type: GET_JOB_FAILURE,
        data: null,
        status: err.status ? err.status : err,
        dateTime
      });
    }
  };
}

export function fetchFilterJob(page, description) {
  return async dispatch => {
    const dateTime = new Date();
    try {
      const res = await fetch(`${host}/jobs/position-filter?page=${page}&description=${description}`);
      const data = await res.json();      
      if (res.status === 200) {
        return await dispatch({
          type: FILTER_JOB_SUCCESS,
          data: data.body,
          status: res.status,
          dateTime
        });
      }
      else {
        return await dispatch({
          type: FILTER_JOB_FAILURE,
          data: null,
          status: res.status,
          dateTime,
        });
      }
    } catch (err) {
      return await dispatch({
        type: FILTER_JOB_FAILURE,
        data: null,
        status: err.status ? err.status : err,
        dateTime
      });
    }
  };
}
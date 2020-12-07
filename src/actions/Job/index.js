
export const GET_JOB_SUCCESS = 'GET_JOB_SUCCESS';
export const GET_JOB_FAILURE = 'GET_JOB_FAILURE';

// TODO get page numbre
export function fetchGetJob(page) {
  return async dispatch => {
    const dateTime = new Date();
    try {
      const res = await fetch(`http://jobs.github.com/positions.json?page=${page}`);
      const data = await res.json();      
      if (res.status === 200) {
        return await dispatch({
          type: GET_JOB_SUCCESS,
          data,
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
      // return await dispatch({
      //   type: GET_JOB_FAILURE,
      //   data: null,
      //   status: err.status ? err.status : err,
      //   dateTime,
      // });
    }
  };
}
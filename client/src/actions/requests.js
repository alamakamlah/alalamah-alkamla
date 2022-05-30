import * as api from '../api/index.js'

export const getRequests = () => async (dispatch) => {

    try {
        const { data } = await api.fetchRequests()
        dispatch({type: 'FETCH_REQUESTS', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const getRequest = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchRequest(id);
      dispatch({ type: 'FETCH_REQUEST', payload: { request: data } });
    } catch (error) {
      console.log(error);
    }
  }

  export const createRequest = (request) => async (dispatch) => {
    try {
        const {data} = await api.createRequest(request)
        dispatch({type: 'CREATE_REQUEST', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteRequest = (id) => async (dispatch) => {
    try {
        await api.deleteRequest(id);

        dispatch({type: 'DELETE_REQUEST', payload: id});
    } catch (error) {
        console.log(error);
    }
}

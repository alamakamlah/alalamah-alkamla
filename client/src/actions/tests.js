import * as api from '../api/index.js'

export const getTests = () => async (dispatch) => {

    try {
        const { data } = await api.fetchTests()
        dispatch({type: 'FETCH_TESTS', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const getTest = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchTest(id);
      dispatch({ type: 'FETCH_TEST', payload: { test: data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const getTestsBySearch = (searchQuery) => async (dispatch) => {
    try {
      const { data: { data } } = await api.fetchTestsBySearch(searchQuery);
  
      dispatch({ type: 'FETCH__TESTS_BY_SEARCH', payload: { data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateTest = (id, test) => async (dispatch) => {
    try {
      const { data } = await api.updateTest(id, test);
  
      dispatch({ type: 'UPDATE_TEST', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const createTest = (test) => async (dispatch) => {
    try {
        const {data} = await api.createTest(test)
        dispatch({type: 'CREATE_TEST', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteTest = (id) => async (dispatch) => {
    try {
        await api.deleteTest(id);

        dispatch({type: 'DELETE_TEST', payload: id});
    } catch (error) {
        console.log(error);
    }
}



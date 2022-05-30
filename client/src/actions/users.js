import * as api from '../api/index.js'

export const getUsers = () => async (dispatch) => {

    try {
        const { data } = await api.fetchUsers()
        dispatch({type: 'FETCH_USERS', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const getUsersBySearch = (searchQuery) => async (dispatch) => {
  try {
    const { data: { data } } = await api.fetchUsersBySearch(searchQuery);
    dispatch({ type: 'FETCH_USERS_BY_SEARCH', payload: { data } });

  } catch (error) {
    console.log(error);
  }
};


export const getUser = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchUser(id);
      dispatch({ type: 'FETCH_USER', payload: { user: data } });
    } catch (error) {
      console.log(error);
    }
  }

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);

        dispatch({type: 'DELETE_USER', payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
      const { data } = await api.updateUser(id, user);
  
      dispatch({ type: 'UPDATE_USER', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

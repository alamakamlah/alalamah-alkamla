import * as api from '../api/index.js'

export const getLibrary = () => async (dispatch) => {

    try {
        const { data } = await api.fetchLibrary()
        dispatch({type: 'FETCH_LIBRARY', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const getLibraryItem = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchLibraryItem(id);
      dispatch({ type: 'FETCH_LIBRARY_ITEM', payload: { libraryItem: data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const getLibraryBySearch = (searchQuery) => async (dispatch) => {
    try {
      const { data: { data } } = await api.fetchLibraryBySearch(searchQuery);
  
      dispatch({ type: 'FETCH_LIBRARY_BY_SEARCH', payload: { data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateLibrary = (id, library) => async (dispatch) => {
    try {
      const { data } = await api.updateLibrary(id, library);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const createLibrary = (library) => async (dispatch) => {
    try {
        const {data} = await api.createLibrary(library)
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteLibrary = (id) => async (dispatch) => {
    try {
        await api.deleteLibrary(id);

        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}


export const commentLibrary = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.commentLibrary(value, id);

    dispatch({ type: 'COMMENT_LIBRARY', payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};


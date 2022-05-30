import * as api from '../api/index.js'

export const getLessons = () => async (dispatch) => {

    try {
        const { data } = await api.fetchLessons()
        dispatch({type: 'FETCH_LESSONS', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const getLesson = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchLesson(id);
      dispatch({ type: 'FETCH_LESSON', payload: { post: data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const getLessonsBySearch = (searchQuery) => async (dispatch) => {
    try {
      const { data: { data } } = await api.fetchLessonsBySearch(searchQuery);
  
      dispatch({ type: 'FETCH_LESSONS_BY_SEARCH', payload: { data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateLesson = (id, lesson) => async (dispatch) => {
    try {
      const { data } = await api.updateLesson(id, lesson);
  
      dispatch({ type: 'UPDATE_LESSON', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const createLesson = (lesson) => async (dispatch) => {
    try {
        const {data} = await api.createLesson(lesson)
        dispatch({type: 'CREATE_LESSON', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteLesson = (id) => async (dispatch) => {
    try {
        await api.deleteLesson(id);

        dispatch({type: 'DELETE_LESSON', payload: id});
    } catch (error) {
        console.log(error);
    }
}



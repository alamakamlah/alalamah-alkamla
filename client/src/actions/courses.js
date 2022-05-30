import * as api from '../api/index.js'

export const getCourses = () => async (dispatch) => {

    try {
        const { data } = await api.fetchCourses()
        dispatch({type: 'FETCH_COURSES', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const getCourse = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchCourse(id);
      dispatch({ type: 'FETCH_COURSE', payload: { course: data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const getCourseBySearch = (searchQuery) => async (dispatch) => {
    try {
      const { data: { data } } = await api.fetchCourseBySearch(searchQuery);
  
      dispatch({ type: 'FETCH_COURSE_BY_SEARCH', payload: { data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateCourse = (id, course) => async (dispatch) => {
    try {
      const { data } = await api.updateCourse(id, course);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const createCourse = (course) => async (dispatch) => {
    try {
        const {data} = await api.createCourse(course)
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteCourse = (id) => async (dispatch) => {
    try {
        await api.deleteCourse(id);

        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}


export const commentCourse = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.commentCourse(value, id);

    dispatch({ type: 'COMMENT_COURSE', payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};


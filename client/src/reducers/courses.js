const courseReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case 'FETCH_COURSES':
            return {
                ...state, 
                courses: action.payload.data
            }
        case 'FETCH_COURSE_BY_SEARCH':
            return { ...state, courses: action.payload.data };
        case 'FETCH_COURSE':
            return { ...state, course: action.payload.course };
        case 'UPDATE_COURSE':
            return { ...state, courses: state.courses.map((course) => (course._id === action.payload._id ? action.payload : course)) };
      
        case 'CREATE_COURSE': 
            return  { ...state, courses:  [...state.courses, action.payload]};
        
        case 'COMMENT_COURSE':
            return {
                 ...state,
                products: state.courses.map((course) => {
                if (course._id == +action.payload._id) {
                    return action.payload;
                }
                return course;
                }),
            };
            

        case 'DELETE_COURSE':
            return { ...state, courses: state.courses.filter((course) => course._id !== action.payload) };
        
        default:
            return state;
    }
}

export default courseReducer
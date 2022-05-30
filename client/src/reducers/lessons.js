const lessonsReducer = (state = { lessons: [] }, action) => {
    switch (action.type) {
        case 'FETCH_LESSONS':
            return {
                ...state, 
                lessons: action.payload.data
            }
        case 'FETCH_LESSONS_BY_SEARCH':
            return { ...state, lessons: action.payload.data };
        case 'FETCH_LESSON':
            return { ...state, lesson: action.payload.post };
        case 'UPDATE_LESSON':
            return { ...state, lessons: state.lessons.map((lesson) => (lesson._id === action.payload._id ? action.payload : lesson)) };
      
        case 'CREATE_LESSON': 
            return  { ...state, lessons:  [...state.lessons, action.payload]};
        case 'DELETE_LESSON':
            return { ...state, lessons: state.lessons.filter((lesson) => lesson._id !== action.payload) };
        
        default:
            return state;
    }
}

export default lessonsReducer
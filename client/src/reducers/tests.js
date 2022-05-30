const testsReducer = (state = { tests: [] }, action) => {
    switch (action.type) {
        case 'FETCH_TESTS':
            return {
                ...state, 
                tests: action.payload.data
            }
        case 'FETCH__TESTS_BY_SEARCH':
            return { ...state, tests: action.payload.data };
        case 'FETCH_TEST':
            return { ...state, test: action.payload.test };
        case 'UPDATE_TEST':
            return { ...state, tests: state.tests.map((test) => (test._id === action.payload._id ? action.payload : test)) };
      
        case 'CREATE_TEST': 
            return  { ...state, tests:  [...state.tests, action.payload]};
        case 'DELETE_TEST':
            return { ...state, tests: state.tests.filter((test) => test._id !== action.payload) };
        
        default:
            return state;
    }
}

export default testsReducer
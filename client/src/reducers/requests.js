const requestsReducer = (state = { requests: []} , action) => {
    switch (action.type) {
        case 'FETCH_REQUESTS':
            return {
                ...state, 
                requests: action.payload.data
            }
        case 'FETCH_REQUEST':
            return { ...state, request: action.payload.request };
       
        case 'CREATE_REQUEST': 
            return  { ...state, requests:  [...state.requests, action.payload]};
        case 'DELETE_REQUEST':
            return { ...state, requests: state.requests.filter((request) => request._id !== action.payload) };
        
        default:
            return state;
    }
}

export default requestsReducer
const usersReducer = (state = { users: []} , action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state, 
                users: action.payload.data
            }
        case 'FETCH_USER':
            return { ...state, user: action.payload.user };
            
        case 'FETCH_USERS_BY_SEARCH':
           return { ...state, users: action.payload.data };
    
        case 'UPDATE_USER': 
            return { ...state, users: state.users.map((user) => (user._id === action.payload._id ? action.payload : user)) };
        case 'DELETE_USER':
            return { ...state, users: state.users.filter((user) => user._id !== action.payload) };
        
        default:
            return state;
    }
}

export default usersReducer
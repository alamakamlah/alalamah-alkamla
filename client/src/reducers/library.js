const libraryReducer = (state = { library: [] }, action) => {
    switch (action.type) {
        case 'FETCH_LIBRARY':
            return {
                ...state, 
                library: action.payload.data
            }
        case 'FETCH_LIBRARY_BY_SEARCH':
            return { ...state, library: action.payload.data };
        case 'FETCH_LIBRARY_ITEM':
            return { ...state, libraryItem: action.payload.libraryItem };
        case 'UPDATE_LIBRARY':
            return { ...state, library: state.library.map((library) => (library._id === action.payload._id ? action.payload : library)) };
      
        case 'CREATE_LIBRARY': 
            return  { ...state, library:  [...state.library, action.payload]};
        case 'COMMENT_LIBRARY':
            return {
                ...state,
                products: state.library.map((libraryItem) => {
                if (libraryItem._id == +action.payload._id) {
                     return action.payload;
                }
                return libraryItem;
                }),
            };
    
        case 'DELETE_LIBRARY':
            return { ...state, library: state.library.filter((library) => library._id !== action.payload) };
        
        default:
            return state;
    }
}

export default libraryReducer
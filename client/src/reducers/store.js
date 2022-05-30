const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state, 
                products: action.payload.data
            }
        case 'FETCH__PRODUCTS_BY_SEARCH':
            return { ...state, products: action.payload.data };
        case 'FETCH_PRODUCT':
            return { ...state, product: action.payload.post };
        case 'UPDATE_PRODUCT':
            return { ...state, products: state.products.map((product) => (product._id === action.payload._id ? action.payload : product)) };
      
        case 'CREATE_PRODUCT': 
            return  { ...state, products:  [...state.products, action.payload]};
        case 'DELETE_PRODUCT':
            return { ...state, products: state.products.filter((product) => product._id !== action.payload) };
        case 'COMMENT_PRODUCT':
            return {
                ...state,
                products: state.products.map((product) => {
                if (product._id == +action.payload._id) {
                    return action.payload;
                }
                return product;
                }),
            };
        
        
        default:
            return state;
    }
}

export default productsReducer
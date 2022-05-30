const adReducer = (state = { ads: [] }, action) => {
    switch (action.type) {
        case 'FETCH_ADS':
            return {
                ...state, 
                ads: action.payload.data
            }
        case 'UPDATE_AD':
            return { ...state, ads: state.courses.map((ad) => (ad._id === action.payload._id ? action.payload : ad)) };
      
        case 'CREATE_AD': 
            return  { ...state, ads:  [...state.ads, action.payload]};
        case 'DELETE_AD':
            return { ...state, ads: state.ads.filter((ad) => ad._id !== action.payload) };
        
        default:
            return state;
    }
}

export default adReducer
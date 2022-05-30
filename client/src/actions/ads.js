import * as api from '../api/index.js'

export const getAds = () => async (dispatch) => {

    try {
        const { data } = await api.fetchAds()
        dispatch({type: 'FETCH_ADS', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

  export const updateAd = (id, ad) => async (dispatch) => {
    try {
      const { data } = await api.updateAd(id, ad);
  
      dispatch({ type: 'UPDATE_AD', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const createAd = (ad) => async (dispatch) => {
    try {
        const {data} = await api.createAd(ad)
        dispatch({type: 'CREATE_AD', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteAd = (id) => async (dispatch) => {
    try {
        await api.deleteAd(id);

        dispatch({type: 'DELETE_AD', payload: id});
    } catch (error) {
        console.log(error);
    }
}



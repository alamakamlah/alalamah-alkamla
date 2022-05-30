import * as api from '../api/index.js'

export const getProducts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchProducts()
        dispatch({type: 'FETCH_PRODUCTS', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const getProduct = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchProduct(id);
      dispatch({ type: 'FETCH_PRODUCT', payload: { post: data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const getProductsBySearch = (searchQuery) => async (dispatch) => {
    try {
      const { data: { data } } = await api.fetchProductsBySearch(searchQuery);
  
      dispatch({ type: 'FETCH__PRODUCTS_BY_SEARCH', payload: { data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateProduct = (id, product) => async (dispatch) => {
    try {
      const { data } = await api.updateProduct(id, product);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const createProduct = (product) => async (dispatch) => {
    try {
        const {data} = await api.createProduct(product)
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id);

        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const commentProduct = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.commentProduct(value, id);

    dispatch({ type: 'COMMENT_PRODUCT', payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};



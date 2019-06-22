import { API_URL } from '../../config/config';
const getProducts = () => fetch(`${API_URL}21`); //get infromation
 
export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return getProducts()
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        dispatch(fetchProductsSuccess(json.results));
        return json.results;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}




fetchProducts()

export const fetchProductsBegin = () => ({
  type: 'FETCH_PRODUCTS_BEGIN'
});


export const fetchProductsSuccess = products => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  payload: { error }
});



// Promise.resolve().then(() => console.log(1));

// (async () => console.log(2))();

// (() => console.log(3))();

// setTimeout(() => console.log(4));


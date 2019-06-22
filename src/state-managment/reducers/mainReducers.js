
const initialState = {
    items: [],
    loading: false,
    error: null
};
  

export default (state = initialState, action) => {
  switch(action.type) {

    case "FETCH_PRODUCTS_BEGIN": return {
      ...state,
      loading: true,
      error: null
    };break;


    case 'FETCH_PRODUCTS_SUCCESS': return {
      ...state,
      loading: false,
      items: action.payload.products
    };break;

    
    case 'FETCH_PRODUCTS_FAILURE': return {
      ...state,
      loading: false,
      items:[],
      error: action.payload.error
    };break;

    
    default: return state
  }
}

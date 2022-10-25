import { DISMISS_PRODUCTS, SET_LOADING, SET_PRODUCTS } from "./types";

const INITIAL_STATE = {
  isLoadingProducts: false,
  products: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case DISMISS_PRODUCTS:
      return {
        ...state,
        isLoadingProducts: false
      }
    case SET_LOADING:
      return {
        ...state,
        isLoadingProducts: true
      }
    default:
      return state;
  }
}

export default productReducer;
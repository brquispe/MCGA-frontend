import { DISMISS_PRODUCTS, SET_LOADING, SET_PRODUCTS } from './types';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products,
    },
  };
};

export const setProductsLoading = () => {
  return ({
    type: SET_LOADING,
    payload: { isLoadingProducts: true },
  });
};

export const dismissProductsLoading = () => {
  return ({
    type: DISMISS_PRODUCTS,
    payload: { isLoadingProducts: false }
  })
}

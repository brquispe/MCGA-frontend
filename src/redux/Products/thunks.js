import { dismissProductsLoading, setProducts, setProductsLoading } from "./actions"

export const getProducts = () => {
  return async (dispatch) => {
    console.log(dispatch);
    dispatch(setProductsLoading());
    let response = await fetch('http://localhost:3001/products');
    const data = await response?.json();
    console.log(data,data);
    if (data) {
      dispatch(setProducts([]));
      dispatch(dismissProductsLoading());
      console.log(data);
    }
  
    if (response.status === 400) {
      dispatch(setProducts([]));
      dispatch(dismissProductsLoading());
    }
  }
}
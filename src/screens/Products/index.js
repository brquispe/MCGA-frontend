import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Products/thunks';

export const Products = () => {
  const dispatch = useDispatch();
  const {products, isLoadingProducts} = useSelector((state) => state.productReducer);
  console.log(products);
  console.log(isLoadingProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoadingProducts) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Productos</h1>
      <pre>{JSON.stringify(products)}</pre>
      <ul>{products.map(product => <li>{product}</li>)}</ul>
    </div>
  );
};

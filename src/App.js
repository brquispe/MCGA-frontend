import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './screens/Login';
import { Products } from './screens/Products';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Products />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './screens/Login';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Products />} />
      </Routes>
    </Layout>
  );
}

export default App;

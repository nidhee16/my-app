import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import { useRoutes } from 'react-router-dom'
import { routes } from './routes';

function App() {
  const appRoute=useRoutes(routes)
  return (
    <div >
      <Headers/>
      {appRoute}
    </div>
  )
}

export default App;

import './App.css';
import Interns from './components/interns'
import BackendInterns from './components/backendInterns';
import Web3Interns from './components/web3Interns';
import ProductInterns from './components/productDesignInterns';
import Home from './components/Home';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='app'>
        <Layout />
      <Routes>
        <Route  path = "/" element = {<Home/>}></Route>
          <Route 
          path= "/frontend"
          element ={<Interns/>}>
        </Route>
          <Route 
          path= "/backend"
          element ={<BackendInterns/>}>
        </Route>
          <Route 
          path= "/web3"
          element ={<Web3Interns/>}>
        </Route>
          <Route 
          path= "/backend"
          element ={<BackendInterns/>}>
        </Route>
          <Route 
          path= "/pdesign"
          element ={<ProductInterns/>}>
        </Route>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;

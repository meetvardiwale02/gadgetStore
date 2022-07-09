

import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import { BrowserRouter as Router, Switch ,Route, Link, Routes} from "react-router-dom";
import Cart from './components/Cart';
import Registration from './components/Registration';
import Login from './components/Login';
import Thankyou from './components/Thankyou';

function App() {
  return (
    <div>
          
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/thankyou" element={<Thankyou/>}/> 
          </Routes>          
      
    </div>
  );
}

export default App;

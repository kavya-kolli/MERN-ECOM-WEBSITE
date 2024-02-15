import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import {Navbar} from "./component/navbar";
import {Auth} from "./pages/auth";
import {Products} from "./pages/products";
import {Home } from "./pages/Home";
import {Cart} from "./pages/cart";


function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
     
     </Router>
    </div>
  );
}

export default App;

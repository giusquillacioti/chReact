import './App.css';
import Navbar from './components/Navbar';
import Brand from './components/Brand';
import ItemList from './components/ItemList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <header>
            <Brand />
            <Navbar />
          </header>
          <Routes>
            <Route path={"/"} element={<ItemList />} />
            <Route path={"/category/:id"} element={<ItemList />} />
            <Route path={"/item/:id"} element={<ItemDetail />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

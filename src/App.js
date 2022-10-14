import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Brand from './components/Brand';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Brand />
          <Navbar />
        </header>
        <Routes>
          <Route path={"/"} element={<ItemListContainer greeting={'Todos los productos'} />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

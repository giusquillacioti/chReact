import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Brand from './components/Brand';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <header>
      <ItemListContainer greeting={'Invitado'} />
      <Brand />
      <Navbar />
    </header>
    </>
  );
}

export default App;

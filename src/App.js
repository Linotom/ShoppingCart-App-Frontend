import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ViewAllProduct from './components/ViewAllProduct';

function App() {
  return (
    <div>
      <AddProduct/>
      <SearchProduct/>
      <ViewAllProduct/>
    </div>
  );
}

export default App;

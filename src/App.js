import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ViewAllProduct from './components/ViewAllProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<AddProduct/>}/>
      <Route path="/search" element={<SearchProduct/>}/>
      <Route path="/viewall" element={<ViewAllProduct/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

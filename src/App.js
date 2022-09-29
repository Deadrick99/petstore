import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './components/about';
import Animals from './components/animals';
import Customers from './components/customers';
import Home from './components/home';
import Merchandise from './components/merchandise';
import Suppliers from './components/suppliers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/animals" element={<Animals/>}/>
            <Route path="/merchandise" element={<Merchandise/>}/>
            <Route path="/suppliers" element={<Suppliers/>}/>
            <Route path="/customers" element={<Customers/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

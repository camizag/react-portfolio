import logo from './logo.svg';
import './App.css';

import Homepage from './components/Homepage';
import Work from './components/Work';
import Contactme from './components/Contactme';
import Navbar from './components/Navbar'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        {/* <div className="App"> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/my-work" element={<Work />} />
            <Route path="/contact-me" element={<Contactme />} />
          </Routes>
        {/* </div> */}
      </BrowserRouter>

  );
}

export default App;

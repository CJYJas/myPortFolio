import './css/App.css';
import Menu from './menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import AboutMe from './aboutme';
import Contact from './contact';
import Footer from './footer';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <div className={darkMode ? "App dark" : "App light"}>
        <div className="menu">
          <Menu />
          <button className='button' onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <div><Footer /></div>
      </div>
    </BrowserRouter>
  );
}

export default App;

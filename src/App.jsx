import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import { Routes, Route } from 'react-router-dom'; 

// --- PAGES & ARTICLES ---
import Blog from './blog/Blog.jsx';              
import T20Article from './blog/T20Article.jsx';  /* <--- YOU NEED TO ADD THIS EXACT LINE */
import About from './routes/About.jsx';
import Articales from './routes/Articales.jsx';

// ... rest of your App.jsx code stays the same

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
     
      <Routes>
          {/* --- TOMORROW: Make T20Article the Home Page --- */}
          <Route path='/' element={<T20Article className={`content ${theme}`} />} />
          
          {/* Your archive links stay exactly the same */}
          <Route path='/fifa-memories' element={<Blog className={`content ${theme}`} />} />
          <Route path='/t20-world-cup' element={<T20Article className={`content ${theme}`} />} />

          {/* Menus */}
          <Route path='/About' element={<About className={`background ${theme}`}/>} />
          <Route path='/Articales' element={<Articales className={`background ${theme}`}/>} />
      </Routes>
    </div>
  );
};

export default App;
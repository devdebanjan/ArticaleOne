import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Blog from './blog/Blog.jsx'; 
import { Routes,Route } from 'react-router';

import About from './routes/About.jsx'
import Articales from './routes/Articales.jsx'
const App = () => {
  
  const [theme, setTheme] = useState('light');

  return (
    
    <div className={`container ${theme}`}>
      
      
      <Navbar theme={theme} setTheme={setTheme} />
      

     
      <Routes>
          <Route path='/' element={<Blog className = {`content ${theme}`} />}></Route>
         <Route path='/About' element={<About className = {`background${theme}`}/>}></Route>
          <Route path='/Articales' element={<Articales className = {`background${theme}`}/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
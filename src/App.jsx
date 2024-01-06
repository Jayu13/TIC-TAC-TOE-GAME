// import { useState } from 'react';
import Home from './Components/Home';
import GameZone from './Components/GameZone';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Routes >
          <Route path='/' Component={Home}/>
          <Route path='/gameZone' Component={GameZone}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


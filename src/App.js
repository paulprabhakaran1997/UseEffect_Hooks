import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UseEffect1 from './components/UseEffect1';
import ObjUseEffect from './components/ObjUseEffect';
import UnMounting from './components/UnMounting';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Users from './components/Users';

function App() {

  return (
    <div className="App">
      {/* <UseEffect1 /> */}
      {/* <ObjUseEffect /> */}
      {/* <UnMounting /> */}
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/posts' element={ <Posts /> } />
          <Route path='/users/:id' element={ <Users /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

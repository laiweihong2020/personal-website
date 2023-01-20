import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
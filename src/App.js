import React from 'react';
import './App.css';
import Header from './components 1/Header';
import Navbar from './components 1/Navbar';
import Profile from './components 1/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App



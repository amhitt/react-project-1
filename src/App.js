import React from 'react';
import './App.css';
import Header from './components 1/Header/Header';
import Navbar from './components 1/Navbar/Navbar';
import Profile from './components 1/Profile/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <Dialogs />
    </div>
  );
}

export default App



import React from 'react';
import './App.css';
import Header from './components 1/Header/Header';
import Navbar from './components 1/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Music from './components 1/Music/Music';
import News from './components 1/News/News';
import Settings from './components 1/Settings1/Settings';
import DialogsContainer from './components 1/Dialogs/DialogsContainer';
import UsersContainer from './components 1/Users/UsersContainer';
import ProfileContainer from './components 1/Profile/ProfileContainer';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'> 
        <Routes> 
          <Route  path='/profile/*' element={<ProfileContainer />}/>
          <Route  path='/dialogs/*' element={<DialogsContainer/>}/>
          <Route  path='/music' element={<Music/>}/>
          <Route  path='/news' element={<News/>}/>
          <Route  path='/settings' element={<Settings/>}/>
          <Route  path='/users' element={ <UsersContainer/> }/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App


 
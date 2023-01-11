import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import News from './components/News/News';
import Profile from './components/profile/Profile';
import Settings from './components/Settings/Settings';
import Working from './components/Working/Working';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<DialogsContainer store={props.store} DialogsElements={props.DialogsElements} MessagesElements={props.MessagesElements}
              updateNewMessageText={props.updateNewMessageText}
              state={props.state.dialogsPage} />} />
            <Route path='/profile' element={<Profile store={props.store} />} />
            <Route path='/news' element={<News />} />
            <Route path='/working' element={<Working />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

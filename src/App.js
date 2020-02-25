import React from 'react';
import Header from './Header/Header'
import './App.css';
import Footer from './Footer/Footer';
import MyRouting from './Routing/MyRouting';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="MyRouting">
      <BrowserRouter>
        <Header className="Header" title="Web 4 Enterprise"></Header>
        <MyRouting
          loginRoute='/login'
          homeRoute='/'
          registerRoute='/register'
          timesheetRoute='/timesheet'
          deskRoute='/desk'
          timegroupROute="/timegroup"
        />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

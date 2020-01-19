import React from 'react';
import Header from './Header/Header'
import './App.css';
import Footer from './Footer/Footer';
import MyRouting from './Routing/MyRouting';


function App() {
  return (
    <div className="MyRouting">
      <Header className="Header" title="Web 4 Enterprise"></Header>
      <MyRouting 
        loginRoute='/login'
        homeRoute='/'
        registerRoute='/register'
        />
      <Footer></Footer>
    </div>
  );
}

export default App;

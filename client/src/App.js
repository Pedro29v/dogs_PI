import React from "react";
import './App.css';
import { Route } from 'react-router-dom';
import home from './components/home.jsx';
import landing from './components/landing.jsx';
import navBar from './components/navBar.jsx';
import createDog from "./components/createDog";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={landing} />
      <Route path='/home' exact component={navBar}/>
      <Route path='/home' exact component={home} />
      <Route path='/home/:id' exact component={Detail} />
      <Route path='/dog' exact component={createDog} />
    </div>
  );
}

export default App;

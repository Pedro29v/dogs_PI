import React from "react";
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Landing from './components/Landing.jsx';
import CreateDog from "./components/CreateDog";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Landing} />
      <Route path='/home' exact component={Home} />
      <Route path='/home/:id' exact component={Detail} />
      <Route path='/dog' exact component={CreateDog} />
    </div>
  );
}

export default App;

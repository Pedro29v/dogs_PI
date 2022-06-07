import React from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import Landing from './components/Landing.jsx';
import CreateDog from "./components/CreateDog";
import Detail from "./components/Detail";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/home' exact component={Home} />
        <Route path='/home/:id' exact component={Detail} />
        <Route path='/dog' exact component={CreateDog} />
        <Route path='/*' component={Error404} />
      </Switch>
    </div>
  );
}

export default App;

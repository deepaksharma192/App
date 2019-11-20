import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Common/Header';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const isLogin =true;
  return (
    <div className="App">
      {/* <Header isLogin={isLogin}/> */}
      <Router>
        <Route path="/" component={Login} />
      </Router>
    </div>
  );
}

export default App;

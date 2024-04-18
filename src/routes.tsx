import React from 'react';
import { BrowserRouter as Router, Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { getTokenFromUrl } from './components/spotify';

function routes() {
    return (
    <Router>
        <Route path="/" Component={Login}/>
        <Route path="/Home" Component={Home}/>
    </Router>
      );
    }
    
    export default routes;
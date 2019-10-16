import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home.jsx';

export default () => { 
    return <Route exact path="/" component={ Home } />
}
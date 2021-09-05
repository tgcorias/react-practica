import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../assets/styles/App.scss';
import Home from '../containers/Home';
import Login from '../components/Login'
import Register from '../containers/Register'


const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/login" component={Login}  />
            <Route exact path="/register" component={Register}  />
        </Switch>
    </BrowserRouter>
);

export default App;
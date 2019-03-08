import React, {Component} from 'react';
import './App.css';
import Register from './components/register';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
        <div className="App" className="container">
            <Router>
                <Switch>
                    <Register/>
                </Switch>
            </Router>
        </div>
    );
    }
}

export default App;

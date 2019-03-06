import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
        <div className="App" className="container">
            <Router>
                <Switch>
                    <Header/>
                </Switch>
            </Router>
        </div>
    );
    }
}

export default App;

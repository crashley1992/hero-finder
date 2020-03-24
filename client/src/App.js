import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from './components/NavTabs/NavTabs';
import Home from './pages/Home';
import SavedHeroes from './pages/SavedHeroes';
import Search from './pages/Search';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
      return (
        <div>
        <Router>
        <NavTabs 
         nameInputUpdate={this.nameInputUpdate}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/savedHeroes" component={SavedHeroes} />
        <Route exact path="/search" component={Search} />
        </Router>
        </div>
      )
    }
  }  

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/sginup';
import SignIn from './components/SignIn';
import About from './components/About';
const App = () => (
  <Router>
  <div className="App">
     <Navbar/>
     <div>
       <Switch>
     <Route exact path="/">
       <Home/>
     </Route>
       <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/SignIn">
        <SignIn/>
      </Route>
      <Route path="/About">
        <About/>
      </Route>
     </Switch>
     </div>
    
  </div>
  </Router>
);

export default App;


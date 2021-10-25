import './App.css';
import Navbar from '../src/Components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';

function App() {
  return (
    <>
    <Router>
    <div className = "app">
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route exact path="/Contact">
      <Contact/>      
      </Route> 
    </Switch>
    </div>
    </Router>
    </>
  )
}


export default App;
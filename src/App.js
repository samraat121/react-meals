import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About} exact/>
          <Route path='/contact' component={Contact} exact/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

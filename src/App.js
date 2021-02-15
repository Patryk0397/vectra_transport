import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app-container">
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/about' exact component={About} />
          <Route path='/contact-us' exact component={Contact} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;

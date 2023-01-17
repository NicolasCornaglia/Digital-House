
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products'
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className=""> 
      <Link to="/" exact={true}>Home</ Link> <br/>
      <Link to="/about" exact={true}>Contact</ Link><br/>
      <Link to="/contact" exact={true}>About</ Link><br/>
      <Link to="/no-existe" >No existe</ Link><br/>
      <hr />
      

      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/about' component={Contact}/>
        <Route path='/contact' component={About}/>
        <Route path='/products/:id' component={Products}/>
        <Route component={NotFound}/>
      </Switch>

    </div>
  );
}

export default App;

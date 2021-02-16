import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import NavBar from './Components/Layouts/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <section className='container'>
          <Route exact path='/' render={() => <h1>home</h1>} />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/Login' component={Login} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;

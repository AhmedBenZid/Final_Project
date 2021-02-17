import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import NavBar from './Components/Layouts/NavBar';
import Home from './Components/Pages/Home';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './Redux/Actions/auth';


function App() {

  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser()
  }, []);


  return (
    <Router>
      <div>
        <NavBar />
        <section className='container'>
          <Route exact path='/' component={Home} />
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

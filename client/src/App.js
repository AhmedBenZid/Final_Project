import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import NavBar from './Components/Layouts/NavBar';
import Home from './Components/Pages/Home';
import Profile from './Components/Pages/Profile'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './Redux/Actions/auth';
import Dashboard from './Components/Pages/Dashboard';
import PrivateRoute from './Components/routes/PrivateRoute';
import Destination from './Components/Pages/DestinationsList';



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
        <Route exact path='/' component={Home} />
        <section className='container'>
          <Switch>

            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/profile' component={Profile} />
            <Route path='/destination/:id' component={Destination} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/Login' component={Login} />
          </Switch>
        </section>
      </div>
    </Router >
  );
}

export default App;

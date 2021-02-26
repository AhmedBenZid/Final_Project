import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Home from './Components/Pages/Home';
import Profile from './Components/Pages/Profile'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './Redux/Actions/auth';
import Dashboard from './Components/Pages/Dashboard';
import PrivateRoute from './Components/routes/PrivateRoute';
import AdminRoute from './Components/routes/AdminRoute';
import Destination from './Components/Pages/DestinationsList';
import { getGuidesProfiles } from './Redux/Actions/profile';
import DestinationsList from './Components/Pages/DestinationsList';
import AdminDashboard from './Components/Admin/AdminDashboard';
import { getDestinations } from './Redux/Actions/destination';
import { getCircuits } from './Redux/Actions/circuit';
import Footer from './Components/Layouts/Footer';
import GuidesList from './Components/Pages/GuidesList';
import Circuit from './Components/Pages/Circuit';


function App() {

  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
  const getGuides = () => dispatch(getGuidesProfiles());
  useEffect(() => {
    getUser()
    getGuides()
    dispatch(getDestinations())
    dispatch(getCircuits())
  }, []);


  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/destinationlist' component={DestinationsList} />
        <section className='container'>
          <Switch>
            <AdminRoute exact path='/admin' component={AdminDashboard} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/profile' component={Profile} />
            <Route path='/guides' component={GuidesList} />
            <Route path='/destination/:id' component={Destination} />
            <Route path='/circuit/:id' render={(props) => <Circuit {...props} />} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/Login' component={Login} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router >
  );
}

export default App;

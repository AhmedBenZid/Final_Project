import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getUserProfile } from '../../Redux/Actions/profile';
import Profile from '../Pages/Profile'
import AddProfile from '../Profile/AddProfile'
import { getAllUsers } from '../../Redux/Actions/auth';
import UserCard from '../Profile/UserCard';
import { getDestinations } from '../../Redux/Actions/destination';
import { CardGroup } from 'react-bootstrap';
import Destination from '../Pages/DestinationsList'
import { Link } from 'react-router-dom';
import AddCircuit from '../Profile/AddCircuit';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
}));


const Dashboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.profile);
    const user = useSelector(state => state.authReducer.user);
    const users = useSelector(state => state.authReducer.users);

    useEffect(() => {
        return dispatch(getUserProfile())

    }, []);
    const destinations = useSelector(state => state.destination.destinations)

    if (!user) {
        return <CircularProgress style={{ margin: '50%', width: 50 }} />
    }
    if (user && user.role === "admin") {
        return <>
            <h3>Users:</h3>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                {users && users.map(user => <UserCard key={user._id} user={user} />)}
            </div>
            <h3>Destinations:</h3>
            <div>
                <CardGroup>
                    {destinations.map((destination) => (<Destination key={destination._id} destination={destination} />))}
                </CardGroup>
            </div>
        </>
    }

    return (
        <>
            <h1 className="large text-primary">Dashboard</h1>
            <Link to='/' className=""><h5 className="large text-primary">Back Home</h5></Link>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px 0" }}>
                <div><Avatar alt={user && user.lastName} src={user && user.userPic ? user.userPic : user.avatar} className={classes.large} /></div>
                <div ><h1> {user && user.firstName} {user && user.lastName}</h1>
                    <h3>E-mail : {user && user.email}</h3>
                </div>
            </div>
            <div>
                {!profile ? <div><p>You have not yet create a profile, please add some info</p>
                    <AddProfile />
                </div>
                    : <Profile />}
            </div>
            <div><div className='flex flex-direction-row'>
                <h3>My Circuits</h3>
                <AddCircuit /></div>
            </div>
        </>
    )
}

export default Dashboard

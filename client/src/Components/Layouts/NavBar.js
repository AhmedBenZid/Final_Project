import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Actions/auth'



export default function PrimarySearchAppBar() {


    const isAuth = useSelector(state => state.authReducer.isAuth);
    const user = useSelector(state => state.authReducer.user);

    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logout());
    }

    const authUser = () => {
        return (<>
            <li className='text-white'>{user.firstName} {user.lastName}</li>
            {user.role === 'admin' ? <li className='text-white'><Link style={{ listStyleType: 'none' }} to='/admin'>Admin Dashboard</Link></li>
                : (user.role === "guide") ? <li style={{ listStyleType: 'none' }} className='text-white'> <Link to='/dashboard'>Dashboard</Link></li>
                    : null}
            <li><a className='text-danger' onClick={logOut}>Log-Out</a></li></>)

    };

    const notAuthUser = () => {
        return <li><a href="/login">Login</a></li>
    }

    return (
        <nav className="site-nav ">
            <div className="container">
                <div className="site-navigation">
                    <a href="index-2.html" className="logo m-0">FNARTI <span className="text-succcess">.</span></a>
                    <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/destinationlist">Destinations</a></li>
                        <li><a href="/guides">Guides</a></li>
                        {user ? authUser() : notAuthUser()}
                    </ul>
                    <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
                        <span></span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
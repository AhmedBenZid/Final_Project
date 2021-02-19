import React, { useEffect } from 'react'
import MainSection from '../Layouts/MainSection'
import { useSelector, useDispatch } from 'react-redux'
import UserCard from '../Profile/UserCard';
import { getAllUsers } from '../../Redux/Actions/auth'

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const users = useSelector(state => state.authReducer.users);

    return (
        <div>
            <MainSection />
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                <h2>Our Guides</h2>
                {users && users.map(user => (user.role === 'guide') && <UserCard user={user} />)}
            </div>
        </div>
    )
}

export default Home

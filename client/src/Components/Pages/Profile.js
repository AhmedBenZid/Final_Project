import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { getUserProfile } from '../../Redux/Actions/profile';
import EditProfile from '../Profile/EditProfile'


const Profile = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserProfile())
    }, [])
    const profile = useSelector(state => state.profile.profile);


    return (
        <div>

            <Card style={{ width: '50rem', margin: "30px auto" }}>
                <Card.Img variant="top" style={{ heigth: '200px' }} src={profile && profile.user && profile.user.userPic}></Card.Img>
                <Card.Body>
                    <Card.Title>{profile && profile.user && profile.user.firstName} {profile && profile.user && profile.user.lastName}</Card.Title>
                    <Card.Text>
                        {profile && profile.description}
                    </Card.Text>
                    <EditProfile profile={profile} />
                </Card.Body>
            </Card>

        </div >
    )
}

export default Profile
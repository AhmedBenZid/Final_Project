import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../Redux/Actions/profile';
import Spinner from '../Layouts/Spinner';


const Profile = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserProfile())
    }, [])
    const profile = useSelector(state => state.profile.profile);

    return (
        !profile ? <Spinner /> :
            <div className='m-4 container'>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
                        <div className="mr-4">
                            <img style={{ width: '249px', height: '249px', borderRadius: "20px" }} src={profile.user.userPic ? profile.user.userPic : profile.user.avatar} alt='userAvatar' />
                        </div>
                        <div>
                            <h2>{profile && profile.user && profile.user.firstName} {profile.user.lastName} </h2>
                            <div className='flex row'>Languages:  {profile.languages.map(language =>
                                <p className='p-2'>{language}</p>)}</div>
                            <p>Birthday : {profile.dateOfBirth.slice(0, 10)}</p>
                        </div>
                    </div>
                    <div className='m-4'>
                        <h4>About me:</h4>
                        <p>{profile.description}</p>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div >
    )
}

export default Profile
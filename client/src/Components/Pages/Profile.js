import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },

        Paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(4, 4, 4),
        }
    },
}));

const Profile = () => {
    const classes = useStyles();

    const profile = useSelector(state => state.profile.profile)


    return (
        <div className={classes.root}>

            <p>{profile && profile.description}</p>
                Languages:
            <ul> {profile && profile.languages.map(langue => <li>{langue}</li>)}</ul>

        </div>
    )
}

export default Profile
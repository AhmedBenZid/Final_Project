import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../Redux/Actions/auth'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginRight: 20,
        marginTop: 30
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function UserCard({ user }) {
    const classes = useStyles();
    const authUser = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch();

    const removerUser = () => {
        dispatch(deleteUser(user._id))
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {user.firstName.charAt(0)}
                    </Avatar>
                }
                title={`${user.firstName} ${user.lastName}`}
                subheader={user.date.slice(0, 10)}
            />
            <CardMedia
                className={classes.media}
                image={user.userPic}
                title={user.firstName}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {user.role.toUpperCase()}
                </Typography>
            </CardContent>
            {authUser && authUser.role === 'admin' && <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={removerUser}>
                    <DeleteForeverIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <EditIcon />
                </IconButton>
            </CardActions>}

        </Card>
    );
}
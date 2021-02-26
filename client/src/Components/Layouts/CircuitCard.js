import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DemandeCircuit from './DemandeCircuit';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
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

export default function CircuitCard({ circuit }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    return (
        !circuit ? <Spinner /> :
            <Card className={classes.root} >

                <Link to={`/circuit/${circuit._id}`} ><CardMedia
                    className={classes.media}
                    image="./img/Saharansky.jpg"
                    title="Paella dish"

                /></Link>
                <CardContent>
                    <h4>{circuit && circuit.title}</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {circuit && circuit.user && circuit.user.firstName.charAt(0)}{circuit && circuit.user && circuit.user.lastName.charAt(0)}
                            </Avatar>
                        }
                        title={circuit && circuit.title}
                    />
                        <b>{circuit.price}DT</b>
                    </div>
                    <h5>Languages: French , English, Arabic</h5>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {circuit.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing style={{ float: 'right', margin: 'auto' }}>
                    <DemandeCircuit circuit={circuit} />
                    <FavoriteIcon />
                </CardActions>
            </Card>
    );
}
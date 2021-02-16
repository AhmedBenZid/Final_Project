import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                TunisiaLocalGuide
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Register() {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const { firstName,
        lastName,
        email,
        password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                value={firstName}
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => onChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                value={lastName}
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                value={email}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => onChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                value={password}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to='/login' variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useHistory } from 'react-router-dom';
import { creatProfile } from '../../Redux/Actions/profile'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4, 4),
    },
}));

export default function EditProfile({ profile }) {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    const user = useSelector(state => state.authReducer.user)

    const [description, setDescription] = useState(profile && profile.description)
    const [street, setStreet] = useState(profile && profile.street)
    const [zipCode, setZipCode] = useState(profile && profile.zipCode)
    const [city, setCity] = useState(profile && profile.city)
    const [country, setCountry] = useState(profile && profile.country)
    const [languages, setLanguages] = useState(profile && profile.languages)
    const [car, setCar] = useState(profile && profile.car)
    const [loge, setLoge] = useState(profile && profile.loge)
    const [dateOfBirth, setDateOfBirth] = useState(profile && profile.dateOfBirth)


    const dispatch = useDispatch();
    const history = useHistory();

    const handleSave = () => {
        const editedProfile = {
            description,
            street,
            city,
            zipCode,
            country,
            languages,
            car,
            loge,
            dateOfBirth
        };
        dispatch(creatProfile(editedProfile));
        history.push('/dashboard');
        setDescription('');
        setStreet('');
        setCity('');
        setZipCode('');
        setCountry('');
        setLanguages('');
        setCar(false);
        setLoge(false);
        setDateOfBirth('');
        setOpen(false);
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={handleOpen}>
                Edit Profile
        </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <div className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Edit Profile
      </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={user && user.firstName}
                                id="firstName"
                                name="firstName"
                                // label="First name"
                                fullWidth
                                autoComplete="given-name"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={user && user.lastName}
                                id="lastName"
                                name="lastName"
                                // label="Last name"
                                fullWidth
                                autoComplete="last-name"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                value={description}
                                id="description"
                                name="description"
                                label="Description"
                                fullWidth
                                onChange={(e) => setDescription(e.target.value)}
                                autoComplete="Guide Description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                value={languages}
                                id="languages"
                                name="languages"
                                label="Languages : (Ex. French, English)"
                                fullWidth
                                onChange={(e) => setLanguages(e.target.value)}
                                autoComplete="shipping address-line2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={city}
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                onChange={(e) => setCity(e.target.value)}
                                autoComplete="city"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField value={street} id="Street" name="Street"
                                label="Street" fullWidth
                                onChange={(e) => setStreet(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={zipCode}
                                required
                                id="zipCode"
                                name="zipCode"
                                label="ZipCode / Postal code"
                                fullWidth
                                onChange={(e) => setZipCode(e.target.value)}
                                autoComplete="shipping postal-code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                calue={country}
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                onChange={(e) => setCountry(e.target.value)}
                                autoComplete="shipping country"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="dateOfBirth"
                                label="Birthday"
                                type="date"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="car" value={car} />}
                                label="Car"
                                onChange={(e) => setCar(!car)}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="loge" value={loge}
                                    onChange={(e) => setLoge(!loge)} />}
                                label="Loge"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth
                                className={classes.button}
                                startIcon={<SaveIcon />}
                                onClick={handleSave}
                            >
                                Save
      </Button></Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                fullWidth
                                className={classes.button}
                                startIcon={<SaveIcon />}
                                onClick={handleClose}
                            >
                                Close
      </Button>
                        </Grid>
                    </Grid>

                </div >

            </Modal>
        </div>

    );
}
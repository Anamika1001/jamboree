import { Avatar, CssBaseline, Grid, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './Style';
import { Box } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


const Login = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.sideImage}></div>
                </Grid>
                <Grid item md={6}>
                    <div className={classes.login}>
                        <Typography variant='h6'>Login to your account</Typography>
                        <Typography variant='subtitle2'>Login with Jamsaree ID & Password</Typography>
                    </div>
                    <div noValidate component="form">
                        <TextField
                            margin="normal" className={classes.textField} required fullWidth id="email" label="Email Address" name="email" placeholder='Enter your email-id' autoComplete="email" autoFocus
                        />
                        <TextField
                            margin="normal" required fullWidth id="password" label="Password" name="password" placeholder='Enter your password' type='password' autoComplete="password" autoFocus
                        />
                        <div>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Typography>or</Typography>
                        <Button

                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Google
                        </Button>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </div>
                </Grid>
            </Grid>


        </React.Fragment>
    )
}
export default Login;

// <Grid container>
//                 <CssBaseline />
//                 <Grid item
//                     className={classes.sideImage}>
//                 </Grid>
//             </Grid>

// sx={{ my: 8,
//                                 mx: 4,
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 alignItems: 'center',}}
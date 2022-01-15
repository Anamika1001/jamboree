import { Avatar, CssBaseline, Grid, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './Style';
import { Box } from '@material-ui/core';
import TextField from '@mui/material/TextField';


const Login = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid>
                <Grid item>
                    <div className={classes.sideImage}></div>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography variant='h6'>Login to your account</Typography>
                        <Typography variant='subtitle2'>Login with Jamsaree ID & Password</Typography>
                        <TextField
                            margin="normal" className={classes.textField} required fullWidth id="email" label="Email Address" name="email" placeholder='Enter your email-id' autoComplete="email" autoFocus
                        />
                        <TextField
                            margin="normal" required fullWidth id="password" label="Password" name="password" placeholder='Enter your password' type='password' autoComplete="password" autoFocus
                        />
                    </Box>
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
import { AppBar, Button, CssBaseline, Menu, MenuItem, IconButton, Toolbar, Typography, Drawer } from '@material-ui/core';
import React, { Fragment, useState } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from './Style';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Navbar = () => {
    const classes = useStyles();
    const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMenuAnchor);

    const openMobileMenu = (e) => {
        setMobileMenuAnchor(e.currentTarget);
    };
    const closedMobileMenu = () => {
        setMobileMenuAnchor(null);
    };

    const mobileMenu = (
        <Drawer anchorEl={mobileMenuAnchor} id='mobile-menu' keepMounted open={isMobileMenuOpen} ModalProps={{onBackdropClick:closedMobileMenu}}>
            <div className={classes.menu}>
                <MenuItem onClick={closedMobileMenu} className={classes.menuItemLogin}>
                    < AccountCircleIcon className={classes.menuItemIcon} />
                    Login / Signup
                </MenuItem>
                <MenuItem onClick={closedMobileMenu} className={classes.menuItem}>
                    <HomeIcon className={classes.Icon}/>
                    <b>Home</b>
                </MenuItem>
                <MenuItem onClick={closedMobileMenu} className={classes.menuItem}>
                    <ChatIcon className={classes.Icon}/>
                    Reviews
                </MenuItem>
                <MenuItem onClick={closedMobileMenu} className={classes.menuItem}>
                    <InfoOutlinedIcon className={classes.Icon}/>
                    About Us
                </MenuItem>

            </div>

        </Drawer>
    );
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography className={classes.navbarTypography}>
                        Jam Boree
                    </Typography>
                    <div className={classes.navbarDivButton}>
                        <Button className={classes.navbarButton}>
                            Home
                        </Button>
                        <Button className={classes.navbarButton}>
                            Reviews
                        </Button>
                        <Button className={classes.navbarButton}>
                            About Us
                        </Button>
                        <Button className={classes.navbarButton}>
                            Login/Sign Up
                            <AccountCircleOutlinedIcon />
                        </Button>
                    </div>
                    <IconButton className={classes.hamburger} onClick={openMobileMenu}>
                        <MenuIcon />
                    </IconButton>
                    {mobileMenu}

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Navbar;

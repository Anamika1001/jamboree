import React, { useState } from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, Box, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, IconButton, Menu, MenuItem, CardHeader, Hidden, Avatar } from '@material-ui/core'
import useStyles from './Style';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import MenuIcon from '@mui/icons-material/Menu';
import Paper from "@material-ui/core/Paper";

import { typography } from '@mui/system';

const Home = () => {
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
    <Menu anchorEl={mobileMenuAnchor} id='mobile-menu' keepMounted open={isMobileMenuOpen}>
      <MenuItem onClick={closedMobileMenu} >
        Home
      </MenuItem>
      <MenuItem onClick={closedMobileMenu}>
        Reviews
      </MenuItem>
      <MenuItem onClick={closedMobileMenu}>
        About Us
      </MenuItem>
    </Menu>
  )
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.typography}>
            Jam Boree
          </Typography>
          <div className={classes.sectionDesktop}>
            <Button className={classes.button}>
              Home
            </Button>
            <Button className={classes.button}>
              Reviews
            </Button>
            <Button className={classes.button}>
              About Us
            </Button>
            <Button className={classes.button}>
              Login/Sign Up
              <AccountCircleOutlinedIcon className={classes.profileIcon} />
            </Button>
          </div>
          <IconButton className={classes.hamburger} onClick={openMobileMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileMenu}
      <main>
        <div className={classes.root}>
          <Typography className={classes.info}>Dont go looking for perfect fit <br /> We are here to help u.
          </Typography>
          <Typography className={classes.info2}>
            Because dressmaking is our passion.</Typography>
          <Button className={classes.homePageButton}>
            Book Online Appointment
          </Button>

          <div className={classes.downwardNavbar}>
            <Typography variant='h5' className={classes.downwareNavbarItem}>
              Great fit
            </Typography>
            <Typography variant='h5' className={classes.downwareNavbarItem}>
              <Hidden xsDown>Lorem ipsum</Hidden>
            </Typography>
            <Typography variant='h5' className={classes.downwareNavbarItem}>
              <Hidden xsDown>Doorstep Service</Hidden>
            </Typography>
            <Typography variant='h5' className={classes.downwareNavbarItem}>
              Free design consultancy
            </Typography>
          </div>
        </div>
        <Container>
          <Typography className={classes.whyus}>
            <span className={classes.whyusCapital}>W</span>HY US<span className={classes.whyusCapital}>?</span>
          </Typography>
          <Grid container className={classes.cardPlaced}>
            <Grid item sm={2} xs={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} component='img' image="https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg" />
                <CardContent >
                  <Typography className={classes.cardContentTypo} variant='subtitle1'>Get Your Fabric Stitched</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={2} xs={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} component='img' image="https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg" />
                <CardContent>
                  <Typography className={classes.cardContentTypo} variant='subtitle1'>Revamp your wardrobe</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={2} xs={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} component='img' image="https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg" />
                <CardContent>
                  <Typography className={classes.cardContentTypo} variant='subtitle1'>Create the same outfit for you</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={2} xs={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} component='img' image="https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg" />
                <CardContent>
                  <Typography className={classes.cardContentTypo} variant='subtitle1'>Design a new look</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={2} xs={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} component='img' image="https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg" />
                <CardContent>
                  <Typography className={classes.cardContentTypo} variant='subtitle1'>Comfort and convience</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <div>
          <Typography className={classes.howItWorks}>HOW IT WORKS?</Typography>
          <Grid container className={classes.cardPlaced}>
            <Grid item sm={3}>
              <div className={classes.gridDiv}>
                <Typography className={classes.gridTypo}>Book an Appointment</Typography>
                <img className={classes.gridImage} src='https://st2.depositphotos.com/1001599/6911/v/600/depositphotos_69119257-stock-illustration-two-professional-young-men.jpg' />
                <Typography variant='subtitle1' className={classes.gridTypoPara}>Lorem Ipsum is simply dummy text<br /> of the printing and typesetting<br /> industry. Lorem Ipsum hstry's std scrambled it to make a</Typography>
              </div>
            </Grid>
            <Grid item sm={3}>
              <div className={classes.gridDiv}>
                <Typography className={classes.gridTypo}>Talk to Designers</Typography>
                <img className={classes.gridImage} src='https://st2.depositphotos.com/1001599/6911/v/600/depositphotos_69119257-stock-illustration-two-professional-young-men.jpg' />
                <Typography variant='subtitle1' className={classes.gridTypoPara}>Lorem Ipsum is simply dummy text<br /> of the printing and typesetting<br /> industry. Lorem Ipsum hstry's std scrambled it to make a</Typography>
              </div>
            </Grid>
            <Grid item sm={3}>
              <div className={classes.gridDiv}>
                <Typography className={classes.gridTypo}>Sit back and relax</Typography>
                <img className={classes.gridImage} src='https://st2.depositphotos.com/1001599/6911/v/600/depositphotos_69119257-stock-illustration-two-professional-young-men.jpg' />
                <Typography variant='subtitle1' className={classes.gridTypoPara}>Lorem Ipsum is simply dummy text<br /> of the printing and typesetting<br /> industry. Lorem Ipsum hstry's std scrambled it to make a</Typography>
              </div>
            </Grid>
          </Grid>
          <div className={classes.divHomePageButton}>
            <Button variant='contained' className={classes.homePageButton}>
              Book Online Appointment
            </Button>
          </div>
        </div>
        <Container>
          <Grid container className={classes.linebarGrid}>
            <Grid item sm={4} xs={12}>
              <div className={classes.linebarMainDiv}>
                <div className={classes.linebar}></div>
                <div className={classes.linebarSideContent}>
                  <Typography className={classes.linebarSideContentHeading}>ABOUT US</Typography>
                  <Typography className={classes.linebarSideContentPara}>Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. Lorem Ipsum<br /> has been the industry's standard dummy text<br /> ever since the 1500s, when an unknown printer<br /> took a galley of type and scrambled it to make a type specimen book. It has survived not only five<br /> centuries, but also the leap into electronic<br /> typesetting, remaining essentially unchanged. It<br /> was popularised in the 1960s with the release of<br /> Letraset sheets containing Lorem Ipsum<br /> passages, ake Aldus PageMaker including<br /> versions of Lorem Ipsum.</Typography>
                </div>
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <img className={classes.linebarSideContentImage} src='https://cdn.makespace.com/blog/wp-content/uploads/2016/10/20165515/how-to-organize-your-closet1.jpg' />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container className={classes.linebarGrid}>
            <Hidden smDown><Grid item sm={4} xs={12}>
              <img className={classes.linebarSideContentImage} src='https://cdn.makespace.com/blog/wp-content/uploads/2016/10/20165515/how-to-organize-your-closet1.jpg' />
            </Grid>
            </Hidden>
            <Grid item sm={4} xs={12}>
              <div className={classes.linebarMainDiv}>
                <div className={classes.linebar}></div>
                <div className={classes.linebarSideContent}>
                  <Typography className={classes.linebarSideContentHeading}>ABOUT US</Typography>
                  <Typography className={classes.linebarSideContentPara}>Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. Lorem Ipsum<br /> has been the industry's standard dummy text<br /> ever since the 1500s, when an unknown printer<br /> took a galley of type and scrambled it to make a type specimen book. It has survived not only five<br /> centuries, but also the leap into electronic<br /> typesetting, remaining essentially unchanged. It<br /> was popularised in the 1960s with the release of<br /> Letraset sheets containing Lorem Ipsum<br /> passages, ake Aldus PageMaker including<br /> versions of Lorem Ipsum.</Typography>
                </div>
              </div>
            </Grid>
            <Hidden smUp>
              <Grid item sm={4} xs={12}>
                <img className={classes.linebarSideContentImage} src='https://cdn.makespace.com/blog/wp-content/uploads/2016/10/20165515/how-to-organize-your-closet1.jpg' />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
        <Container>
        <Typography>CUSTOMER REVIEWS</Typography>
          <Grid container>
            <Grid item sm={3}>
              <Card className={classes.cardPlacedReviews}>
              <CardHeader
              avatar={
                <Avatar src='https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80'></Avatar>
              }
              title="Lorem ipsum"
              subheader="4.3 ⭐⭐⭐⭐"
              />
              <CardContent>
              <Typography variant='subtitle2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an u</Typography>
              </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card className={classes.cardPlacedReviews}>
              <CardHeader
              avatar={
                <Avatar src='https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80'></Avatar>
              }
              title="Lorem ipsum"
              subheader="4.3 ⭐⭐⭐⭐"
              />
              <CardContent>
              <Typography variant='subtitle2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an u</Typography>
              </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card className={classes.cardPlacedReviews}>
              <CardHeader
              avatar={
                <Avatar src='https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80'></Avatar>
              }
              title="Lorem ipsum"
              subheader="4.3 ⭐⭐⭐⭐"
              />
              <CardContent>
              <Typography variant='subtitle2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an u</Typography>
              </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card className={classes.cardPlacedReviews}>
              <CardHeader
              avatar={
                <Avatar src='https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80'></Avatar>
              }
              title="Lorem ipsum"
              subheader="4.3 ⭐⭐⭐⭐"
              />
              <CardContent>
              <Typography variant='subtitle2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an u</Typography>
              </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    <footer>
    <div classname={classes.footer}>
    </div>
    </footer>
    </React.Fragment>
  )
}
export default Home;
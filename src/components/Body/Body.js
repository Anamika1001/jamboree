import React, { Fragment } from 'react'
import { Button, Card, CardContent, CardMedia, Paper, CssBaseline, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './Style';
import { Hidden } from '@material-ui/core';
import { CardActionArea } from '@mui/material';
const Body = () => {
    const classes = useStyles();
    return (
        <React.Fragment>

            {/* ######################## BODY IMAGE #############################*/}
            <div className={classes.bodyImage}>

                <Typography className={classes.lineFirst}>Dont go looking for perfect fit.We are here to help you.</Typography>
                <Typography className={classes.lineSecond}>Because dressmaking is our passion.</Typography>
                <Button className={classes.button}>Book Online Appointment</Button>

                <div className={classes.downNavbar}>
                    <Typography>Great Fit</Typography>
                    <Typography  >
                        <Hidden xsDown>Lorem ipsum</Hidden>
                    </Typography>
                    <Typography  >
                        <Hidden xsDown>Doorstep Service</Hidden>
                    </Typography>
                    <Typography>Free design consultancy</Typography>
                </div>
            </div>
            {/* ######################## WHY US COMPONENT ###########################*/}
            <div>
                <Typography className={classes.Whyus}><span className={classes.WhyusEnlarge}>W</span>HY US<span className={classes.WhyusEnlarge}> ?</span></Typography>
                {/* ################### CARD INSIDE WHY US COMPONENT ####################*/}
                <Grid container className={classes.cardPlaced}>
                    <Grid item xs={6} sm={2}>
                        <Card className={classes.card} elevation={2}>
                            <CardActionArea>
                                <CardMedia className={classes.cardMedia} component='img' image='https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg' />
                                <CardContent className={classes.cardContent} >
                                    <Typography className={classes.cardContentTypography} variant='subtitle1'>Get Your Fabric Stitched</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Card className={classes.card} elevation={2}>
                            <CardActionArea>
                                <CardMedia className={classes.cardMedia} component='img' image='https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg' />
                                <CardContent className={classes.cardContent}>
                                    <Typography className={classes.cardContentTypography} variant='subtitle1'>Revamp your wardrobe</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Card className={classes.card} elevation={2}>
                            <CardActionArea>
                                <CardMedia className={classes.cardMedia} component='img' image='https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg' />
                                <CardContent className={classes.cardContent}>
                                    <Typography className={classes.cardContentTypography} variant='subtitle1'>Create the same outfit for you</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Card className={classes.card} elevation={2}>
                            <CardActionArea>
                                <CardMedia className={classes.cardMedia} component='img' image='https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg' />
                                <CardContent className={classes.cardContent}>
                                    <Typography className={classes.cardContentTypography} variant='subtitle1'>Design a new look</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Card className={classes.card} elevation={2}>
                            <CardActionArea>
                                <CardMedia className={classes.cardMedia} component='img' image='https://image.shutterstock.com/image-vector/woman-sewing-clothes-by-machine-260nw-622049813.jpg' />
                                <CardContent className={classes.cardContent}>
                                    <Typography className={classes.cardContentTypography} variant='subtitle1'>Comfort and convience</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            {/* ########################## HOW IT WORKS ########################*/}
            <Paper elevation={1} className={classes.paper}>
                <Typography className={classes.HowItWorks}>HOW IT WORKS?</Typography>
                <Grid container className={classes.grid}>
                    <Grid item xs={12} sm={3}>
                        <div className={classes.paperGrid}>
                            <Typography className={classes.paperTypo}><b>Book an Appointment</b></Typography>
                            <img className={classes.paperImage} src='https://st2.depositphotos.com/1001599/6911/v/600/depositphotos_69119257-stock-illustration-two-professional-young-men.jpg' />
                            <Typography className={classes.paperSub} variant='subtitle4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <div className={classes.paperGrid}>
                            <Typography className={classes.paperTypo}><b>Talk to Designers</b></Typography>
                            <img className={classes.paperImage} src='https://st2.depositphotos.com/1001599/6911/v/600/depositphotos_69119257-stock-illustration-two-professional-young-men.jpg' />
                            <Typography className={classes.paperSub} variant='subtitle4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <div className={classes.paperGrid}>
                            <Typography className={classes.paperTypo}><b>Sit back and relax</b></Typography>
                            <img className={classes.paperImage} src='https://st2.depositphotos.com/1001599/6911/v/600/depositphotos_69119257-stock-illustration-two-professional-young-men.jpg' />
                            <Typography className={classes.paperSub} variant='subtitle4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            {/*####################### DIV HOME PAGE BUTTON #########################*/}
            <div className={classes.divHomePageButton}>
                <Button className={classes.buttonAgain}>Book Online Appointment</Button>
            </div>
            {/*####################### DOWNWARD COMPONENT FIRST PART ############################*/}
            <Container className={classes.aboutUsGrid}>
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <div className={classes.aboutUsMainDivDesign}>
                            <div className={classes.abouUsLinebarDesign}></div>
                            <div className={classes.aboutUsContentDesign}>
                                <Typography className={classes.aboutUsHeading}>About Us</Typography>
                                <Typography className={classes.contentDesign}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ake Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                {/*<div className={classes.rightImageDivDesign}>
                            <img className={classes.rightImageDesign} src='https://cdn.makespace.com/blog/wp-content/uploads/2016/10/20165515/how-to-organize-your-closet1.jpg' />
                        </div>*/}
                        
                    </Grid>
                </Grid>
            </Container>
            {/*<div><img className={classes.leftImageDesign} src='https://images.unsplash.com/photo-1519220279207-fddf068f2141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMGhhbmdlcnxlbnwwfHwwfHw%3D&w=1000&q=80' /></div>*/}
            {/*#######################  DOWNWARD COMPONENT SECOND PART ############################*/}
            <Container className={classes.aboutUsGrid}>
                <Grid container >
                    <Hidden xsDown><Grid item xs={12} sm={6}>
                        
                    </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.aboutUsMainDownDivDesign}>
                            <div className={classes.abouUsLinebarDownDesign}></div>
                            <div className={classes.aboutUsContentDesign}>
                                <Typography className={classes.aboutUsDownHeading}>Dont let your wardrobe empty</Typography>
                                <Typography className={classes.contentDownDesign}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ake Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                            </div>
                        </div>
                    </Grid>
                    {/*                            <div><img className={classes.leftImageDesign} src='https://images.unsplash.com/photo-1519220279207-fddf068f2141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMGhhbmdlcnxlbnwwfHwwfHw%3D&w=1000&q=80' /></div>*/}
                    <Hidden smUp>
                        <Grid item xs={12} sm={6}>

                        </Grid>
                    </Hidden>

                </Grid>
            </Container>
        </React.Fragment>
    )
}
export default Body;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        color: 'rgba(91, 0, 0, 1)',
        backgroundColor: 'white',

        left: '0px',
        top: '0px',
        borderRadius: '0px',
        margin: '0px'
    },
    typography: {
        fontFamily: "allura",
        fontWeight: 400,
        fontSize: '2rem',
        flex: '6',
        color: 'black'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            minWidth: '50%',
            justifyContent: 'space-around'
        },
    },
    button: {
        color: 'rgba(91, 0, 0, 1)'
    },
    profileIcon: {
        color: 'rgba(91, 0, 0, 1)',
        marginLeft: '10px'
    },

    // menubar:{
    //     color:'blue'
    // },
    root: {

        height: '620px',
        backgroundImage: `linear-gradient(90.53deg, rgba(91, 0, 0, 0.7) 17.57%, rgba(91, 0, 0, 0) 98.61%),url(${"https://lh3.googleusercontent.com/pw/AM-JKLXZw1RZwa7P0EuEA2HSUwbMvxIYat_QFKTRPFRvxN6IEsgLdBoUXWZypjD-vO2p-wqeHm9YjAVkryc8n5V9O8_J4CyVDUpgJe9VFvnei0kI837kT7HVtV21rv9ARyCq5SexS0PTr0xih5DKP8-CC8f8nA=w1161-h625-no"})`,
        backgroundPosition: 'center',
        bacckgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',

        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center',


    },
    info: {
        fontSize: '24px',
        lineHeight: '30px',
        color: '#fff',
        paddingTop: '240px',
        paddingLeft: '30px',
        fontFamily: "Cinzel"
    },

    info2: {
        paddingLeft: '30px',
        paddingTop: '5px',
        fontSize: '16px',
        lineHeight: '20px',
        color: 'white',
        fontFamily: 'Montserrat'
    },
    homePageButton: {
        width:'340px',
        borderRadius: '8px',
        backgroundColor: '#C37777',
        height: '40px',
        marginLeft: '30px',
        marginTop: '40px',
        padding: '20px 35px 20px 35px',
        color: 'white',
        fontSize: '15px',
        '&:hover':{
            backgroundColor: '#C37777',
            color: 'white', 
        }
    },
    
    downwardNavbar: {

        marginTop: '170px',
        background: 'linear-gradient(90.53deg, rgba(91, 0, 0, 0.7) 17.57%, rgba(91, 0, 0, 0) 98.61%)',
        display: 'flex',
        height: '42px',
        [theme.breakpoints.down('xs')]: {
            background: 'linear-gradient(rgba(49, 49, 49, 0.45))',
            height:'42px'
        },
    },
    downwareNavbarItem: {
        fontFamily: 'Montserrat',
        width: '24%',
        padding: '15px 20px 10px 60px',
        fontSize: '15px',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize:'15px'
        },

    },

    hamburger: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        }
    },
    whyus: {
        textAlign: 'center',
        margin: '70px 80px 40px 80px',
        fontSize: '30px',
        fontWeight: '400',
        color: '#5B0000',
        fontFamily: 'Cinzel'
    },
    whyusCapital: {
        fontSize: '33px',

    },
    cardPlaced: {
        justifyContent: 'space-around',
        [theme.breakpoints.down('xs')]: {
            marginLeft:'30px'
        }
        
    },
    card: {
        width: '156px',
        height: '189px',
        background: 'rgba(91, 0, 0, 0.05)',
        textAlign:'center',
        [theme.breakpoints.down('xs')]: {
            marginBottom:'30px'
        }
    },
    cardMedia:{
        height:'120px',
        width:'123px',
        margin:' 10px auto 0px auto',
        
    },
    cardContentTypo:{
        height:'34px',
        padding:'0px',
        fontSize:'13px',
        fontFamily:'Montserrat',
        color:'#732828',
        fontWeight:'600',
        lineHeight:'17px',
        padding:'10px 15px 10px 15px'
    },
    howItWorks: {
        margin: '70px 80px 40px 80px',
        textAlign: 'center',
        fontSize: '24px',
        lineHeight: '30px',
        fontFamily: 'Cinzel',
        color: '#5B0000',
        fontWeight: '400',

    },
    gridDiv: {
        textAlign: 'center'
    },
    gridTypo: {
        height: '23px',
        fontSize: '18px',
        fontFamily: 'Montserrat',
        lineHeight: '30px',
        color: '#5B0000',
        fontWeight: '600'
    },
    gridImage:{
        height:'201px',
        width:'225px',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',
        objectFit:'cover',
        padding:'20px 10px 20px 10px',
        borderRadius:'8px'
    },
    gridTypoPara: {
        fontSize: '14px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        color: '#000000'
    },
    divHomePageButton:{
        textAlign:'center'
    },
    linebarGrid:{
        justifyContent:'space-around'
    },
    linebarMainDiv:{
        marginTop:'100px',
        marginLeft:'50px'
    },
    linebar:{
        float:'left',
        width:'5px',
        height:'260px',
        backgroundColor:'#F4ACAC'
    },
    linebarSideContent:{
        paddingLeft:'30px'
    },
    linebarSideContentHeading:{
        height:'30px',
        fontSize:'24px',
        lineHeight:'30px',
        fontFamily:'Cinzel',
        color:'#5B0000',
    },
    linebarSideContentPara:{
        fontSize:'12px',
        lineHeight:'17px',
        fontFamily:'Montserrat',
        color:'#000000',
        fontWeight:'600',
        paddingTop:'15px'
    },
    linebarSideContentImage:{
        width:'588px',
        height:'300px',
        objectFit:'cover',
        borderTopLeftRadius:'220px',
        borderBottomLeftRadius:'220px',
        marginTop:'40px',
        
    },
    cardPlacedReviews:{
        margin:'50px 30px '
    },
    footer:{
        height:'450px',
        width:'300px',
        border:'1px black solid',
        backgroundColor:'green'
    },

}))

export default useStyles;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
// ####################### BODY IMAGE ############################ //
    
    bodyImage: {
        height: '600px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        objectFit: 'cover',
        position: 'relative',
        backgroundImage: `linear-gradient(90.53deg, rgba(91, 0, 0, 0.7) 17.57%, rgba(91, 0, 0, 0) 98.61%),url(${"https://lh3.googleusercontent.com/pw/AM-JKLXZw1RZwa7P0EuEA2HSUwbMvxIYat_QFKTRPFRvxN6IEsgLdBoUXWZypjD-vO2p-wqeHm9YjAVkryc8n5V9O8_J4CyVDUpgJe9VFvnei0kI837kT7HVtV21rv9ARyCq5SexS0PTr0xih5DKP8-CC8f8nA=w1161-h625-no"})`,
        [theme.breakpoints.down('sm')]: {
            height: '520px',
            backgroundImage:`(358.36deg, #5B0000 3.45%, #5B0000 21.35%, rgba(91, 0, 0, 0) 97.12%)`
        },
    },
    lineFirst: {
        fontSize: '24px',
        lineHeight: '30px',
        color: '#fff',
        paddingTop: '240px',
        paddingLeft: '30px',
        fontFamily: "Cinzel",
        [theme.breakpoints.up('sm')]: {
            width: '500px',
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10px',
        },
    },
    lineSecond: {
        paddingLeft: '30px',
        paddingTop: '5px',
        fontSize: '16px',
        lineHeight: '20px',
        color: 'white',
        fontFamily: 'Montserrat',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
            paddingLeft: '10px'
        },
    },
    // button:{
    //     borderRadius: '8px',
    //     backgroundColor: '#C37777',
    //     height: '40px',
    //     marginLeft: '30px',
    //     marginTop: '40px',
    //     padding: '20px 35px 20px 35px',
    //     color: 'white',
    //     fontSize: '15px',
    //     '&:hover':{
    //         backgroundColor: '#C37777',
    //         color: 'white', 
    //     }
    // },
    button: {
        color: 'white',
        borderRadius: '8px',
        backgroundColor: '#C37777',
        marginLeft: '30px',
        marginTop: '40px',
        '&:hover': {
            backgroundColor: '#C37777',
            color: 'white'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            paddingLeft: '10px',
            marginTop: '30px',
        },
    },
    downNavbar: {
        height: '40px',
        display: 'flex',
        backgroundColor: 'brown',
        marginTop: '20px',
        justifyContent: 'space-between',
        marginTop: '180px',
        padding:'10px',
        color:'white',
        background:' linear-gradient(90.53deg, rgba(91, 0, 0, 0.7) 17.57%, rgba(91, 0, 0, 0) 98.61%)',
        [theme.breakpoints.down('sm')]: {
            marginTop: '90px',
            
        },
    },
// ######################### WHY US COMPONENT ###################### //
    Whyus:{
        margin:'60px 60px 50px 60px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'25px',
        fontFamily:'Cinzel',
        color:' #5B0000',
        [theme.breakpoints.up('sm')]: {
            fontSize: '30px',
            
        },
    },
    WhyusEnlarge:{
        fontSize:'30px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '35px',
            
        },
    },
//##################### CARD INSIDE WHY US COMPONENT #################//
    card:{
        margin:'7px',
        [theme.breakpoints.down('sm')]: {
            height:'205px',
        },
        
    },
    cardPlaced:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'stretch'

    },
    card:{
        margin:'7px',
        [theme.breakpoints.down('sm')]: {
            height:'205px',
        },
        
    },
    cardMedia:{
        padding:'5px',
        
    },
    cardContent:{
        padding:'0px 3px'
    },
    cardContentTypography:{
        fontSize:'13px',
        textAlign:'center',
        fontFamily:'Montserrat',
        color:'#732828',
        fontWeight:'700',
        lineHeight:'17px'
    },
//####################### HOW IT WORKS ################################//
    paper:{
        margin:'40px 10px 0px 10px'
    },
    HowItWorks:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'30px',
        fontSize:'24px',
        lineHeight:'30px',
        fontWeight:'400',
        color:'#5B0000',
        fontFamily:'Cinzel'
    },
    grid:{
        justifyContent:'space-around'
    },
    paperGrid:{
        margin:'15px'
    },
    paperTypo:{
        textAlign:'center',
        margin:'15px',
        fontFamily:'Montserrat',
        color:'#5B0000',
        fontSize:'18px',
        paddingTop:'10px'
    },
    paperImage:{
        width:'80%',
        margin:'auto',
        display:'block',
        objectFit:'cover',
        borderRadius:'25px',
    },
    paperSub:{
        textAlign:'center',
        fontSize:'14px',
        lineHeight:'17px',
        fontFamily:'Montserrat',
        fontWeight:'600',
    },
    divHomePageButton:{
        textAlign:'center'
    },
    buttonAgain: {
        color: 'white',
        borderRadius: '8px',
        backgroundColor: '#C37777',
        marginLeft: '30px',
        marginTop: '40px',
        width:'310px',
        '&:hover': {
            backgroundColor: '#C37777',
            color: 'white'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            paddingLeft: '10px',
            marginTop: '30px',
            width:'270px',
           
        },
    },
// ################## DOWNWARD COMPONENT FIRST PART #####################
    lastDivDesign:{
        marginTop:'70px'
    },
    linebarDesign:{
        float:'left',
        width:'3px',
        height:'260px',
        backgroundColor:'#F4ACAC',
        marginRight:'20px'
    },
    aboutUsDesign:{
        fontSize:'24px',
        lineHeight:'30px',
        fontFamily:'Cinzel',
        color:'#5B0000',
    },
    aboutUsParaDesign:{
        fontSize:'12px',
        lineHeight:'17px',
        fontFamily:'Montserrat',
        color:'#000000',
        fontWeight:'600',
        paddingTop:'15px'
    },
    imageDesignRightSide:{
        objectFit:'cover',
        borderTopLeftRadius:'220px',
        borderBottomLeftRadius:'220px',
        marginTop:'40px',
        height:'300px',
        [theme.breakpoints.down('sm')]: {
            height:'210px',   
        },
    },
    imageDesignLeftSide:{
        objectFit:'cover',
        borderTopRightRadius:'220px',
        borderBottomRightRadius:'220px',
        height:'300px',
        marginTop:'40px',
        width:'300px',
        [theme.breakpoints.down('sm')]: {
            height:'210px',
            width:'200px'
        },
    },
    aboutUsGrid:{
        marginTop:'100px',
        padding:'0px',
        [theme.breakpoints.between('md','lg')]:{
            padding:'0px'
        },
        // [theme.breakpoints.down(429)]:{
        //     marginTop:'10px',
        // },
    },
    aboutUsMainDivDesign:{
        margin:'70px 30px 0px 20px',
        [theme.breakpoints.between('md','lg')]:{
            margin:'50px 30px 0px 70px'
        },
        [theme.breakpoints.between(430,899)]:{
            margin:'30px 30px 0px 20px'
        },
        [theme.breakpoints.down(429)]:{
            margin:'30px 30px 0px 20px'
        },
    },
    abouUsLinebarDesign:{
        height:'310px',
        float:'left',
        width:'3px',
        backgroundColor:'#F4ACAC',
        [theme.breakpoints.down(429)]:{
            height:'310px',
        },
        [theme.breakpoints.between(900,1200)]:{
            height:'360px'
         },
        [theme.breakpoints.between(430,899)]:{
            height:'340px'
        },
         
         
    },
    aboutUsContentDesign:{
        paddingLeft:'15px',
        
    },
    aboutUsHeading:{
        fontSize:'24px'
    },
    contentDesign:{
        width:'75%',
        fontSize:'14px',
        fontFamily:'Montserrat',
        lineHeight:'20px',
        fontWeight:'600',
        color:'#171010',
        padding:'10px 80px 0px 5px',
        
        [theme.breakpoints.between(900,1200)]:{
           width:'92%' 
        },
        [theme.breakpoints.between(430,899)]:{
            width:'100%',
            padding:'10px 40px 0px 5px',
        },
        [theme.breakpoints.down(429)]:{
            width:'100%',
            lineHeight:'17px',
            padding:'5px 0px',
            
        },
       
    },
    aboutUsMainDownDivDesign:{
        // margin:'70px 30px 0px 20px',
        padding:'30px 0px 10px 100px',
        marginLeft:'40px',
        marginTop:'30px',
        [theme.breakpoints.between('md','lg')]:{
            margin:'40px 30px 0px 70px',
            padding:'0px 0px 10px 100px',
        },
        [theme.breakpoints.between(430,899)]:{
            marginLeft:'10px',
            marginTop:'10px',
            padding:'0px 0px 10px 20px',
        },
        
        [theme.breakpoints.down(429)]:{
            padding:'0px',
            margin:'30px 30px 0px 20px'
        },
    },
    contentDownDesign:{
        width:'75%',
        fontSize:'14px',
        fontFamily:'Montserrat',
        lineHeight:'20px',
        fontWeight:'600',
        color:'#171010',
        padding:'10px 0px 0px 5px',
        [theme.breakpoints.between('md','lg')]:{
            width:'100%'
        },
        [theme.breakpoints.between(430,899)]:{
            width:'90%',
            lineHeight:'17px',
            padding:'5px 0px 0px 5px',
        },
        [theme.breakpoints.down(429)]:{
            width:'100%',
            lineHeight:'17px',
            padding:'5px 0px',
        },
    },
    abouUsLinebarDownDesign:{
        
        height:'280px',
        float:'left',
        width:'3px',
        backgroundColor:'#F4ACAC',
        [theme.breakpoints.down('xs')]:{
            height:'345px',
        },
        [theme.breakpoints.between(900,1200)]:{
            height:'360px'
         },
        [theme.breakpoints.between(430,899)]:{
            height:'310px',
            
        },
        
    },
    aboutUsDownHeading:{
        fontSize:'24px',
        width:'70%'
    },
    rightImageDivDesign:{
        [theme.breakpoints.down(429)]:{
            
            right:'0',
        },   
    },
    rightImageDesign:{
        height:'30em',
        width:'600px',
        borderTopLeftRadius:'220px',
        borderBottomLeftRadius:'220px',
        objectFit:'cover',
        [theme.breakpoints.down('sm')]: {
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            width:'300px'
        },
        [theme.breakpoints.between(430,899)]:{
            height:'25em',
            width:'400px'
        },
        [theme.breakpoints.down(429)]:{
            height:'20em',
            marginTop:'25px',
            width:'350px',
        }, 
    },
    leftImageDesign:{
        height:'30em',
        borderBottomRightRadius:'220px',
        borderTopRightRadius:'220px',
        width:'100%',
        objectFit:'cover',
        [theme.breakpoints.down('sm')]: {
            width:'300px',
        },
        [theme.breakpoints.between(430,899)]:{
            height:'25em',
            width:'370px'
        },
        [theme.breakpoints.down(429)]:{
           width:'200px',

            
        },
        
    },
    leftImageDesign:{
        borderBottomRightRadius:'220px',
        borderTopRightRadius:'220px',
        objectFit:'cover',
        [theme.breakpoints.between(430,899)]:{
            height:'25em',
            width:'370px'
        },
    },
}));

export default useStyles;

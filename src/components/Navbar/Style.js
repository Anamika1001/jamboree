import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appbar:{
        backgroundColor:'white',
        [theme.breakpoints.between(900,1200)]:{
            width:'100%'
        },
    },
    navbarTypography:{
        flex:'6',
        fontFamily:'Allura',
        fontSize:'28px',
        color:'#000000'
    },
    navbarDivButton:{
        display: 'none',
        [theme.breakpoints.up('sm')]:{
            display:'inline',    
        },
    },
    navbarButton:{
        marginRight:'20px',
        color:'#651010'
    },
    hamburger: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        }
    },
    menu:{
        width:'220px',
        
    },

    menuItemLogin:{
        padding:'20px',
        borderBottom:'1px #E7DEDE solid',
        color:'#651010',
        fontWeight:'bold',
        fontSize:'16px'
    },
    menuItemIcon:{
        transform: 'scale(1.5)',
        color:'#C37777',
        marginRight:'10px'
        
    },
    Icon:{
        margin:'7px',
        color:'#651010',
    },
    menuItem:{
        color:'#651010',
        fontWeight:'500', 
        borderBottom:'1px #E7DEDE solid'
    },
}))

export default useStyles;
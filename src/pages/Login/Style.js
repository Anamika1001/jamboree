import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sideImage:{
        width:'450px',
        height:'550px',
        backgroundImage:`url(${"https://source.unsplash.com/random"})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        position: 'relative',
        objectFit:'cover',
        marginLeft:'auto',         
    },
    // textField:{
    //     border:'1px solid brown'
    // }
    login:{
        border:'1px black solid',
        // display:'flex',
        // flexDirection:'column',
         // alignItems:'center',
        // marginRight:'200px'
    },
    loginPagePaper:{
        marginRight:'200px',
        
    },
}))
export default useStyles;
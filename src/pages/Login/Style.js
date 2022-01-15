import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sideImage:{
        width:'300px',
        height:'400px',
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
}))
export default useStyles;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sideImage:{
        width:'300px',
        height:'300px',
        backgroundImage:`url(${"https://source.unsplash.com/random"})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        position: 'relative',
        objectFit:'cover',
        margin:'auto'
    },
    textField:{
        border:'1px solid brown'
    }
}))
export default useStyles;
import { makeStyles } from "@mui/material/";
import { alpha, styled } from '@mui/material/styles';
import {TextField} from '@mui/material'
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#eeeeee',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#eeeeee',
      },
    },
  });
  export default CssTextField
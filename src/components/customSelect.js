import {styled} from '@mui/material/styles'
import {Select, MenuItem} from '@mui/material';

const CustomSelect = styled(Select) ({
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
})

export default CustomSelect
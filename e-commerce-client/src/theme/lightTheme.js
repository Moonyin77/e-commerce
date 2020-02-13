import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: { 
        light: blue[200], 
        main: '#eeba30',
        dark: '#ffbf00' }, // Purple and green play nicely together.
    secondary: { main: '#740001' }, // Red
  },
  typography: { useNextVariants: true },
})

export default lightTheme
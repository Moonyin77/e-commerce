import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { 
        light: purple[200], 
        main: '#eeba30',
        dark: '#aa00ff' }, // Purple and green play nicely together.
    secondary: { main: '#b39ddb' },
  },
  typography: { useNextVariants: true },
})

export default darkTheme
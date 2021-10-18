import { ThemeProvider , createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#7114bc',
    },
    secondary: {
      main: '#cc0066',
    },
    neutral: {
      main: '#fff',
    },
  },
});

const MUIThemeProvider = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default MUIThemeProvider

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1359D1',
    },
    secondary: {
      main: '#dc004e',
    },
    text: {
      primary: '#000',
      secondary: '#000',
    },
  },
  typography: {
    fontFamily: 'var(--font-poppins)',
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
});

export default theme;

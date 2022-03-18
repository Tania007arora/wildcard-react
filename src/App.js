import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const customtheme = createTheme({
    typography: {
      subtitle1: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 400,
      },
      body1: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 300
      },
    },
    palette: {
      primary: {
        main: '#65676b',
        light: '#FFFFFF',
        dark: '#262626',
      },
      secondary: {
        main: '#f6f7f8',
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1024,
        lg: 1440,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={customtheme}>
    </ThemeProvider>
  );
}

export default App;

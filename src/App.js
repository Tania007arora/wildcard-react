import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import UserDetails from './pages/userDetails';
import Users from './pages/Users';

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
      <Router>
        <Route path="/admin" element={<AdminHome />}>
          <Route path="users" element={<Users />}></Route>
          <Route path="users/:userId" element={<UserDetails />}></Route>
          {/* // <Route path="posts" element={ }></Route>
          // <Route path="posts/:postId" element={ }></Route>
          // <Route path="albums" element={ }></Route>
          // <Route path="albums/:albumId" element={ }></Route> */}
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;

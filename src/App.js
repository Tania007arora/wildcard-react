import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import PostDetails from './pages/PostDetails';
import Posts from './pages/Posts';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';
import AdminHome from './components/AdminHome'
import Albums from './pages/Albums';
import AlbumDetails from './pages/AlbumDetails';
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
        <Routes>
          <Route path="/admin" element={<AdminHome />}>
            <Route path="users" element={<Users />}></Route>
            <Route path="users/:userId" element={<UserDetails />}></Route>
            <Route path="posts" element={<Posts />}></Route>
            <Route path="posts/:postId" element={<PostDetails />}></Route>
            <Route path="albums" element={<Albums />}></Route>
            <Route path="albums/:albumId" element={<AlbumDetails />}></Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

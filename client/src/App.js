import Home from './pages/Home';
// import Footer from './components/Footer'
import Profile from './pages/Profile'
import AddPost from './pages/AddPost'
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import BlogPage from './components/blog/BlogPage';
import Comments from './components/comments/Comments';

// material Ui theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#51BBB9',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      "Helvetica",
      "sans-serif"
    ],
  }
});


function App() {
  return (
    <ThemeProvider theme={ theme }>
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path='/post'>
              <BlogPage/>
            </Route>
            <Route exact path='/comments'>
              <Comments/>
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/addpost">
              <AddPost />
            </Route>
          </Switch>
        </div>
        {/* Removed footer for now  */}
        {/* <Footer /> */}
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;

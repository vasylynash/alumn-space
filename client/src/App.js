import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Profile from './pages/Profile'
import AddPost from './pages/AddPost'
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Comments from './components/comments/Comments';
import FullPost from './components/post/FullPost';
import EditPost from './components/post/EditPost';
import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
  if(!Auth.loggedIn()) {
    return (
      <ApolloProvider client={client}>
      <ThemeProvider theme={ theme }>
      <Router>
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
            <Route path="*"><Landing/></Route>
            </Switch>
            </Router>
    </ThemeProvider>
    </ApolloProvider>
            
    )
  }
  return (
<ApolloProvider client={client}>
    <ThemeProvider theme={ theme }>
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
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
            <Route exact path='/post/:postId'>
              <FullPost/>
            </Route>
            <Route exact path='/comments/:postId'>
              <Comments/>
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/addpost">
              <AddPost />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/edit-post/:postId">
              <EditPost />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </ThemeProvider>
</ApolloProvider>
  );
}

export default App;

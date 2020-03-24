import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { Provider as StoreProvider } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from 'react-loadable';

import ScrollToTop from './components/scrollToTop/scrollToTop';
// import Navbar from './components/navbar/navbar';
// import Footer from './components/footer/footer';

// import Loader from './components/loader/loader';

import globals from './utils/globals.scss';
import AppStore from './stores/appStore';

const stores = {
  AppStore
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: globals.primary
    },
    secondary: {
      main: globals.secondary
    }
  },
})

const Home = loadable({
  loader: () => import('./pages/home/home'),
  loading: () => <div>Loading...</div>,
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider {...stores}>
        <Router>
          <ScrollToTop />
          {/* <Navbar /> */}

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>

          {/* <Footer /> */}
        </Router>
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App;
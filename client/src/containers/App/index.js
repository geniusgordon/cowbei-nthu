import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import PostList from '../PostList';

const RedirectP = () => <Redirect to="/p" />;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Router>
            <div>
              <Match exactly pattern="/" component={RedirectP} />
              <Match pattern="/p" component={PostList} />
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;


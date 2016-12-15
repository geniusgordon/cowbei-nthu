import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import styled from 'styled-components';
import PostList from '../PostList';

const RedirectP = () => <Redirect to="/p" />;
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const AppBarWrapper = styled.div`
  height: 64px;
`;
const BodyWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainWrapper>
          <AppBarWrapper>
            <AppBar
              title="靠北清大"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          </AppBarWrapper>
          <Router>
            <BodyWrapper>
              <Match exactly pattern="/" component={RedirectP} />
              <Match pattern="/p" component={PostList} />
            </BodyWrapper>
          </Router>
        </MainWrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;


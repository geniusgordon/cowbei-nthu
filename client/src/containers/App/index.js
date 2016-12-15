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
`;
const StyledAppBar = styled(AppBar)`
  position: fixed !important;
`;
const BodyWrapper = styled.div`
  padding-top: 64px;
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainWrapper>
          <StyledAppBar
            title="靠北清大"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
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


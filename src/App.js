import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

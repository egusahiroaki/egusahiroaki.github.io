import React, { Component } from 'react';
import './App.css';

import CardList from './components/CardList'
import Footer from './components/Footer'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import createTypography from 'material-ui/styles/createTypography'


const font = "'Comfortaa', sans-serif"; 

// Comfortaaを全体で使う
// const muiTheme = getMuiTheme({
//   fontFamily: font
// });

const theme = (() => {
  const palette = createPalette({
    // type: 'dark',
  });

  const typography = createTypography(palette, {
    fontFamily: font,
  });

  return createMuiTheme({
    palette: palette,
    typography: typography,
  });
})();

// const theme = createMuiTheme({
//   typography: createTypography(createPalette(), {
//     fontFamily: '"Comic Sans"',
//   })
// });



class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Welcome</h1>
          </header>
          {/* <Header /> */}
          <CardList />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

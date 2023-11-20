import './App.css';
import React from 'react';
import Main from './components/main.js'
import { ThemeProvider } from 'styled-components';

const Theme = {
  primary: 'rgb(184,225,243)',
  secondary: 'rgb(105,108,153)',
  bg:'rgba(0, 0, 0, 0.892)'
}

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="app">
        <Main></Main>
      </div>
    </ThemeProvider>
  )
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter, Switch } from 'react-router-dom';
import Store from './store/redux/store';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import './assets/fonts/stylesheet.css';

const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: -webkit-fill-available;
  min-height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  transition: 0.4s;
  box-sizing: border-box;
  font-family: 'Proxima Nova Rg', sans-serif;
}

a:hover {
  text-decoration: none;
}

input:not([type='checkbox']):not([type='radio']),
textarea,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

*:focus {
  outline: none;
  filter: hue-rotate(30deg);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Provider store={Store}>
        <App />
      </Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

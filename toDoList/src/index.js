import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Recuadro from './Recuadro'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App >
      <Recuadro logo="https://gatsby-graphcms-ecommerce-starter.netlify.app/static/e07d6477c3dd8d5b5a9e8c1359d00639/c1ced/625ac59eaacbe41c654b381862aa5a64_preview.png"/>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

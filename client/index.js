 /**
 * Import bootstrap to all page
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStroopwafel, faPencilAlt, faTrash, faArrowAltCircleUp, faArrowAltCircleDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core'
library.add(fab, faStroopwafel, faPencilAlt , faArrowAltCircleUp, faArrowAltCircleDown, faTrash, faPlus);
dom.watch();

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { configureStore } from './store';
/**
 * Client entry point
 */

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });
}

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './component/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faBars} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faBars);


render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));


serviceWorker.unregister();

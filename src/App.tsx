import { CurrentPage } from './components/CurrentPage';
import { Provider } from 'overmind-react';
import { initializeRouter } from './presenter/router';
import { overmindApp } from './presenter/presenter';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
initializeRouter(overmindApp);

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmindApp}>
      <main className="bg-black">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <CurrentPage />
        </div>
      </main>
    </Provider>
  </React.StrictMode>,
  window.document.querySelector('#app'),
);

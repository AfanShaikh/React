import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';

import { myStore } from './App/Store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <App />
  </Provider>,
);
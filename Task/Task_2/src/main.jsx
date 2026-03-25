import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css'

import { Provider } from 'react-redux';
import { myStore } from './App/Store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
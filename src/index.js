import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import{Provider} from 'react-redux';
import rootReducer from './redux/store';
import {BrowserRouter} from 'react-router-dom'

const appStore=createStore(rootReducer,
{},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();

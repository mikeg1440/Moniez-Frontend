import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './CSS/App.css';
import App from './components/App';
import AppLayout from './layouts/AppLayout';

const composeEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, composeEnhancer)

ReactDOM.render(
  <Provider store={store}>
    <AppLayout>
        <App />
    </AppLayout>
</Provider>
  , document.getElementById('root'));

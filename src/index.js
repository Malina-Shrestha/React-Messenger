import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyCARKaDmVAzEevm_5mObhqEl4uhx2n7MQs",
  authDomain: "messenger-e4f1e.firebaseapp.com",
  databaseURL: "https://messenger-e4f1e.firebaseio.com",
  projectId: "messenger-e4f1e",
  storageBucket: "messenger-e4f1e.appspot.com",
  messagingSenderId: "142569152946",
  appId: "1:142569152946:web:1f55f3fc106791b7bf84ab",
  measurementId: "G-0XQNYRED8D"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store = { store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

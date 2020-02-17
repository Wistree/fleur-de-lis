import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
// the new Provider component from react-redux
// give ur app access to the store and reducers
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    // use Provider component to wrap arround ur app since we want everything inside access to this, store object that we get from redux
    // Provider is the parent component of everything inside our app
    // as a parent, it allows u to access to all the things related to the store, that we will put all of the actual code we want to store on redux state

    // when u have the provider, need to write the store itself

    // with the store attr like this, u now connect, have access to the store and redux insidde ur application

    // once pass the store object, will be albe to give the redux store contact to the rest of application so u can dispatch action through the store or pull value from the store and into components
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);


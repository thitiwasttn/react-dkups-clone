import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/Store"
import {getLoginState, logger as log} from "./utils/Utils";

store.subscribe(() => {
    log('loginReducer {} ' + getLoginState())
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);


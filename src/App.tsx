import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from "./components/loginComponent/LoginComponent";
import {getMemberTelNo, getMemberLoginKey, checkLogin} from "./utils/Utils";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FootNav from "./components/footNav/FootNav";
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
    let chkLogin: boolean = checkLogin();


    return (
        <div className="App">
            <Router>
                <div className="container">
                    <Route component={LoginComponent} path="/login"/>
                </div>
                <FootNav/>
            </Router>
        </div>
    );
};

export default App;

import React from 'react';     
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import '../styles/style.css';
import Page from './Page.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const element = 
<Router>
    <Page />
</Router>

ReactDOM.render(element, document.getElementById('contents'));



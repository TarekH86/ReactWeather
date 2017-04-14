import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';


// import 'script!jquery'
// import 'script!what-input'
// import 'script!foundation-sites'
// load foundation
require('foundation-sites/dist/css/foundation.min.css');
import css from 'apllicationStyle';
 

ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
         <Route path="about" component={About}/>
         <Route path="examples" component={Examples} />
         <IndexRoute component={Weather}/>
        </Route>
    </Router>
    ,
    document.getElementById('app')
   
);
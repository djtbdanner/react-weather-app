var React = require ('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');
// above is object descructuring - kind of like the line below simplified
// var Route = require('react-route').Route;
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');

// application styles
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
   <Router history={hashHistory}>
     <Route path='/' component={Main}>
          <Route path='about' component={About}/>
          <Route path='examples' component={Examples}/>
          <IndexRoute component={Weather}></IndexRoute>
     </Route>
   </Router>,
   document.getElementById('app')
 );

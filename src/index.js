import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import 'babel-core/register';
import 'babel-polyfill';

import { AppIndex, AsPerson, AsProgrammer }from './components/app';
import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Switch>
	    		<Route path="/AsPerson" component={AsPerson} />
	    		<Route path="/AsProgrammer" component={AsProgrammer}/>
	    		<Route path="/" component={AppIndex} />
    		</Switch>
    	</div>
    </BrowserRouter>
    
    
  </Provider>
  , document.querySelector('.container'));

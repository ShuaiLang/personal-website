import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import 'babel-core/register';
import 'babel-polyfill';

import { AppIndex, AsPerson, AsProgrammer } from './components/app';
import PhotoGallery from './components/photo-gallery/photo_gallery';
import VideoIndex from './components/videos_index/videos_index';
import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Switch>
          <Route path="/person/video" component={VideoIndex} />
          <Route path="/person/photo" component={PhotoGallery} />
	    		<Route path="/person" component={AsPerson} />
	    		<Route path="/programmer" component={AsProgrammer}/>
	    		<Route path="/" component={AppIndex} />
    		</Switch>
    	</div>
    </BrowserRouter>
    
    
  </Provider>
  , document.querySelector('.container'));

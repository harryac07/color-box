import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory,Route,IndexRoute,Router} from 'react-router';

import App from './Components/App';
import Preference from './Components/Preference';
import ColorLists from './Components/Color_lists';
import ColorDetail from './Components/Color_detail';

ReactDOM.render(
    <Router history={browserHistory}>
		<Route path="/" component={App}>
            <IndexRoute component={ColorLists} />
			<Route path="/preference/id/:id" component={Preference} /> 
			<Route path="/id/:id" component={ColorDetail} />
		</Route>
    </Router>
  , document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';
import Post from './containers/Post';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="posts" component={Posts}>
                <Router path=":id" component={Post}/>
            </Route> {/* << /posts 및 /posts/10 이런식으로 접속 가능*/}
            {/*<Router path="posts/:id" component={Post}/> <<< /posts 접속 불가*/}
        </Route>
    </Router>
    , document.getElementById('root'));

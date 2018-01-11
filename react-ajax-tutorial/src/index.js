import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './Animation.css';
import Promise from 'promise-polyfill';


//axios는 Promise를 사용하는 Http Client 라이브러리
// 신형 브라우저에서만 지원
// 그래서 Promise 기능을 가지고 있지 않은 브라우저 자바스크립트 엔진을 호환 시켜주기 위한 작업
// npm install --save promise-polyfill
if (!window.Promise) {
    window.Promise = Promise;
}

ReactDOM.render(<App />, document.getElementById('root'));

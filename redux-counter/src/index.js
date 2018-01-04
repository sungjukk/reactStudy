import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

//Redux 관련 불러오기
import { createStore } from 'redux';
import reduces from './reducers';
// Provider 컴포넌트를 사용하여 store 연동
import { Provider } from 'react-redux';

// 스토어 생성
//const store = createStore(reduces);

// 크롬 확장 프로그램 사용
const store = createStore(reduces, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

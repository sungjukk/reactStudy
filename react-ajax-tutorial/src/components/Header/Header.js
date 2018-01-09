import React from 'react';
import './Header.css';

// 함수형 컴포넌트
// this에 접근하는 것이 불가능
// lifeCycle api들을 사용하는 것이 불가능
// 오직 전달받은 props에만 의존한다.
const Header = () => (
    <div className="Header">
        POSTS
    </div>
)

export default Header;
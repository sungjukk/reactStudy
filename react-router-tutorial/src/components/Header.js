import React from 'react';
import { Link } from 'react-router';
import './Header.css';
import PropTypes from 'prop-types'

const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
        {children}
    </Link>
);

const Header = (props, context) => {
    const { router } = context;
    return (
        <div>
            <div className="logo">
                velopert
            </div>
            <div className="menu">
                <MenuItem to={'/'} active={router.isActive('/', true)}>홈</MenuItem>
                <MenuItem to={'/about'} active={router.isActive('/about')}>소개</MenuItem>
                <MenuItem to={'/posts'} active={router.isActive('/posts')}>포스트</MenuItem>
            </div>
        </div>
    );
};

Header.contextTypes = {
    router: PropTypes.object
}

export default Header;
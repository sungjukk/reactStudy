import React from 'react';
import { Link } from 'react-router';

import './PostLinks.css';

const PostLinks = () => {
    return (
        <div className="post-links">
            <Link to="/posts/1">1</Link>
            <Link to="/posts/2">2</Link>
            <Link to="/posts/3">3</Link>
            <Link to="/posts/4">4</Link>
        </div>
    );
};

export default PostLinks;
import React from 'react';
import './PostWrapper.css';

// children : this.props.children
const PostWrapper = ({children}) => {
    return (
        <div className="PostWrapper">
            {children}
        </div>
    )
}

export default PostWrapper;
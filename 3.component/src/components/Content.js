import React from 'react';

class Content extends React.Component {
    alertPop () {
        alert("hi");
    }
    render() {
        return (
            <div>
                <h2>content</h2>
                <button onClick={this.alertPop}>click</button>
            </div>
        );
    }
}

export default Content;
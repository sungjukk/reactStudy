import React from 'react';

class RandomNumber extends React.Component {
    updateNumber() {
        let value = Math.round(Math.random() * 100);
        this.props.onUpdate(value);  // function 형태의 prop로써 parent 컴포넌트에 정의된 매소드를 실행할 수 있게 해줌
    }

    constructor(props) {
        super(props);
        this.updateNumber = this.updateNumber.bind(this);
    }

    render () {
        return (
            <div>
                <h1>random number : {this.props.number}</h1>
                <button onClick={this.updateNumber}>reNumber</button>
            </div>
        )
    }
}

export default RandomNumber;
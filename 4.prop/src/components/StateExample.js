import React from 'react';
// state : 컴토넌트에서 유동적인 데이터를 다룰때 사용
class StateExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {                      // state의 초기 값을 설정 할 때는 constructor(생성자) 메소드에서 this.state = {}로 설정
            header : "header initial state",
            content : 'content initial state'
        };
    }

    updateHeader(text) {
        this.setState({                     // state를 업데이트 할 때에는 this.setState() 메소드 사용
            header : "header has changed"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h1>{this.state.content}</h1>
                <button onClick={this.updateHeader.bind(this)}>update</h1>
            </div>
        );
    }
    // state를 렌더링 할 때는 {this.state.stateName} 을 사용
}

export default StateExample;
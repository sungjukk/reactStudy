import React from 'react';
import PropType from 'prop-types';

class Content extends React.Component {
    alertPop () {
        alert("hi");
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
                <button onClick={this.alertPop}>click</button>
            </div>
        );
    }
}
// 해당 변수에 대한 타입 지정
// 타입이 다르면 오류가 출력된다.
// isRequired : 무조건 필요한 값
Content.propTypes = {
    title: PropType.string,
    body: PropType.string.isRequired
};
// React.PropTypes.string 시 Cannot read property 'string' of undefined 오류 발생 시
// npm install prop-types --save
// import PropType from 'prop-types';
// PropType.string로 변경

export default Content;
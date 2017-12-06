import React from 'react';    // var React = require('react');

class App extends React.Component { // 모든 Component는 React.Component를 상속한다.
	sayHay() {
		alert("hhhhh");        // onClick에는 ()가 안붙는다. ()를 넣으면 페이지가 로드될 때, 클릭할 때 실행된다.
	}
	render () {                // 컴포넌트에 렌더링 될 데이터를 정의
		let text = "first"     // let = var와 비슷한 역할
		let pStyle = {         // jsx안에 사용되는 javascript 표현에서는 if-else 사용 불가
			                   // 대안으로는 ternary {condition ? true : false}
			color : 'aqua',
			backgroundColor : 'black'
		}
		return (              // 여러 Element를 랜더링 할 때에는 무조건 container element안에 포함시켜아 한다.
			<div>
				<h1>Hello React</h1>
				<h2>Welcome {text}</h2>
				<button onClick={this.sayHay}>클릭</button>
				<p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
			</div>
		);
	}
}

export default App;   // module.export = App;
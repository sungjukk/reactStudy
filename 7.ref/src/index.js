import React from 'react';
import ReactDom from 'react-dom';

class Hello extends React.Component {
    // ref="" 형식으로 ref 지정
    // {} 안에 함수를 넣어 ref 설정 arrow function이 사용됨, 함수 안에 어떤 변수가 ref로 사용 될 지 직접 지정
    render () {
        return (
            <div>
                <input ref="myInput" />
                <input ref={ref => this.input = ref} />
            </div>
        );
    }

    componentDidMount() {
        this.refs.myInput.value = 'hello'; //ref 접근 시 컴포넌트가 랜더링 된 후 this.refs.refName으로 접근해야함
        this.input.value = "hi"; // this.ref를 사용하지 않아도 됨
    }
}

// HelloReact 컴포넌트에서 TextBox 컴포넌트의 ref를 this.TextBox로 지정
// ref를 통하여 input값 변경
class HelloReact extends React.Component {
    handleClick() {
        this.textBox.input.value = 'ref';
    }
    render () {
        return (
            <div>
                <TextBox ref={ref => this.textBox = ref} />
                <button onClick={this.handleClick.bind(this)}>click</button>
            </div>
        );
    }
}
// TextBox 컴포넌트의 input의 ref를 this.input로 지정
class TextBox extends React.Component {
    render() {
        return (
            <input ref={ref => this.input = ref}></input>
        );
    }
}


class HelloRef extends React.Component {
    handleClick() {
        this.input.value = "";
        this.input.focus();
    }

    render () {
        return (
            <div>
                <input ref={ref => this.input = ref} />
                <button onClick={this.handleClick.bind(this)}>click</button>
            </div>
        );
    }
}

ReactDom.render(
    <HelloRef />,
    document.getElementById('app')
);
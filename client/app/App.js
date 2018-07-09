import React from "react";
import ReactDOM from "react-dom";

class SayHello extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

ReactDOM.render(
    <SayHello name='Igor'/>, document.getElementById('root')
);
import React, { Component } from "react";

function App(props) {
  return <p>Hello, {props.name}</p>;
}
class Welcome extends Component {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}
export { App, Welcome };

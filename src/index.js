import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App, Welcome } from "./App";
import Comment from "./practise/props";
import Form from "./practise/event";
import Greeting, {
  ExplainBindingsComponent,
  Mailbox,
} from "./practise/Conditional";
import NumberList, { Blog } from "./practise/ListsAndKeys";
import reportWebVitals from "./reportWebVitals";

/**
 * ! simple Hello world
 */
const e = React.createElement;
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
/* props */
const user = {
  firstName: "Harper",
  lastName: "Perez",
};
const name = "Josh Perez";
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};
/* state and Lifecycle */
/**
 * concat and add using this method 
 this.setState((state, props) => ({
  counter: state.counter + props.increment
})); */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // this.timerID = setInterval(() => this.tick(), 1000);
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  handleClick = () => {
    console.log("this is:", this);
  };
  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const messages = ["React", "Re: React", "Re:Re: React"];

const numbers = [
  { id: 1, text: 1 },
  { id: 2, text: 2 },
  { id: 3, text: 3 },
  { id: 4, text: 4 },
  { id: 5, text: 5 },
];
const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    {e("p", null, "hello (simple js)")}
    {element}
    <p>hello (jsx)</p>
    <p>Hello, world!</p>
    <p>Hello, {name}!</p>
    <p>Hello, {formatName(user)}!</p>
    <React.StrictMode>
      <App name="kd" />
      <Welcome name="kd" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Clock />
      <Form />
      <LoggingButton />
      <Greeting />
      <ExplainBindingsComponent />
      <Mailbox unreadMessages={messages} />
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

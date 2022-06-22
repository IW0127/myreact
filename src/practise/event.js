import React from "react";

/* function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Your are click submit button.");
  };
  return (
    <form onClick={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
} 
*/
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("=======>", !this.state.isToggleOn);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  argument(a, k) {
    console.log(a, (k.target.innerHTML = "KD"));
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {console.log(this.state.isToggleOn)}
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={(e) => this.argument(8, e)}>sub</button>
        {/* <button onClick={this.argument.bind(this, 8)}>sub</button> */}
      </>
    );
  }
}
export default Form;

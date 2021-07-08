import React from "react";
import "./styles.css";

class Square extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}>{this.props.value}</button>
    );
  }
}

export default Square;

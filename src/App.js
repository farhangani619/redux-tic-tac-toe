import "./styles.css";
import { connect } from "react-redux";
import { actions } from "./store";
import React from "react";
import Board from "./Board";
class App extends React.Component {
  handleClick(i) {
    if (Calculatewinner(this.props.squares) || this.props.squares[i]) {
      return;
    }

    this.props.onbuttonCLick({
      squares: this.props.squares,
      isNext: this.props.isNext,
      index: i
    });
  }

  render() {
    const winner = Calculatewinner(this.props.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.props.isNext ? "X" : "O");
    }
    return (
      <div>
        <Board
          squares={this.props.squares}
          onClick={(i) => this.handleClick(i)}
        />
        <h4>{status}</h4>
      </div>
    );
  }
}
function Calculatewinner(squares) {
  console.log(squares);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function mapStateToProps(state) {
  return {
    squares: state.squares,
    isNext: state.isNext
  };
}
function mapDispatchtoprops(dispatch) {
  return {
    onbuttonCLick(squares) {
      dispatch(actions.buttonClick(squares));
    }
  };
}

export default connect(mapStateToProps, mapDispatchtoprops)(App);

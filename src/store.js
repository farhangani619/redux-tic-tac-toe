const initialState = {
  squares: Array(9).fill(null),
  isNext: true
};

export const actions = {
  buttonClick(squares) {
    return {
      type: "MARK_THE_BOX",
      squares
    };
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "MARK_THE_BOX": {
      const squares = state.squares.slice();
      squares[action.squares.index] = state.isNext ? "X" : "O";
      return {
        ...state,
        squares: squares,
        isNext: !action.squares.isNext
      };
    }
    default:
      return state;
  }
}

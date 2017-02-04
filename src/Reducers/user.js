const PlayerReducer = (state = {
  name: 'Player',
  xOrY: null,
  optionVisible: true,
  playersTurn: false,
  playerWon: null,
  playerScore: 0,
  computerScore: 0
}
, action) => {
  if ( action.type === 'SELECT_X' ) {
    return Object.assign({}, state, {
      xOrY: "X",
      optionVisible: false,
      playersTurn: true
    })
  } else if ( action.type === 'SELECT_O' ) {
    return Object.assign({}, state, {
      xOrY: "O",
      optionVisible: false
    })
  } else if ( action.type === 'SELECT_SQUARE' ) {
    return Object.assign({}, state, {
      playersTurn: false
    })
  } else if ( action.type === 'COMPUTER_MOVE' ) {
    return Object.assign({}, state, {
      playersTurn: true
    })
  } else if ( action.type === 'WIN_GAME' ) {
    if ( action.payload.win === true ) {
      if ( action.payload.player !== state.xOrY ) {
        let newScore = state.computerScore + 1;
        return Object.assign({}, state, {
          playersTurn: false,
          playerWon: false,
          computerScore: newScore
        })
      } else if ( action.payload.player === state.xOrY ) {
        let newScore = state.playerScore + 1;
        return Object.assign({}, state, {
          playersTurn: false,
          playerWon: true,
          playerScore: newScore
        })
      }
    } else if ( action.payload.win === 'draw' ) {
      return Object.assign({}, state, {
        playersTurn: false,
        playerWon: 'draw'
      })
    } else if ( action.payload.win === false ) {
      return state;
    }
  } else if ( action.type === 'NEW_GAME' ) {
    return Object.assign({}, state, {
      xOrY: null,
      optionVisible: true,
      playersTurn: false,
      playerWon: null,
    })
  } else {
    return state;
  }
}; 


export default PlayerReducer;

import GameState from "../GameState"



const Reset = ({ gameState, onReset }) => {

    const isGameOver = gameState !== GameState.inProgress;

    return (
        isGameOver &&  <button className='reset-button' onClick={onReset}>Play Again</button>
    )
}

export default Reset
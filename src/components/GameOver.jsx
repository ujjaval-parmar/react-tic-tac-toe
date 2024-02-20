import GameState from "../GameState"



const GameOver = ({ gameState }) => {
    console.log(gameState)
    switch (gameState) {
        case GameState.inProgress:
            return <></>;

        case GameState.playerXwins:
            return <div className="game-over">X Wins</div>

        case GameState.playerOwins:
            return <div className="game-over">O Wins</div>

        case GameState.draw:
            return <div className="game-over">Draw</div>


        default:
            return <></>;
    }
}

export default GameOver
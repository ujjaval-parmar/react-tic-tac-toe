import { useEffect, useState } from 'react'
import Board from './Board'
import GameOver from './GameOver';
import GameState from '../GameState';
import Reset from './Reset';

import gameoverSoundAsset from '../sounds/game_over.wav';
import clickSoundAsset from '../sounds/click.wav';


const gameOverSound = new Audio(gameoverSoundAsset);
const clickSound = new Audio(clickSoundAsset);



const PLAYER_X = 'X';
const PLAYER_O = 'O';

const randPlayerTurn = (Math.random() > 0.5) ? PLAYER_X : PLAYER_O;


const winningCombinations = [
    // Rows
    { combo: [0,1,2], strikeClass: "strike-row-1" },
    { combo: [3,4,5], strikeClass: "strike-row-2" },
    { combo: [6,7,8], strikeClass: "strike-row-3" },
    // Columns
    { combo: [0,3,6], strikeClass: "strike-column-1" },
    { combo: [1,4,7], strikeClass: "strike-column-2" },
    { combo: [2,5,8], strikeClass: "strike-column-3" },
    // Diagonal:
    { combo: [0,4,8], strikeClass: "strike-diagonal-1" },
    { combo: [2,4,6], strikeClass: "strike-diagonal-2" }
];

const checkWinner = (tiles, setStrikeClass, setGameState )=>{
    for(const {combo, strikeClass} of winningCombinations){
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];

        if(
            tileValue1 &&
            tileValue1 === tileValue2 &&
            tileValue1 === tileValue3 
        ){
            
            setStrikeClass(()=>strikeClass);
            if(tileValue1===PLAYER_X){
                setGameState(GameState.playerXwins);
            }else if(tileValue1===PLAYER_O){
                setGameState(GameState.playerOwins);
            }
            return;
        }
    }

    const areAllTilesFilledIn = tiles.every((tile => tile !== null));

    if(areAllTilesFilledIn){
        setGameState(GameState.draw);
    }
}


const TicTacToe = () => {

    const [tiles, setTiles] = useState(Array(9).fill(null));


    

    const [playerTurn, setPlayerTurn] = useState(randPlayerTurn);

    const [strikeClass, setStrikeClass] = useState();

    const [gameState, setGameState] = useState(GameState.inProgress);


    useEffect(() => {
        
        checkWinner(tiles, setStrikeClass, setGameState);
       
    }, [tiles]);


    useEffect(()=>{
        if(tiles.some(tile=> tile!== null)){
            clickSound.play();
        }
    }, [tiles]);


    useEffect(()=>{
        if(gameState !== GameState.inProgress){
            gameOverSound.play();
        }
    }, [gameState])



    const handleTileClick = (index) => {

        if (tiles[index]) return;
        if(gameState!==GameState.inProgress) return;

        const newTiles = [...tiles];

        newTiles[index] = playerTurn;

        if (playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        } else {
            setPlayerTurn(PLAYER_X);
        }

        setTiles(() => newTiles);
    }

    const handleReset = ()=>{
        setTiles(Array(9).fill(null));
        setPlayerTurn(randPlayerTurn);
        setStrikeClass();
        setGameState(GameState.inProgress);
    }



    return (
        <div>
            <h1>Tic Tac Toe</h1>

            <Board
                tiles={tiles}
                playerTurn={playerTurn}
                onTileClick={handleTileClick}
                strikeClass={strikeClass}
            />

            <GameOver gameState={gameState}/>

            <Reset gameState={gameState} onReset={handleReset} />

        </div>
    )
}

export default TicTacToe
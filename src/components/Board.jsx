import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {

    
    return (
        <div className='board'>

            <Tile
                className='right-border bottom-border'
                value={tiles[0]}
                onClick={() => onTileClick(0)}
                playerTurn={playerTurn}
            />
            <Tile
                value={tiles[1]}
                className='right-border bottom-border'
                onClick={() => onTileClick(1)}
                playerTurn={playerTurn}
            />
            <Tile
                value={tiles[2]}
                className='bottom-border'
                onClick={() => onTileClick(2)}
                playerTurn={playerTurn}
            />
            <Tile
                value={tiles[3]}
                className='right-border bottom-border'
                onClick={() => onTileClick(3)}
                playerTurn={playerTurn}
            />
            <Tile
                value={tiles[4]}
                className='right-border bottom-border'
                onClick={() => onTileClick(4)}
                playerTurn={playerTurn}
            />
            <Tile
                value={tiles[5]}
                className='bottom-border'
                onClick={() => onTileClick(5)}
                playerTurn={playerTurn}
            />
            <Tile
                value={tiles[6]}
                className='right-border'
                onClick={() => onTileClick(6)}
                playerTurn={playerTurn}
            />
            <Tile
                value={tiles[7]}
                className='right-border'
                onClick={() => onTileClick(7)}
                playerTurn={playerTurn}
            />
            <Tile
                value={tiles[8]}
                className=''
                onClick={() => onTileClick(8)}
                playerTurn={playerTurn}
            />

            <Strike strikeClass={strikeClass } />

        </div>
    )
}

export default Board
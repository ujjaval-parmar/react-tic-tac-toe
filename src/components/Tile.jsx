import React from 'react'

const Tile = ({ className, value, onClick, playerTurn }) => {


    const hoverClass = (playerTurn && !value) && `${playerTurn.toLowerCase()}-hover`;

    return (
        <div
            className={`tile ${className} ${hoverClass} `}
            onClick={onClick}

        >{value}</div>
    )
}

export default Tile
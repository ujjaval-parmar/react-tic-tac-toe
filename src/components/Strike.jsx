import React from 'react'

const Strike = ({strikeClass}) => {
    // console.log(strikeClass);
  return (
    <div className={`strike ${strikeClass}`}></div>
  )
}

export default Strike
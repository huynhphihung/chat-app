import React from 'react'

const Cell = (porps) => {
  return (
    <div className='game-cell'>
      {props.value}
    </div>
  )
}

export default Cell
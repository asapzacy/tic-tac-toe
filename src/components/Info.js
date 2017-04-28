import React from 'react'

const Info = ({ player, isGameOver, winner, isGameDraw }) => (
  <section className='infoContainer'>
    { isGameOver
      ? <p>{`Player ${winner} won!`}</p>
      : isGameDraw
        ? <p>{'It\'s a draw!'}</p>
        : <p>{`Player ${player}'s turn`}</p>
    }
  </section>
)

export default Info

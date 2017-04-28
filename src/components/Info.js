import React from 'react'

const Info = ({ isPlayerX }) => (
  <section className='infoContainer'>
    <p>{`Player ${isPlayerX ? 'X' : 'O'}'s turn`}</p>
  </section>
)

export default Info

import React from 'react'
import SquareContainer from '../containers/SquareContainer' 

const Board = ({ board }) => (
  <section className='boardContainer'>
    <table className='board'>
      <tbody>
        { board.map((row, i) => <tr key={i}>{ row.map((el, i) => <SquareContainer key={i} />) }</tr>) }
      </tbody>
    </table>
  </section>
)

export default Board

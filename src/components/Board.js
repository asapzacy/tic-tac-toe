import React from 'react'
import Square from './Square'

const Board = ({ board }) => (
  <section className='boardContainer'>
    <table className='board'>
      <tbody>
        { board.map((row, i) => <tr key={i}>{ row.map((el, i) => <Square key={i} />) }</tr>) }
      </tbody>
    </table>
  </section>
)

export default Board

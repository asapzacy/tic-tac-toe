import React from 'react'

const Square = ({ value, row, col, clickSquare }) => (
  <td className='square' onClick={() => clickSquare(row, col)}>
    <span className='value'>{value}</span>
  </td>
)

export default Square

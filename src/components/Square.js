import React from 'react'

const Square = ({ clickSquare, value }) => (
  <td className='square' onClick={clickSquare}>
    <span className='value'>{value}</span>
  </td>
)

export default Square

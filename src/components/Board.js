import React from 'react'
import Square from './Square'

const Board = ({ board, clickSquare }) => (
  <section className='boardContainer'>
    <table className='board'>
      <tbody>
        {
          board.map((row, i) => (
            <tr key={i}>
              { row.map((el, j) => {
                return <Square
                        value={board[i][j]}
                        row={i}
                        col={j}
                        clickSquare={clickSquare}
                        key={j}
                      />
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  </section>
)

export default Board

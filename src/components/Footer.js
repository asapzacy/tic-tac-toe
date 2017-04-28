import React from 'react'

const Footer = ({ createNewGame }) => (
  <footer className='footerContainer'>
    <button className='button' onClick={createNewGame}>{'New Game'}</button>
  </footer>
)

export default Footer

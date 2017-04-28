import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Board from '../components/Board'
import Info from '../components/Info'
import '../styles/main.css'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      board: [],
      isPlayerX: true,
      isGameOver: false
    }
    this.createNewGame = this.createNewGame.bind(this)
    this.clickSquare = this.clickSquare.bind(this)
  }
  componentDidMount() {
    this.createNewGame(4)
  }
  createNewGame(size) {
    const blankBoard = [...Array(size).keys()].map(i => (Array(size).fill(null)))
    this.setState({ board: blankBoard })
  }
  clickSquare(i, j) {
    if (!this.state.board[i][j]) {
      const updatedBoard = [...this.state.board]
      updatedBoard[i][j] = this.state.isPlayerX ? 'X' : 'O'
      this.setState({
        board: updatedBoard,
        isPlayerX: !this.state.isPlayerX
      })
    }
  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <main className='mainContainer'>
          <Info {...this.state} />
          <Board clickSquare={this.clickSquare} {...this.state} />
        </main>
        <Footer createNewGame={this.createNewGame} />
      </div>
    )
  }
}

export default AppContainer

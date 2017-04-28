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
      player: '',
      isGameOver: false,
      winner: '',
      isGameDraw: false,
      gameWinners: []
    }
    this.createNewGame = this.createNewGame.bind(this)
    this.clickSquare = this.clickSquare.bind(this)
  }
  componentDidMount() {
    this.createNewGame(4)
  }
  createNewGame(size) {
    const blankBoard = [...Array(size).keys()].map(i => (Array(size).fill(null)))
    this.setState({
      board: blankBoard,
      player: 'X'
    }, () => this.findGameWinners())
  }
  findGameWinners() {
    const board = this.state.board
    const gameWinningSolutions = []
    const leftDiagonal = []
    const rightDiagonal = []
    for (let i = 0; i < board.length; i++) {
      const row = []
      const column = []
      leftDiagonal.push([i, i])
      rightDiagonal.push([i, board.length - 1 - i])
      for (let j = 0; j < board[i].length; j++) {
        row.push([i, j])
        column.push([j, i])
      }
      gameWinningSolutions.push(row, column)
    }
    gameWinningSolutions.push(leftDiagonal, rightDiagonal)
    this.setState({
      gameWinners: gameWinningSolutions
    })
  }
  clickSquare(i, j) {
    if (!this.state.board[i][j]) {
      const updatedBoard = [...this.state.board]
      updatedBoard[i][j] = this.state.isPlayerX ? 'X' : 'O'
      this.setState({
        board: updatedBoard,
        isPlayerX: !this.state.isPlayerX,
        player: this.state.player === 'X' ? 'O' : 'X'
      })
    }
    this.checkIfDraw()
    this.checkIfWinner()
  }
  checkIfDraw() {
    const board = this.state.board
    const isDraw = board.every(row => row.every(el => el))
    this.setState({ isGameDraw: isDraw })
  }
  checkIfWinner() {
    const arr = this.state.board
    let hasWon = false
    let winner
    for (let i = 0; i < arr.length; i++) {
      let row = arr[i]
      const X = row.every(el => el === 'X')
      const O = row.every(el => el === 'O')
      console.log(X, O)
      if (X || O) {
        hasWon = true
        winner = X ? 'X' : 'O'
      }
      if (!hasWon) {
        let bottom = true
        const check = arr[i][i]
        for (let j = 0; j < arr[i].length; j++) {
          const check = arr[i][j]

          if (i === j && arr[i] !== arr[j]) {
            console.log(i, j)
            break
          }
        }
      }
    }

    this.setState({
      isGameOver: hasWon,
      winner
    })
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

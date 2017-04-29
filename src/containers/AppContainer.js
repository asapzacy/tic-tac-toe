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
    this.createNewGame()
  }
  createNewGame(size = 3) {
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
    if (!this.state.board[i][j] && !this.state.isGameOver) {
      const updatedBoard = [...this.state.board]
      updatedBoard[i][j] = this.state.isPlayerX ? 'X' : 'O'
      this.setState({
        board: updatedBoard,
        isPlayerX: !this.state.isPlayerX,
        player: this.state.player === 'X' ? 'O' : 'X'
      })
    }
    this.checkIfDraw()
    this.checkIfWinner(this.state.player)
  }
  checkIfDraw() {
    const board = this.state.board
    const isDraw = board.every(row => row.every(el => el))
    this.setState({ isGameDraw: isDraw })
  }
  checkIfWinner(ch) {
    const board = this.state.board
    const gameWinners = this.state.gameWinners
    for (let i = 0; i < gameWinners.length; i++) {
      let hasWon = false
      let keepGoing = true
      for (let j = 0; j < gameWinners[i].length; j++) {
        if (keepGoing) {
          const [ row, col ] = gameWinners[i][j]
          const square = board[row][col]
          if (square !== ch) {
            keepGoing = false
          }
        }
      }
      if (keepGoing) {
        console.log(keepGoing)
        this.setState({
          isGameOver: true,
          winner: ch
        })
      }
    }

    const prime = (arr) => arr.map((row, i) => row[i])
    const alternate = (arr) => arr.map((row, i) => row[row.length - 1 - i])
    // console.log(prime(this.state.board))
    // console.log(alternate(this.state.board))
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

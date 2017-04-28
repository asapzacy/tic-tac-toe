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
      board: []
    }
    this.createNewGame = this.createNewGame.bind(this)
  }
  componentDidMount() {
    this.createNewGame()
  }
  createNewGame() {
    const blankBoard = [...Array(3).keys()].map(el => (new Array(3).fill(null)))
    this.setState({ board: blankBoard })
  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <main className='mainContainer'>
          <Info player={'one'} />
          <Board {...this.state} />
        </main>
        <Footer createNewGame={this.createNewGame} />
      </div>
    )
  }
}

export default AppContainer

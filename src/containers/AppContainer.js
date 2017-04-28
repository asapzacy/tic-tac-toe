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
      board: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ]
    }
    this.createNewGame = this.createNewGame.bind(this)
  }
  componentDidMount() {
    const copy = this.state.board
    copy[0].map(el => console.log(el))
  }
  createNewGame() {
    console.log('created')
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

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

    }
    this.createNewGame = this.createNewGame.bind(this)
  }
  componentDidMount() {

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
          <Board />
        </main>
        <Footer createNewGame={this.createNewGame} />
      </div>
    )
  }
}

export default AppContainer

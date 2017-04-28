import React, { Component } from 'react'
import Square from '../components/Square'

class SquareContainer extends Component {
  constructor() {
    super()
    this.state = {
      value: ' '
    }
    this.clickSquare = this.clickSquare.bind(this)
  }
  componentDidMount() {

  }
  clickSquare() {
    let value
    if (!this.state.value) {
      value = 'x'
    } else if (this.state.value === 'x') {
      value = 'o'
    } else {
      value = 'x'
    }
    this.setState({ value })
  }
  render() {
    return <Square clickSquare={this.clickSquare} {...this.state} />
  }
}

export default SquareContainer

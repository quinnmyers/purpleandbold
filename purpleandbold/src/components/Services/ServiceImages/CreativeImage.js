import React, { Component } from 'react'

//styles
import './creativeimage.sass'

class CreativeImage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  buildHex() {
    this.props.getColorFunction('this may be a hex')
  }
  render() {
    return <h2 onClick={this.buildHex.bind(this)}>creative image</h2>
  }
}

export default CreativeImage

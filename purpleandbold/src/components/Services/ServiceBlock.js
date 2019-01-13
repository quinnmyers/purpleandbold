import React, { Component } from 'react'

//components

class ServiceBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h2>service block</h2>
        {this.props.children}
      </div>
    )
  }
}

export default ServiceBlock

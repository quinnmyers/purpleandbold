import React, { Component } from 'react'
import PropTypes from 'prop-types'

//components

//styles
import './serviceblock.sass'

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
        {this.props.servicesList.map(s => (
          <div>
            <p>{s.name}</p>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    )
  }
}

ServiceBlock.propTypes = {
  name: PropTypes.string.isRequired,
  servicesList: PropTypes.array.isRequired,
}

export default ServiceBlock

import React, { Component } from 'react'
import PropTypes from 'prop-types'

//slide up slide down plugin
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

class ServiceListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  toggleSlide() {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div className="service__block__right__item">
        <h4 onClick={this.toggleSlide.bind(this)}>{this.props.name}</h4>
        <SlideDown>
          {this.state.open ? this.props.desc : null}
          {/* <p>{this.props.desc}</p> */}
        </SlideDown>
      </div>
    )
  }
}

ServiceListItem.proTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default ServiceListItem

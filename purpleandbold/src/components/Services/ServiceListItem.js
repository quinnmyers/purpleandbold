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
  componentDidUpdate() {
    this.title.style.color = this.props.hex
  }
  toggleSlide() {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div className="service__block__right__item">
        <h4 onClick={this.toggleSlide.bind(this)} ref={h4 => (this.title = h4)}>
          {this.props.name}
        </h4>
        <SlideDown>
          {this.state.open ? (
            <p dangerouslySetInnerHTML={{ __html: this.props.desc }} />
          ) : null}
          {/* <p>{this.props.desc}</p> */}
        </SlideDown>
      </div>
    )
  }
}

ServiceListItem.proTypes = {
  service: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
}

export default ServiceListItem

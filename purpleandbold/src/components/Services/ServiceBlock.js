import React, { Component } from 'react'
import PropTypes from 'prop-types'

//components
import ServiceListItem from './ServiceListItem'

//styles
import './serviceblock.sass'

class ServiceBlock extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="service__block">
        <div className="service__block__left">
          <h3 className="service__block__left__name">{this.props.name}</h3>
          <div className="service__block_left__image">
            {this.props.children}
          </div>
        </div>
        <div className="service__block__center" />
        <div className="service__block__right">
          {this.props.servicesList.map(s => (
            <ServiceListItem name={s.name} desc={s.desc} key={s.name} />
          ))}
        </div>
      </div>
    )
  }
}

ServiceBlock.propTypes = {
  name: PropTypes.string.isRequired,
  servicesList: PropTypes.array.isRequired,
}

export default ServiceBlock

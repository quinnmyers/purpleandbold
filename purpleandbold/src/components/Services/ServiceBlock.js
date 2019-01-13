import React, { Component } from 'react'
import PropTypes from 'prop-types'

//components
import ServiceListItem from './ServiceListItem'

//styles
import './serviceblock.sass'

class ServiceBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceName: '',
    }
  }
  componentDidMount() {
    this.setState({ serviceName: this.props.name })
  }
  //runs everytime the component updates
  componentDidUpdate() {
    //checks to see if the component is the Creative component, because that needs the HEX color
    //passed a prop to change the font color
    if (this.state.serviceName === 'Creative') {
      console.log(`from yours truly, the creative block ${this.props.hexColor}`)
    }
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
          {this.props.servicesList.map(s =>
            //passes a different instance of the ServiceListItem if the name is Creative, because
            //creative component needs the HEX codes to update the font color
            this.props.name === 'Creative' ? (
              <ServiceListItem
                service={this.state.serviceName}
                name={s.name}
                desc={s.desc}
                key={s.name}
                hex={this.props.hexColor}
              />
            ) : (
              <ServiceListItem name={s.name} desc={s.desc} key={s.name} />
            )
          )}
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

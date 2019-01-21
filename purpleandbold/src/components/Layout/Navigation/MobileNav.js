import React, { Component } from 'react'
import PropTypes from 'prop-types'

//slide up slide down plugin
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import './mobilenav.sass'

class MobileNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  collapseMobileNav() {}
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.mobileNavExpanded !== this.props.mobileNavExpanded) {
  //     this.setState({ open: this.props.mobileNavExpanded })
  //   }
  // }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.mobileNavExpanded !== prevState.mobileNavExpanded) {
      return { open: nextProps.mobileNavExpanded }
    } else return null
  }
  // componentDidUpdate() {
  //   this.setState({ open: this.props.mobileNavExpanded })
  // }
  render() {
    return (
      <div className="mobilenav__container">
        <SlideDown>
          {this.state.open
            ? this.props.navItems.map(n => (
                <div className="mobilenav__container__nav">
                  <a
                    className="mobilenav__item"
                    href={n.url}
                    key={n.name}
                    onClick={this.collapseMobileNav()}
                  >
                    {n.name}
                  </a>

                  {/* <AnchorLink 
                    className="mobilenav__item"
                    href={n.url}
                    key={n.name}
                    onClick={this.collapseMobileNav()}
                    href={n.url}
                    offset="70"
                    key={n.url}>
                      {n.name}
                  </AnchorLink> */}
                </div>
              ))
            : ''}
        </SlideDown>
      </div>
    )
  }
}

MobileNav.propTypes = {
  mobileNavExpanded: PropTypes.bool.isRequired,
  navItems: PropTypes.array.isRequired,
  // handleHamburgerClick: PropTypes.function.isRequired,
}

export default MobileNav

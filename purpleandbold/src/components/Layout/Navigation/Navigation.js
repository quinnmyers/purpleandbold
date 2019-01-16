import React, { Component } from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import brand from "../../../images/brand.svg"


//components
import Content from '../../utility/Content/Content'
// import MobileNav from './MobileNav'

//styles
import './navigation.sass'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileNavExpanded: false,
      focus: false,
      fixedNavClass: false,
      open: false,
      expandMobileNav: false,
      navItems: [
        {
          name: 'About',
          url: '#about',
          alt: 'link to about us section',
        },
        {
          name: 'Services',
          url: '#services',
          alt: 'link to services section',
        },
        {
          name: 'Portfolio',
          url: '#portfolio',
          alt: 'link to portfolio section',
        },
        {
          name: 'Contact',
          url: '#contact',
          alt: 'link to contact section',
        },
      ],
    }
  }

  handleHamburgerClick() {
    this.setState({
      mobileNavExpanded: !this.state.mobileNavExpanded,
    })
    const nav = this.navigation
    const navStyle = window.getComputedStyle(nav)
    const navHeight = navStyle.getPropertyValue('height')
    const navPadding = navStyle.getPropertyValue('padding')
    this.mobilenav.style.marginTop = `${navHeight}`
  }

  render() {
    return (
      <div id="nav" className="navigation" ref={div => (this.navigation = div)}>
        <Content>
          <nav>
            <div className="nav__container">
              <div className="nav__container__brand">
                <img
                  src={brand}
                  alt="purple and bold logo"
                />
              </div>
              <div className="nav__container__navigation">
                {this.state.navItems.map(n => (
                  <AnchorLink href={n.url} offset='70'>
                    {n.name}
                  </AnchorLink>
                ))}
              </div>
              <div className="nav__container__mobilenav">
                <button
                  aria-label="expand mobile navigation"
                  className="nav__container__mobilenav__hamburger"
                  onClick={this.handleHamburgerClick.bind(this)}
                >
                  <span className="nav__container__mobilenav__hamburger__line1" />
                  <span className="nav__container__mobilenav__hamburger__line2" />
                  <span className="nav__container__mobilenav__hamburger__line3" />
                </button>
                <div
                  className={`nav__container__mobilenav__container ${
                    this.state.mobileNavExpanded ? 'expanded' : ''
                    }`}
                  ref={div => (this.mobilenav = div)}
                >
                  {this.state.navItems.map(n => (
                    <a
                      className={`nav__container__mobilenav__container__item ${
                        this.state.mobileNavExpanded ? 'expanded' : ''
                        }`}
                      onClick={this.handleHamburgerClick.bind(this)}
                      href={n.url}
                    >
                      {n.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </Content>
      </div>
    )
  }
}

export default Navigation

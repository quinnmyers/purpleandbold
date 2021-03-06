import React, { Component } from 'react'

//components
import A from '../../utility/link/A'
import Content from '../../utility/Content/Content'
import ReactGA from 'react-ga'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

//images
// import brand from '../../../images/brand_purple.svg'
import brand from '../../../images/pb-logo.svg'

//styles
import './navigation.sass'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      textLoaded: false,
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
          name: 'Blog',
          url: 'blog',
          alt: 'link to blog',
        },
        {
          name: 'Contact',
          url: '#contact',
          alt: 'link to contact section',
        },
      ],
    }
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this)
  }
  componentDidMount() {
    this.loadElements()
  }
  loadElements() {
    this.setState({ loaded: true })
    setTimeout(() => {
      this.setState({ textLoaded: true })
    }, 500)
  }
  handleHamburgerClick() {
    // this.logEvent('Hamburger')
    this.setState({
      mobileNavExpanded: !this.state.mobileNavExpanded,
    })
    const nav = this.navigation
    const navStyle = window.getComputedStyle(nav)
    const navHeight = navStyle.getPropertyValue('height')
    this.mobilenav.style.marginTop = `${navHeight}`
  }
  handleMobileNavClick() {
    this.handleHamburgerClick()
    this.logNavEvent()
  }
  logNavEvent() {
    ReactGA.event({
      category: `Nav Click`,
      action: `User click on Navigation Link`,
    })
  }
  render() {
    return (
      <div
        id="nav"
        className={`navigation ${this.state.loaded ? 'loaded' : ''}`}
        ref={div => (this.navigation = div)}
      >
        <Content>
          <nav>
            <div className="nav__container">
              <div
                className={`nav__container__brand ${
                  this.state.textLoaded ? 'loaded' : ''
                  }`}
              >
                <A href={'#hero'} hasOnClick={false} aria-label="link to top of site">
                  <img src={brand} alt="purple and bold logo" />
                </A>
              </div>
              <div
                className={`nav__container__navigation ${
                  this.state.textLoaded ? 'loaded' : ''
                  }`}
              >
                {this.state.navItems.map(n => (
                  <A
                    href={n.url}
                    key={n.url}
                    // onClick={this.testFunction.bind(this)}
                    hasOnClick={true}
                    onClickDo={this.logNavEvent.bind(this)}
                  >
                    {n.name}
                  </A>
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
                    // <a
                    //   className={`nav__container__mobilenav__container__item ${
                    //     this.state.mobileNavExpanded ? 'expanded' : ''
                    //   }`}
                    //   onClick={this.handleHamburgerClick.bind(this)}
                    //   href={n.url}
                    //   key={n.url}
                    // >
                    //   {n.name}
                    // </a>
                    <A
                      className={`nav__container__mobilenav__container__item ${
                        this.state.mobileNavExpanded ? 'expanded' : ''
                        }`}
                      hasOnClick={true}
                      onClickDo={this.handleMobileNavClick.bind(this)}
                      href={n.url}
                      key={n.url}
                    >
                      {n.name}
                    </A>
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

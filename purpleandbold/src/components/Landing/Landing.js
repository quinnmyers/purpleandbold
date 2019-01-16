import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import AnchorLink from 'react-anchor-link-smooth-scroll'
//components
// import Section from '../utility/Section/Section'
import Content from '../utility/Content/Content'

// styles
import './landing.sass'

//images
import landingArrow from '../../images/arrow-icon.svg'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topLoaded: false,
      middleLoaded: false,
      leftMiddleLoaded: false,
      middleLeftSecondLoaded: false,
      rightMiddleLoaded: false,
      middleRightSecondLoaded: false,
      arrowLoaded: false,
      arrowLoadedAfter: false,
      scroll: false
    }
    this.linkTo = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    this.loadTopText()
    this.loadMiddleText()
    this.loadMiddleLeftText()
    this.loadMiddleRightText()
    this.loadArrow()
    window.addEventListener("scroll", this.handleScroll, true);
    window.addEventListener("touchmove", this.handleScroll, true);
  }
  handleScroll() {
    if (!this.state.scroll) {
      this.linkTo.current.click()
      this.setState({ scroll: true })
      window.removeEventListener("scroll", this.handleScroll, false)
    }
  }

  loadTopText() {
    this.setState({ topLoaded: true })
  }
  loadMiddleText() {
    setTimeout(() => {
      this.setState({ middleLoaded: true })
    }, 1500)
  }
  loadMiddleLeftText() {
    this.setState({ leftMiddleLoaded: true })
    setTimeout(() => {
      this.setState({ middleLeftSecondLoaded: true })
    }, 1500)
  }
  loadMiddleRightText() {
    setTimeout(() => {
      this.setState({ rightMiddleLoaded: true })
    }, 1500)
  }
  loadArrow() {
    setTimeout(() => {
      this.setState({ arrowLoaded: true })
    }, 1500)
    setTimeout(() => {
      this.setState({ arrowLoadedAfter: true })
    }, 3000)
  }

  render() {
    const { data } = this.props
    return (
      <div className="landing">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en" />
          <title>{"Purple and Bold The Top Digital Agency "}</title>
          <meta
            name="description"
            content={"A Las Vegas Web Development Creative, and Marketing Agency"}
          />
        </Helmet>
        <Content>
          <div className="landing__container">
            <div className="landing__container__content">
              <div
                className={`landing__container__content__top ${
                  this.state.topLoaded ? 'loaded' : ''
                  }`}
              >
                <h1 className={this.state.topLoaded ? 'loaded' : ''}>Purple</h1>
              </div>
              <div
                className={`landing__container__content__middle ${
                  this.state.middleLoaded ? 'loaded' : ''
                  }`}
              >
                <div
                  className={`landing__container__content__middle__left ${
                    this.state.leftMiddleLoaded ? 'loaded' : ''
                    } ${this.state.middleLeftSecondLoaded ? 'after-load' : ''}`}
                >
                  <h1>+</h1>
                </div>
                <div
                  className={`landing__container__content__middle__right ${
                    this.state.rightMiddleLoaded ? 'loaded' : ''
                    }`}
                >
                  <h1>Bold</h1>
                </div>
              </div >
              <AnchorLink href="#nav"
                aria-label="link to navigation bar"
              >
                <div ref={this.linkTo}
                  className={`landing__container__content__bottom ${
                    this.state.arrowLoaded ? 'loaded' : ''
                    } ${this.state.arrowLoadedAfter ? 'after-load' : ''}`}
                >

                  <img src={landingArrow} alt="" />


                </div>
              </AnchorLink>
            </div>
          </div>
        </Content>
        <script dangerouslySetInnerHTML={{
          __html:
            `new SmoothScroll('a[href*="#"]', {
                speed: 500,
                speedAsDuration: true
              })`
        }}>
        </script>
      </div>
    )
  }
}

export default Landing

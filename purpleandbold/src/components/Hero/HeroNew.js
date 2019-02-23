import React, { Component } from 'react'

//components
import Content from '../utility/Content/Content'
import Button from '../utility/Button/Button'
import Spacer from '../utility/Spacer/Spacer'

//images
import heroImg from '../../images/hero-img.svg'

//styles
import './heronew.sass'

class HeroNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstLoad: false,
    }
  }
  componentDidMount() {
    this.loadElements()
  }
  loadElements() {
    setTimeout(() => {
      this.setState({ firstLoad: true })
    }, 10)
  }
  render() {
    return (
      <div className="hero" id="hero">
        {/* <Spacer /> */}
        <Content>
          <div className="hero__container">
            <div className="hero__container__content">
              <div
                className={`hero__container__content__text  ${
                  this.state.firstLoad ? 'loaded' : ''
                }`}
              >
                <div className="hero__container__content__text__top">
                  <h2>
                    We’re a modern digital agency specializing in websites,
                    design, branding, and marketing.
                  </h2>
                </div>
                <div className="hero__container__content__text__bottom">
                  <h4>
                    Our goal is to be a one stop shop for business owners like
                    you who need help managing or starting the online side of
                    their business.
                  </h4>
                  <Button
                    section="#services"
                    text="See What We Can Do For You"
                    loadButton={this.state.firstLoad}
                    // loadButton={this.state.loadMonitor}
                  />
                </div>
              </div>
              <div
                className={`hero__container__content__image ${
                  this.state.firstLoad ? 'loaded' : ''
                }`}
              >
                <img
                  src={heroImg}
                  alt="Flat modern illustration of characters assembling a website"
                />
              </div>
            </div>
          </div>
        </Content>
        {/* <Spacer /> */}
      </div>
    )
  }
}

export default HeroNew

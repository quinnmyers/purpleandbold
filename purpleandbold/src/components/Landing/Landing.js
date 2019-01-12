import React, { Component } from 'react'

//components
// import Section from '../utility/Section/Section'
import Content from '../utility/Content/Content'

// import style from './landing.module.sass'
import './landing.sass'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topLoaded: false,
      middleLoaded: false,
      leftMiddleLoaded: false,
      rightMiddleLoaded: false,
      middleLeftSecondLoaded: false,
    }
  }
  componentDidMount() {
    this.loadTopText()
    this.loadMiddleText()
    this.loadMiddleLeftText()
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
    this.setState({ middleLeftLoaded: true })
    setTimeout(() => {
      this.setState({ middleLeftSecondLoaded: true })
    }, 1500)
  }
  render() {
    return (
      <div className="landing">
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
                    this.state.middleLeftLoaded ? 'loaded' : ''
                  } ${this.state.middleLeftSecondLoaded ? 'after-load' : ''}`}
                >
                  <h1>+</h1>
                </div>
                <div className="landing__container__content__bottom__right">
                  <h1>Bold</h1>
                </div>
              </div>
              <div className="landing__container__content__bottom" />
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default Landing

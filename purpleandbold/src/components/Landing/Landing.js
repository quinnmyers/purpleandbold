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
    }
  }
  componentDidMount() {
    this.loadTopText()
    this.loadMiddleText()
  }
  loadTopText() {
    setTimeout(() => {
      this.setState({ topLoaded: true })
    }, 5000)
  }
  loadMiddleText() {
    setTimeout(() => {
      this.setState({ middleLoaded: true })
    }, 3000)
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
                <h1>Purple</h1>
              </div>
              <div
                className={`landing__container__content__middle ${
                  this.state.middleLoaded ? 'loaded' : ''
                }`}
              >
                <div className="landing__container__content__middle__left">
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

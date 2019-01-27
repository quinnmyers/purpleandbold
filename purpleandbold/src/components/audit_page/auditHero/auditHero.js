import React, { Component } from 'react'
import Content from '../../utility/Content/Content'
import './audithero.sass'
import heroImg from '../../../images/audit_hero_image_v2.svg'
class AuditHero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    this.loadElements()
  }
  loadElements() {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 250)
  }
  render() {
    return (
      <div className="audit__hero">
        <Content>
          <div className="audit__hero__content">
            <div className="audit__hero__content__left">
              <h2 className={`${this.state.loaded ? 'loaded' : ''}`}>
                It’s Important to Understand What’s Going On With Your Business’
                Digital Presence and Strategy.
              </h2>
              <p className={`${this.state.loaded ? 'loaded' : ''}`}>
                Running a business is a lot of work. We want to take care of the
                digital side of things for you. Before we start anything, let’s
                see where your business is currently at, and what is or is not
                working for you.
              </p>
            </div>
            <div
              className={`audit__hero__content__right ${
                this.state.loaded ? 'loaded' : ''
              }`}
            >
              <img
                src={heroImg}
                alt="five pink and peach boxes layed out on a dark purple background from a isomectric view point"
              />
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default AuditHero

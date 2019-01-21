import React, { Component } from 'react'
import TestimonialsSlider from './TestimonialsSlider'
import Content from '../utility/Content/Content'
import './testimonials.sass'
import Controls from './Controls'

import Button from '../utility/Button/Button'

class Testimonials extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: true,
    }
    this.pauseSlider = this.pauseSlider.bind(this)
    this.playSlider = this.playSlider.bind(this)
  }
  pauseSlider() {
    this.setState({ playing: false })
  }

  playSlider() {
    this.setState({ playing: true })
  }
  render() {
    return (
      <section className="testimonials">
        <Content>
          <div className="testimonials__content">
            <div className="testimonials__content__container">
              <h2 className="section__header">Testimonials</h2>
              <div className="testimonials__content__container__middle">
                <TestimonialsSlider playing={this.state.playing} />
                <Controls
                  pause={this.pauseSlider}
                  play={this.playSlider}
                  isPlaying={this.state.playing}
                />
              </div>

              <div className="testimonials__content__container__cta">
                <h3>Need help with your &nbsp;</h3>
                <Button text="Contact Us Today" section="#contact" />
              </div>
            </div>
          </div>
        </Content>
      </section>
    )
  }
}

export default Testimonials

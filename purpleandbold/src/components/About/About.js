import React, { Component } from 'react'

//components
import Content from '../utility/Content/Content'
import Spacer from '../utility/Spacer/spacer'
import AboutAnimation from './AboutAnimation'

//styles
import './about.sass'

class About extends Component {
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
    }, 1000)
  }
  render() {
    return (
      <section className="about" id="about">
        <Content>
          <div className="about__container">
            <div className="about__container__animation">
              <AboutAnimation />
            </div>
            <div
              className={`about__container__content ${
                this.state.loaded ? 'loaded' : ''
                }`}
            >
              <h2 classname="section-header">Learn More About Us</h2>
              <p>
                At Purple and Bold, we provide custom-tailored digital solutions
                to businesses, offering personalized services and products as
                though we are an in-house team, and we obsess over the future
                success of our clients. We first focus on establishing a strong
                connection and understanding of our client's business and goals,
                with this we gain an advantage over our competition. We are able
                to create all aspects of a successful modern business from the
                ground up, with a website that converts, a striking and
                memorable logo, a brand that speaks to your audience, and a
                digital presence that drives leads. Our approach offers clients
                an immense advantage over their competition, allowing them to
                gain the benefits of an in-house development, design, and
                marketing team without the overhead.
              </p>
            </div>
          </div>
        </Content>
        {/* <Spacer /> */}
      </section>
    )
  }
}

export default About

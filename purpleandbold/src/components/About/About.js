import React, { Component } from 'react'

//compontents
import AboutPanels from './AboutPanles'
import Content from '../utility/Content/Content'

//styles
import style from './about.module.sass'

//images
import brand from '../../images/brand.svg'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isInView: false,
    }
    this.aboutBody = React.createRef()
    this.isInViewport = this.isInViewport.bind(this)
  }
  isInViewport(offset = 0) {
    if (!this.yourElement) return false
    const top = this.aboutBody.current.getBoundingClientRect().top
    return top + offset >= 0 && top - offset <= window.innerHeight
  }

  render() {
    return (
      <section className={style.aboutsection}>
        <div className={style.about} id="about">
          <Content>
            <div className={style.about__content__container}>
              <div className={style.about__content__container__left}>
                <AboutPanels inview={this.state.isInView} />
              </div>
              <div className={style.about__content__container__right}>
                <img
                  src={brand}
                  alt="Purple and Bold Logo"
                  className={style.about__content__container__right__image}
                />
                {/* <p>
                  Starting a business or building a brand can be overwhelming.
                  Why? So many steps must be taken before you can even start:
                  you need a logo, you need a website, you don’t even have a
                  name or brand, a business card is crucial, you also need to
                  show up on Google, where do you start? At Purple and Bold we
                  strive to be your partner and handle those tasks for you, the
                  right way, so you can focus on what really matters, your
                  business and life. We enjoy and obsess over the large and
                  small details of a business and brand and know that attention
                  to detail early on in the process of opening a business or
                  revamping one can make a dramatic difference later. Purple and
                  Bold’s goal is to provide everything our clients need to start
                  their next venture, or revamp one that needs a little
                  attention. We are committed to providing quality work, clear
                  and frequent communication, and delivering quality products on
                  time, after all, we want to do this for a long time, it’s what
                  we love.
                </p> */}
                <p>
                  At Purple and Bold, we provide custom-tailored digital
                  solutions to businesses, offering personalized services and
                  products as though we are an in-house team, and we obsess over
                  the future success of our clients. We first focus on
                  establishing a strong connection and understanding of our
                  client's business and goals, with this we gain an advantage
                  over our competition, we are able to create all aspects of a
                  successful modern business from the ground up, with a website
                  that converts, a striking and memorable logo, a brand that
                  speaks to your audience, and a digital presence that drives
                  leads. Our approach offers clients an immense advantage over
                  their competition, allowing them to gain the benefits of an
                  in-house development, design, and marketing team without the
                  overhead.
                </p>
              </div>
            </div>
          </Content>
        </div>
      </section>
    )
  }
}

export default About

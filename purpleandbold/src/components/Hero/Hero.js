import React from 'react'
import style from './hero.module.sass'
import heroMonitor from '../../images/hero-monitor-2.svg'

//components
import Content from '../utility/Content/Content'

class hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  //   <a
  //   href="#contact"
  //   v-smooth-scroll="{ duration: 1000, offset: -50}"
  // >
  //   <button>Get A Free Quote</button>
  // </a>
  render() {
    return (
      <div>
        <section className={style.hero} id="hero">
          <div className={style.hero__content}>
            <Content>
              <div className={style.hero__content__container}>
                <div className={style.hero__content__container__top}>
                  <h4>A modern solution to everything digital.</h4>
                </div>
                <div className={style.hero__content__container__bottom}>
                  <h4>
                    If you're starting something new, let's make sure it's not
                    already old.
                  </h4>
                  <a href="#contact">
                    <button class={style.hero__content__container__ctabutton}>
                      Get A Free Quote
                    </button>
                  </a>
                </div>
              </div>
            </Content>
          </div>
          <div className={style.hero__image__container}>
            <img
              src={heroMonitor}
              alt="Vector illustration of computer monitor"
            />
          </div>
        </section>
      </div>
    )
  }
}
export default hero

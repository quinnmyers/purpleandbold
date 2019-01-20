import React from 'react'
import style from './hero.module.sass'
import heroMonitor from '../../images/hero-monitor-2.svg'

//components
import Content from '../utility/Content/Content'
import Button from '../utility/Button/Button'

class hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

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
                  <Button section="#contact" text="Get A Free Quote" />
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

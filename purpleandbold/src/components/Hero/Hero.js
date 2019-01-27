import React from 'react'
import style from './hero.module.sass'
// import heroMonitor from '../../images/hero-monitor-2.svg'
import heroMonitor from '../../images/monitor_purple.svg'

//components
import Content from '../utility/Content/Content'
import Button from '../utility/Button/Button'

class hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loadMonitor: false,
    }
  }
  componentDidMount() {
    this.setState({ loadMonitor: true })
  }

  render() {
    return (
      <div>
        <section className={style.hero} id="hero">
          <div className={style.hero__content}>
            <Content>
              <div className={style.hero__content__container}>
                <div
                  className={`${style.hero__content__container__top} ${
                    this.state.loadMonitor ? `${style.loaded}` : ''
                  }`}
                >
                  <h4>A modern solution to everything digital.</h4>
                </div>
                <div className={style.hero__content__container__bottom}>
                  <h4
                    className={`${
                      this.state.loadMonitor ? `${style.loaded}` : ''
                    }`}
                  >
                    If you're starting something new, let's make sure it's not
                    already old.
                  </h4>
                  <Button
                    section="#contact"
                    text="Contact Us Today"
                    loadButton={this.state.loadMonitor}
                  />
                </div>
              </div>
            </Content>
          </div>
          <div className={style.hero__image__container}>
            <img
              className={`${this.state.loadMonitor ? `${style.loaded}` : ''}`}
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

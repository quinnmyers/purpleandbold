import React from 'react'
import style from './hero.module.sass'
import heroMonitor from "../../images/hero-monitor-2.svg"
class hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
      aboutSlides: [
        "creative agency",
        "web development firm",
        "branding company",
        "design agency"
      ],
      lineBreak: false
    }

  };

  render() {
    return (
      <div >
        <section className={style.hero} id="hero">
          <div className={style.hero__content}>
            <div className={style.hero__content__container}>
              <h3>A modern
                  </h3>
              <h3>
                If you're starting something new,
                let's make sure it's not already old.
                  </h3>
              <a href="#contact" >
                <button class={style.hero__content__container__ctabutton}>
                  Get A Free Quote</button>
              </a>
            </div>
          </div>
          <div className={style.hero__image__container}>
            <img src={heroMonitor} alt="Vector illustration of computer monitor" />
          </div>
        </section>
      </div>
    )

  }
}
export default hero
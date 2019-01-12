import React, { Component } from 'react'

//components
import Content from '../utility/Content/Content'

//styles
import style from './hero.module.sass'

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Content>
        <section className={style.hero}>
          <h2>this is the hero</h2>
        </section>
      </Content>
    )
  }
}

export default Hero

import React, { Component } from 'react'

//styles
import './marketingimage.sass'

class MarketingImage extends Component {
  // styleMarketingGraphs(index) {
  //   //sets minimum and maximum potential scale of graphs, closest to "1" for delta looks best I feel
  //   const minScaleDown = 0.94
  //   const maxScaleUp = 1.06
  //   //sets minimum and maximum translations of graphs
  //   const minTranslate = -3
  //   const maxTranslate = 3
  //   //gets random numbers based on min/max and sets attribute to that
  //   const scale = this.getRandomNumber(minScaleDown, maxScaleUp)
  //   const translate = this.getRandomNumber(minTranslate, maxTranslate)

  //   return {
  //     transform: `
  //                 translateY(${translate}px)`,
  //   }
  // }
  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
  }
  // rotateGraphs(flag) {
  //   const firstGraph = this.marketinggraphone
  //   const secondGraph = this.marketinggraphtwo
  //   if (flag) {
  //     firstGraph.classList.add('rotateNegative')
  //     secondGraph.classList.add('rotatePositive')
  //   } else {
  //     firstGraph.classList.remove('rotateNegative')
  //     secondGraph.classList.remove('rotatePositive')
  //   }
  // }
  changeFlag(flag) {
    if (!flag) {
      this.setState({ flag: true })
    } else {
      this.setState({ flag: false })
    }
    console.log(`from marketing image: ${this.state.flag}`)
  }
  constructor(props) {
    super(props)
    this.state = {
      brandingImages: [
        {
          src: require('../../../images/branding-graph-red.svg'),
          alt: 'line graph illustration animating size and position',
        },
        {
          src: require('../../../images/branding-graph-blue.svg'),
          alt: 'line graph illustration animating size and position',
        },
      ],
      flag: false,
    }
  }
  render() {
    return (
      <div
        class="marketing__container"
        onMouseOver={this.changeFlag.bind(this, 0)}
        onMouseLeave={this.changeFlag.bind(this, 1)}
      >
        <img
          src={this.state.brandingImages[0].src}
          alt={this.state.brandingImages[0].alt}
          class={`marketing__container--graph--0 ${
            this.state.flag ? 'rotatePositive' : ''
          }`}
          // style={this.styleMarketingGraphs(0)}
          ref={img => (this.firstgraph = img)}
        />
        <img
          src={this.state.brandingImages[1].src}
          alt={this.state.brandingImages[1].alt}
          class={`marketing__container--graph--1 ${
            this.state.flag ? 'rotateNegative' : ''
          }`}
          // style={this.styleMarketingGraphs(0)}
          ref={img => (this.secondgraph = img)}
        />
      </div>
    )
  }
}

export default MarketingImage

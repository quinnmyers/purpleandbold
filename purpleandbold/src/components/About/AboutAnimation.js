import React, { Component } from 'react'

//styles
import './aboutanimation.sass'

class AboutAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrowLoaded: false,
      arrowPulling: false,
      textLoaded: false,
    }
  }
  componentDidMount() {
    this.loadElements()
  }
  loadElements() {
    this.setState({ arrowLoaded: true })
    setTimeout(() => {
      this.setState({ textLoaded: true })
      this.setState({ arrowPulling: true })
    }, 1000)
  }
  render() {
    return (
      <div>
        <div
          className={`about__container__animation__top ${
            this.state.textLoaded ? 'loaded' : ''
          }`}
        >
          <h1>Purple</h1>
        </div>

        <div className={`about__container__animation__middle`}>
          <div
            className={`about__container__animation__middle__left ${
              this.state.arrowLoaded ? 'loaded' : ''
            } ${this.state.arrowPulling ? 'pulling' : ''}`}
          >
            <h1>+</h1>
          </div>

          <div
            className={`about__container__animation__middle__right ${
              this.state.textLoaded ? 'loaded' : ''
            }`}
          >
            <h1>Bold</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutAnimation

// import React, { Component } from 'react'

// //styles
// import './aboutanimation.sass'

// class AboutAnimation extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       topLoaded: false,
//       middleLoaded: false,
//       leftMiddleLoaded: false,
//       middleLeftSecondLoaded: false,
//       rightMiddleLoaded: false,
//       middleRightSecondLoaded: false,
//     }
//   }
//   componentDidMount() {
//     this.loadTopText()
//     this.loadMiddleText()
//     this.loadMiddleLeftText()
//     this.loadMiddleRightText()
//   }
//   loadTopText() {
//     this.setState({ topLoaded: true })
//   }
//   loadMiddleText() {
//     setTimeout(() => {
//       this.setState({ middleLoaded: true })
//     }, 1500)
//   }
//   loadMiddleLeftText() {
//     this.setState({ leftMiddleLoaded: true })
//     setTimeout(() => {
//       this.setState({ middleLeftSecondLoaded: true })
//     }, 1650)
//   }
//   loadMiddleRightText() {
//     setTimeout(() => {
//       this.setState({ rightMiddleLoaded: true })
//     }, 1500)
//   }
//   render() {
//     return (
//       <div>
//         <div
//           className={`about__container__animation__top ${
//             this.state.topLoaded ? 'loaded' : ''
//           }`}
//         >
//           <h1 className={this.state.topLoaded ? 'loaded' : ''}>Purple</h1>
//         </div>

//         <div
//           className={`about__container__animation__middle ${
//             this.state.middleLoaded ? 'loaded' : ''
//           }`}
//         >
//           <div
//             className={`about__container__animation__middle__left ${
//               this.state.leftMiddleLoaded ? 'loaded' : ''
//             } ${this.state.middleLeftSecondLoaded ? 'after-load' : ''}`}
//           >
//             <h1>+</h1>
//           </div>

//           <div
//             className={`about__container__animation__middle__right ${
//               this.state.rightMiddleLoaded ? 'loaded' : ''
//             }`}
//           >
//             <h1>Bold</h1>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default AboutAnimation

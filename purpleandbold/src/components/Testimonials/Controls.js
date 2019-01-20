import React, { Component } from 'react'
import style from './controls.module.sass'
import play from '../../images/icons/play.svg'
import playSelected from '../../images/icons/play-selected.svg'
import pause from '../../images/icons/pause.svg'
import pausSelected from '../../images/icons/pause-selected.svg'
class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playButton: {
        src: play,
        srcSelected: playSelected,
        alt: 'play symbol',
      },
      pauseButton: {
        src: pause,
        srcSelected: pausSelected,
        alt: 'pause symbol',
      },
    }
  }
  render() {
    return (
      <div className={style.testimonials__controls}>
        <div className={style.testimonials__controls__container}>
          <div className={style.testimonials__controls__container__play}>
            <button type="button" onClick={() => this.props.play()}>
              {this.props.isPlaying ? (
                <img
                  src={this.state.playButton.srcSelected}
                  alt={this.state.playButton.alt}
                />
              ) : (
                <img
                  src={this.state.playButton.src}
                  alt={this.state.playButton.alt}
                />
              )}
            </button>
          </div>
          <div className={style.testimonials__controls__container__pause}>
            <button type="button" onClick={() => this.props.pause()}>
              {!this.props.isPlaying ? (
                <img
                  src={this.state.pauseButton.srcSelected}
                  alt={this.state.pauseButton.alt}
                />
              ) : (
                <img
                  src={this.state.pauseButton.src}
                  alt={this.state.pauseButton.alt}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Controls

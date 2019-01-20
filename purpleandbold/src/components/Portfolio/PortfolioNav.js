import React, { Component } from 'react'
import style from './portfolionav.module.sass'
class PortfolioNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickedtags: [],
    }
    this.filter = this.filter.bind(this)
    this.picked = this.picked.bind(this)
    this.addClasses = this.addClasses.bind(this)
  }
  addClasses(name) {
    setTimeout(() => {
      if (this.state.pickedtags.includes(name)) {
        return true
      }
    }, 10)
  }

  filter(i) {
    const otherpicked = this.state.pickedtags
    const picked = this.props.list[i].name
    const isIn = otherpicked.indexOf(picked) === -1
    if (!isIn) {
      const ii = otherpicked.indexOf(picked)
      otherpicked.splice(ii, 1)
    } else {
      otherpicked.push(picked)
    }
    this.props.filter(this.state.pickedtags)
  }

  picked(i) {
    const ispicked = this.state.pickedtags.includes(this.props.list[i].name)
    if (ispicked) {
      return 'background: red'
    }
  }
  render() {
    return (
      <div className={style.wrapper}>
        {this.props.list.map((tag, index) => (
          <button
            id={tag.name}
            className={`${style.tags}
                     ${
                       this.state.pickedtags.includes(tag.name)
                         ? style.selected
                         : ''
                     } 
                 `}
            onClick={() => this.filter(index)}
            key={index}
          >
            {tag.name}
          </button>
        ))}
      </div>
    )
  }
}

export default PortfolioNav

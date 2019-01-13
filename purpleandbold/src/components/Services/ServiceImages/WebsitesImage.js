import React, { Component } from 'react'

//styles
import './websitesimage.sass'

//images
import codeBlock from '../../../images/websites-code-block.svg'

class WebsitesImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      textareaFocused: false,
    }
  }
  blockVisibility(bool) {
    this.setState({ textareaFocused: !this.state.textareaFocused })
    this.websitestextarea.value = ''
  }
  render() {
    return (
      <div className="websites">
        <div className="websites__container">
          <div className="websites__container__editor">
            <div className="websites__container__editor__top">
              <div className="websites__container__editor__top__nav">
                <div className="websites__container__editor__top__nav--red" />
                <div className="websites__container__editor__top__nav--yellow" />
                <div className="websites__container__editor__top__nav--green" />
              </div>
            </div>
            <div className="websites__container__editor__main">
              <div className="websites__container__editor__main__numbers">
                <ul className="websites__container__editor__main__numbers__list">
                  {this.state.numbers.map(n => (
                    <li
                      className="websites__container__editor__main__numbers__list__item"
                      key={n}
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <textarea
                name="editor__textarea"
                cols="30"
                rows="10"
                ref={textarea => (this.websitestextarea = textarea)}
                onFocus={this.blockVisibility.bind(this)}
                onBlur={this.blockVisibility.bind(this)}
              />
              <img
                className={`websites__container__editor__main--codeblock ${
                  this.state.textareaFocused ? 'isnotvisible' : ''
                }`}
                src={codeBlock}
                alt="code in a text editor"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WebsitesImage

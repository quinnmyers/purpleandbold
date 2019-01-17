import React, { Component } from 'react'

//styles
import './brandingimage.sass'

class BrandingImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftSwatch: {
        background: '#433F4C',
        hexBottom: '#433F4C',
        rgbBottom: 'rgb(67, 63, 76)',
      },
      leftSmallSwatches: [
        {
          background: '#5C5C60',
          rgb: 'rgb(92, 92, 96)',
        },
        {
          background: '#858F91',
          rgb: 'rgb(133, 143, 145)',
        },
        {
          background: '#BDBDBE',
          rgb: 'rgb(189, 189, 190)',
        },
        {
          background: '#E5E5E6',
          rgb: 'rgb(229, 229, 230)',
        },
      ],
      middleSwatch: {
        background: '#7CBDF1',
        hexBottom: '#7CBDF1',
        rgbBottom: 'rgb(124, 189, 241)',
      },
      brandingInput: '',
      inputValueArray: [],
      bigHeading: 'Big Heading',
      smallHeading: 'Heading',
      subheading: 'Subheading',
      bodyText: 'Body Text',
      caption: 'Caption',
      captionUppercase: 'UPPERCASE',
      label: 'Label',
      hyperlink: 'Hyperlink',
    }
  }
  //updates color of right swatch based on changed hex prop, allows for a default value
  //to be set by inline styles
  componentDidUpdate() {
    this.rightswatch.style.background = this.props.rightSwatchBackground
    //THIS IS BREAKING WHEN YOU CLICK A SMALL LEFT SWATCH FIRST, IT IS CHANGING THE BACKGROUND COLOR TO NULL
    //CHECK TO SEE IF NULL AND THEN SET TO THE BLUE IF SO
    this.props.getColorFunction()
  }
  componentWillReceiveProps() {
    this.setState({
      middleSwatch: {
        ...this.state.middleSwatch,
        rgbBottom: this.props.rightRgb,
        hexBottom: this.props.rightSwatchBackground.toUpperCase(),
      },
    })
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (
  //     nextProps.rightRgb != prevState.rgbBottom &&
  //     nextProps.rightRgb != 'hex'
  //   ) {
  //     return { rgbBottom: nextProps.rightRgb }
  //   } else return null
  // }
  updateSwatches(hex, rgb) {
    this.leftswatch.style.background = hex
    this.setState({
      leftSwatch: {
        ...this.state.leftSwatch,
        hexBottom: hex,
        rgbBottom: rgb,
      },
    })
  }
  render() {
    return (
      <div>
        <div className="branding__container">
          <div className="branding__container__left">
            <div
              className="branding__container__left__swatch"
              ref={div => (this.leftswatch = div)}
              style={{ background: this.state.leftSwatch.background }}
            >
              {this.state.leftSmallSwatches.map(s => (
                <div
                  className="branding__container__left__swatch--small"
                  style={{ background: s.background }}
                  key={s.background}
                  onClick={this.updateSwatches.bind(this, s.background, s.rgb)}
                />
              ))}
            </div>
            <div className="branding__container__left--hex">
              <p>{this.state.leftSwatch.hexBottom}</p>
            </div>
            <div className="branding__container__left--rgb">
              <p>{this.state.leftSwatch.rgbBottom}</p>
            </div>
          </div>
          <div className="branding__container__middle">
            <div
              className="branding__container__middle--swatch"
              ref={div => (this.rightswatch = div)}
              style={{ background: this.state.middleSwatch.background }}
            />
            <div className="branding__container__middle--hex">
              <p>{this.state.middleSwatch.hexBottom}</p>
            </div>
            <div className="branding__container__middle--rgb">
              <p>{this.state.middleSwatch.rgbBottom}</p>
            </div>
          </div>
          <div className="branding__container__right">
            <div className="branding__container__right__input__container">
              <label for="branding__input" className="visuallyhidden">
                here you can update all types of content in the mini branding
                section
              </label>
              <input
                id="branding__input"
                type="text"
                className="branding__container__right__input__container--field"
                ref="branding-input-field"
              />
            </div>
            <div className="branding__container__right--big-heading">
              <p>
                {this.state.brandingInput === ''
                  ? this.state.bigHeading
                  : this.state.brandingInput}
              </p>
            </div>
            <div className="branding__container__right--heading">
              <p>
                {this.state.brandingInput === ''
                  ? this.state.smallHeading
                  : this.state.brandingInput}
              </p>
            </div>
            <div
              className="branding__container__right--subheading"
              ref="subheading"
            >
              <p>
                {this.state.brandingInput === ''
                  ? this.state.subheading
                  : this.state.brandingInput}
              </p>
            </div>
            <div className="branding__container__right--bodytext">
              <p>
                {this.state.brandingInput === ''
                  ? this.state.bodyText
                  : this.state.brandingInput}
              </p>
            </div>
            <div className="branding__container__right--caption">
              <p>
                {this.state.brandingInput === ''
                  ? this.state.caption
                  : this.state.brandingInput}
              </p>
            </div>
            <div
              className="branding__container__right--hyperlink"
              ref="hyperlink"
            >
              <p>
                {this.state.brandingInput === ''
                  ? this.state.hyperlink
                  : this.state.brandingInput}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BrandingImage

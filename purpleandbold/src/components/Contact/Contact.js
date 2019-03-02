import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

//components
import Content from '../utility/Content/Content'
import 'rc-slider/assets/index.css'
import { Range } from 'rc-slider'
import Spacer from '../utility/Spacer/spacer'

//images
import x from '../../images/icons/x.svg'

//styles
import style from './contact.module.sass'
import './contactfade.sass'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      yourName: '',
      company: '',
      telephone: '',
      email: '',
      missed: '',
      tags: ['Website', 'Branding', 'Marketing'],
      customTag: '',
      pickedTags: [],
      priceMin: 1500,
      priceMax: 4000,
    }
    this.hiddenRef = React.createRef()
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.addTag = this.addTag.bind(this)
    this.addCustomTag = this.addCustomTag.bind(this)
    this.onSliderChange = this.onSliderChange.bind(this)
    this.pushHidden = this.pushHidden.bind(this)
    this.enterHandler = this.enterHandler.bind(this)
  }
  removeTag(i) {
    const tempTags = this.state.pickedTags

    tempTags.splice(i, 1)

    this.setState({ pickedTags: tempTags })
  }

  handleChange(event) {
    const stateName = event.target.name

    this.setState({ [stateName]: event.target.value })
  }

  addTag(i) {
    const tempTags = this.state.pickedTags
    tempTags.push(this.state.tags[i])
    this.setState({ pickedTags: tempTags })
  }

  // this is called when you enter a custom tag and it will add it to the message
  addCustomTag() {
    const tempTags = this.state.pickedTags
    tempTags.push(this.state.customTag)
    this.setState({
      pickedTags: tempTags,
      customTag: '',
    })
    this.pushHidden()
  }

  pushHidden() {
    this.hiddenRef.current.value = `${this.state.priceMin}- ${
      this.state.priceMax
      } ${this.state.pickedTags}`
  }

  onSliderChange(e) {
    this.setState({
      priceMin: e[0],
      priceMax: e[1],
    })
    this.pushHidden()
  }
  enterHandler(event) {
    if (event.key === 'Enter') {
      event.preventDefault() // Let's stop this event.
      event.stopPropagation() // Really this time.
      this.addCustomTag()
    }
  }
  render() {
    return (
      <section id="contact" className={style.section}>
        <Content>
          <div className={style.contact}>
            <Spacer />
            <div className={style.Contact__title}>
              <h2 className={style.section__header}>Contact Us</h2>
            </div>
            <form
              method="POST"
              action="https://formfor.site/send/NHaVHQbTS1sWBB6v3Ekzg5kFe2RZmQ"
            >
              <div className={style.contact__body}>
                <div
                  className={`${style.flex__col} ${style.contact__body__left}`}
                >
                  <div
                    className={`${style.flex__col} ${style.transback} ${
                      style.contact__body__left__name
                      }`}
                  >
                    <label htmlFor="name">
                      {' '}
                      Name *
                      <input
                        required
                        name="yourName"
                        type="text"
                        onChange={this.handleChange}
                        id="name"
                        value={this.state.yourName}
                      />
                    </label>
                  </div>
                  <div
                    className={`${style.flex__col} ${style.transback} ${
                      style.contact__body__left__company
                      }`}
                  >
                    <label htmlFor="company">
                      {' '}
                      Company
                      <input
                        requiredtype="text"
                        name="company"
                        onChange={this.handleChange}
                        id="company"
                        value={this.state.company}
                      />
                    </label>
                  </div>
                  <div
                    className={`${style.flex__col} ${style.transback} ${
                      style.contact__body__left__telephone
                      }`}
                  >
                    <label htmlFor="Telephone">
                      {' '}
                      Telephone *
                      <input
                        required
                        requiredtype="text"
                        name="telephone"
                        onChange={this.handleChange}
                        id="Telephone"
                        value={this.state.telephone}
                      />
                    </label>
                  </div>
                  <div
                    className={`${style.flex__col} ${style.transback} ${
                      style.contact__body__left__email
                      }`}
                  >
                    <label htmlFor="email">
                      {' '}
                      Email *
                      <input
                        required
                        requiredtype="text"
                        name="email"
                        onChange={this.handleChange}
                        id="email"
                        value={this.state.email}
                      />
                    </label>
                  </div>
                  <div
                    className={`${style.flex__col} ${style.transback} ${
                      style.contact__body__left__details
                      }`}
                  >
                    <label>Project Details</label>
                    <div className={style.tag}>
                      {this.state.tags.map((tag, index) => (
                        <div
                          className={style.tag__bubbles}
                          onClick={() => this.addTag(index)}
                          key={index}
                        >
                          <p>{tag.toLowerCase()}</p>
                        </div>
                      ))}
                      <label htmlFor="custom__tag" className="visuallyhidden">
                        enter custom tags for what your looking for help with
                      </label>
                      <input
                        onKeyDown={this.enterHandler}
                        id="custom__tag"
                        type="text"
                        placeholder="Enter Your Own"
                        onChange={this.handleChange}
                        name="customTag"
                        value={this.state.customTag}
                      />
                      <button onClick={() => this.addCustomTag()} type="button">
                        {' '}
                        +
                      </button>
                    </div>
                    <h4>Budget</h4>
                    <div>
                      <p>
                        ${this.state.priceMin.toLocaleString()} - $
                        {this.state.priceMax.toLocaleString()}{' '}
                      </p>

                      <Range
                        min={900}
                        max={10000}
                        step={100}
                        defaultValue={[1500, 4000]}
                        onChange={this.onSliderChange}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${style.flex__col} ${style.contact__body__right}`}
                >
                  <div
                    className={`${style.flex__col} ${
                      style.contact__body__right__compose
                      }`}
                  >
                    <p>
                      Hello. My name is{' '}
                      <span className={style.contact__body__right__ul}>
                        {this.state.yourName}
                      </span>{' '}
                      from{' '}
                      <span className={style.contact__body__right__ul}>
                        {this.state.company}
                      </span>{' '}
                      and I need:{' '}
                    </p>

                    <TransitionGroup className={style.tag}>
                      {this.state.pickedTags.map((tag, index) => (
                        <CSSTransition
                          key={index}
                          timeout={500}
                          classNames="tag__fade"
                        >
                          <div
                            className={style.tag__bubbles}
                            onClick={() => this.removeTag(index)}
                          >
                            <p>{tag.toLowerCase()}</p>
                            <button
                              type="button"
                              className={style.tag__bubbles__del}
                            >
                              <img src={x} alt="icon of letter X" />
                            </button>
                          </div>
                        </CSSTransition>
                      ))}
                    </TransitionGroup>

                    <p className={style.pb}>
                      {' '}
                      You can reach me by phone at{' '}
                      <span className={style.contact__body__right__ul}>
                        {' '}
                        {this.state.telephone}{' '}
                      </span>{' '}
                      or{' '}
                      <span className={style.contact__body__right__span}>
                        <br />
                      </span>{' '}
                      at my email{' '}
                      <span className={style.contact__body__right__ul}>
                        {this.state.email}
                      </span>
                    </p>
                    <p className={style.pb}>
                      I am looking to spend between{' '}
                      <span className={style.contact__body__right__ul}>
                        {' '}
                        ${this.state.priceMin.toLocaleString()}{' '}
                      </span>{' '}
                      and{' '}
                      <span className={style.contact__body__right__ul}>
                        {' '}
                        ${this.state.priceMax.toLocaleString()}{' '}
                      </span>{' '}
                      .
                    </p>
                  </div>

                  <div
                    className={`${style.flex__col} ${style.transback} ${
                      style.contact__body__right__missed
                      }`}
                  >
                    <label htmlFor="missed">Did We Miss Anything?</label>
                    <textarea name="missed" id="missed" name="missed" />
                  </div>
                </div>
              </div>
              <textarea
                name="message"
                id="contact__send__message"
                className={style.real_message}
                ref={this.hiddenRef}
                cols="3"
                rows="1"
              />
              <input
                type="submit"
                ref="submit"
                value="Send Message"
                className={style.send}
              />
              <h4 className={style.phone}>
                Or Call Us At: <a href="tel:702-577-0322">702-577-0322</a>
              </h4>
            </form>
            <Spacer />
          </div>
        </Content>
      </section>
    )
  }
}

export default Contact

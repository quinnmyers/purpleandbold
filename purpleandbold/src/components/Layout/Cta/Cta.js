import React, { Component } from 'react'
import './cta.sass'
import { redirectTo } from '@reach/router'

//components
import Content from '../../utility/Content/Content'
import AnchorLink from 'react-anchor-link-smooth-scroll'

//images
import plusIcon from '../../../images/plus-icon.svg'

class Cta extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollShow: false,
      firsedopend: false,
      canShow: false,
      toShow: false,
      open: false,
      collapse: false,
      textVisible: true,
    }
    // this.close = this.close.bind(this)
    // this.open = this.open.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll')
  }
  static getDerivedStateFromProps(props, state) {
    if (props.didScroll) {
      return { canShow: true }
    }
  }

  componentDidUpdate(nextProps, nextState, snap) {
    if (!nextProps.didScroll) {
      if (this.state.firsedopend === false) {
        this.toggleOpen()
      }
    }
  }

  toggleOpen() {
    setTimeout(() => {
      this.setState({ open: true })
    }, 500)
  }

  toggleModal() {
    if (this.state.collapse) {
      setTimeout(() => {
        this.setState({ collapse: false })
      }, 100)
      setTimeout(() => {
        this.setState({ textVisible: true })
      }, 400)
    } else {
      setTimeout(() => {
        this.setState({ textVisible: false })
      }, 100)
      setTimeout(() => {
        this.setState({ collapse: true })
      }, 400)
    }
    // this.setState({ collapse: !this.state.collapse })
    console.log(this.state.collapse)
  }
  scrollHandler() {
    if (window.scrollY <= window.innerHeight) {
      this.setState({ scrollShow: false })
    } else {
      this.setState({ scrollShow: true })
    }
  }

  render() {
    return (
      <div
        className={`cta ${this.state.open ? 'open' : ' '}
        ${this.state.scrollShow ? 'cta__ult__open' : 'cta__ult__closed'} 
                        ${this.props.didScroll ? 'cta__showing' : 'cta__gone'}
                        ${this.state.collapse ? 'collapsed' : 'expanded'}`}
      >
        <Content>
          <div className={`cta__content`}>
            {/* this is the main body for content this is hiddedn when closed  */}

            <div
              className={`cta__content__left ${
                this.state.textVisible ? 'visible' : ''
                }`}
            >
              <div className="cta__content__left__header">
                <h4>
                  Learn how your website and digital presence can be improved.
                </h4>
                {/* <p>Current Audit Turnaround 1-2 Days</p> */}
              </div>
              <div className="cta__content__left__content">
                <p>
                  We'll send you simple instructions on how to get a free audit
                  of your current website with suggestions for improvements.
                </p>
              </div>
            </div>
            <div
              className={`cta__content__right ${
                this.state.textVisible ? 'visible' : ''
                }`}
            >
              <div className="cta__content__right__signup">
                {/* Begin Mailchimp Signup Form */}
                <div id="mc_embed_signup">
                  <form
                    action="https://purpleandbold.us19.list-manage.com/subscribe/post?u=7148d992c4429b31c494c4eba&id=a0bf264bc7"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <div className="mc-field-group">
                        <label for="mce-EMAIL" className="visuallyhidden">
                          Email Sign up
              </label>
                        <input

                          type="email"
                          placeholder="email"
                          name="EMAIL"
                          className="required email"
                          id="mce-EMAIL"
                        />
                      </div>
                      <div id="mce-responses" className="clear">
                        <div
                          className="response"
                          id="mce-error-response"
                          style={{ display: 'none' }}
                        />
                        <div
                          className="response"
                          id="mce-success-response"
                          style={{ display: 'none' }}
                        />
                      </div>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div
                        style={{ position: 'absolute', left: '-5000px' }}
                        aria-hidden="true"
                      >
                        <input

                          type="text"
                          name="b_7148d992c4429b31c494c4eba_a0bf264bc7"
                          tabIndex={-1}
                          defaultValue
                        />
                      </div>
                      <div className="clear">
                        <input
                          type="submit"
                          value="Subscribe"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="button"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/*End mc_embed_signup*/}
              </div>
              <p>
                Don't have a website?{' '}
                <AnchorLink href="#contact" offset="70">
                  Contact Us
                </AnchorLink>{' '}
                for a phone call.
              </p>
            </div>

            {/* main body ends here */}
          </div>
        </Content>
        <button
          aria-label="close email sign up form"
          onClick={this.toggleModal}
          className={this.state.textVisible ? '' : 'expanded'}
        >
          <img src={plusIcon} alt="" />
        </button>

        {/* <div className="cta__content__arrow">
                  this is showen when open and hidden when closed
                  <button>
                      get a arrow to bounce over here for the sexs
              </button>
              </div> */}
        {/* <div
          className={`${
            this.state.open ? 'cta__close__open' : 'cta__close__closed'
          }`}
        >
          <button onClick={this.close} />
        </div> */}
      </div>
    )
  }
}

export default Cta

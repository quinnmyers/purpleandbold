import React, { Component } from 'react'

//components
import Content from '../../utility/Content/Content'
import Form from './form/form'
import Button from '../../utility/Button/Button'
import Spacer from '../../utility/Spacer/spacer'

//styles
import './auditcopy.sass'

class AuditCopy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSent: false,
      loaded: false,
    }
  }
  componentDidMount() {
    if (window.location.href.slice(-10) === '#submitted') {
      this.setState({ isSent: true })
    }
    this.loadElements()
  }
  loadElements() {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 200)
  }
  render() {
    return (
      <div>
        <Spacer />
        <Content>
          <div className={`audit ${this.state.loaded ? 'loaded' : ''}`}>
            <div className="audit__subheadding audit__content">
              <h3>Request for Audit of Digital Presence and Strategy</h3>
              <p>
                Purple and Bold offers free and personalized audits (reports) of
                your business’ online digital strategy and presence. These
                reports offer information and suggestions that are critical to
                the success of all modern businesses.
              </p>
            </div>
            <div className="audit__how audit__content">
              <h4>How Does All This Work?</h4>
              <p>
                We’ll research your business, do a deep dive into your current
                presence and strategy, then do the same for a few of your
                competitors. Within 1-3 business days we will email you a PDF of
                our finding along with a list of suggestions to improve your
                digital strategy. If you’re open to making some of those
                improvements, we will send you a formal proposal for the work
                shortly after. If we work together, great, if not, consider what
                we give you to be a “to-do” list. Please allow 1-3 business days
                for these reports to actually get to you. Our audits are not
                automatically generated and the research takes time.
              </p>
            </div>
            <div className="audit__form">
              <h4>
                In order to do our research and generate these reports, we need
                a bit of information from you:
              </h4>
              <Form />
            </div>
            <div
              className={
                this.state.isSent ? 'audit__form__sent' : 'audit__form__not'
              }
            >
              <p>
                Thank you for your submission. You can expect your audit to be
                delivered in 1-3 business days.
              </p>
            </div>
            <Button section="/" text="Visit Homepage" loadButton="true" />
          </div>
        </Content>
      </div>
    )
  }
}

export default AuditCopy

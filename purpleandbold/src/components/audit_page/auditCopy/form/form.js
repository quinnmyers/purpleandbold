import React, { Component } from 'react'
import './form.sass'
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="form">
                <form
                    method="POST"
                    action="https://formfor.site/send/nHLl9Gl7zttcbnyXbjDB4WGA2Hxzxq"
                >
                    <div className="form__small">
                        <label htmlFor="form__first">First Name</label>
                        <input type="text" name="first" id="form__first" />
                    </div>

                    <div className="form__small">
                        <label htmlFor="form__last">Last Name</label>
                        <input type="text" name="last" id="form__last" />
                    </div>

                    <div className="form__small">
                        <label htmlFor="form__business">Name of Business</label>
                        <input type="text" name="business" id="form__business" />
                    </div>

                    <div className="form__small">
                        <label htmlFor="form__phone">Phone Number</label>
                        <input type="text" name="phone" id="form__phone" />
                    </div>

                    <div className="form__small">
                        <label htmlFor="form__website">Business Website URL</label>
                        <input type="text" name="website" id="form__website" />
                    </div>

                    <div className="form__small">
                        <label htmlFor="form__email">Email To Deliver Audit</label>
                        <input type="email" name="email" id="form__email" />
                    </div>
                    <div className="form__large">
                        <label htmlFor="form__goals">
                            Tell Us A Bit About Your Business and Goals
            </label>
                        <textarea name="goals" id="form__goals" cols="30" rows="10" />
                    </div>
                    <div className="button__container">
                        <input
                            type="hidden"
                            name="_success"
                            value="https://purpleandbold.com/request-audit/#submitted"
                        />
                        <button type="submit">Submit Your Request</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form

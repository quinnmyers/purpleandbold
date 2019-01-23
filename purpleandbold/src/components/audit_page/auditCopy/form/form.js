import React, { Component } from 'react';
import "./form.sass"
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="form">
            <form
                method="POST"
                action="https://formfor.site/send/nHLl9Gl7zttcbnyXbjDB4WGA2Hxzxq"
            >
                <div className="form__small">
                    <label htmlFor="form__first">Your First Name</label>
                    <input type="text" name="first" id="form__first" />
                </div>

                <div className="form__small">
                    <label htmlFor="form_last">Your Last Name</label>
                    <input type="text" name="last" id="form__last" />
                </div>

                <div className="form__small">
                    <label htmlFor="form_business">Name of Your Business</label>
                    <input type="text" name="business" id="form__business" />
                </div>

                <div className="form__small">
                    <label htmlFor="form_phone">Your Phone Number</label>
                    <input type="text" name="phone" id="form__phone" />
                </div>

                <div className="form__small">
                    <label htmlFor="form_website">Your Website URL</label>
                    <input type="text" name="website" id="form__website" />
                </div>

                <div className="form__small">
                    <label htmlFor="form__email">Email To Deliver Audit</label>
                    <input type="email" name="email" id="form__email" />
                </div>
                <div className="form__large">
                    <label htmlFor="form__goals">Tell Us A Bit About Your Business and Goals</label>
                    <textarea name="goals" id="form__goals" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>);
    }
}

export default Form;
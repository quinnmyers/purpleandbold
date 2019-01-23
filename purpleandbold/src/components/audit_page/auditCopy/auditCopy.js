import React, { Component } from 'react';
import Content from "../../utility/Content/Content"
import Form from "./form/form"
import "./auditcopy.sass"

class AuditCopy extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Content><div className="audit">
                <div className="audit__subheadding audit__content">
                    <h3>
                        Request for Audit of Digital Presence and Strategy
                    </h3>
                    <p>
                        Purple and Bold offers free and personalized audits (reports) of your business’ online digital strategy and presence. These reports offer information and suggestions that are critical to the success of all modern businesses.
                    </p>
                </div>
                <div className="audit__how audit__content">
                    <h4>How Does All This Work?</h4>
                    <p>We’ll research your business, do a deep dive into your current presense and strategy, then do the same for a few of your competitors, in 1-3 business days we will email you a PDF of our finding along with a list of suggestions to improve your digital strategy. If you’re open to making some of those improvements, we will send you a formal proposal for the work shortly after. If we work together, great, if not, consider what we give you to be a “to-do” list. Please allow 1-3 business days for these reports to actually get to you. These aren’t automatically generated and the research takes time.</p>
                </div>
                <div className="audit__form">
                    <h5>

                        In order to do our research and generate these reports, we need a bit of information from you:
                </h5>
                    <Form></Form>
                </div>
            </div>
            </Content>

        );
    }
}

export default AuditCopy;
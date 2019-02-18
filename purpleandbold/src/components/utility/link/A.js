import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: false,
            homePath: ""
        }

    }
    componentDidMount() {
        // console.log(window.location);

        if (window.location.pathname === "/") {
            this.setState({ isHome: true })
        }
        this.setState({ homePath: window.location.origin })
        console.log("firstcar", this.props.href.charAt(0) === "#", "href", this.props.href);


    }
    render() {
        return (
            this.state.isHome && this.props.href.charAt(0) === "#" ?
                (<AnchorLink className={this.props.className} onClick={() => this.props.hasOnClick ? this.props.onClickDo() : ""} href={this.props.href} offset="70">{this.props.children}</AnchorLink>)
                :
                (<a onClick={() => this.props.hasOnClick ? this.props.onClickDo() : ""} href={`${this.state.homePath}/${this.props.href}`} className={this.props.className}>{this.props.children}</a>)

        );
    }
}

export default A;
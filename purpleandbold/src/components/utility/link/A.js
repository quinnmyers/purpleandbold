import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "gatsby"
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


    }
    render() {
        return (
            this.state.isHome && this.props.href.charAt(0) === "#" ?
                (<AnchorLink className={this.props.className} onClick={() => this.props.hasOnClick ? this.props.onClickDo() : ""} href={this.props.href} offset="70">{this.props.children}</AnchorLink>)
                :
                (<Link onClick={() => this.props.hasOnClick ? this.props.onClickDo() : ""} to={this.props.href.charAt(0) === "#" ? "/" : `/${this.props.href}`} state={{ toID: this.props.href }} className={this.props.className}>{this.props.children}</Link>)

        );
    }
}

export default A;

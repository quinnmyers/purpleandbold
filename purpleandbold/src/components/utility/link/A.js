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

    }
    render() {
        return (
            this.state.isHome ?
                (<AnchorLink className={this.props.className} href={this.props.href} offset="70">{this.props.children}</AnchorLink>)
                :
                (<a href={`${this.state.homePath}/${this.props.href}`} className={this.props.className}>{this.props.children}</a>)

        );
    }
}

export default A;
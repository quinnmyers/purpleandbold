import React, { Component } from 'react'
import { Link } from 'gatsby'
//components
import Content from '../../utility/Content/Content'

//styles
import './navigation.sass'


class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        {
          name: 'About',
          url: '#about',
          alt: 'link to about us section',
        },
        {
          name: 'Services',
          url: '#services',
          alt: 'link to services section',
        },
        {
          name: 'Portfolio',
          url: '#portfolio',
          alt: 'link to portfolio section',
        },
        {
          name: 'Contact',
          url: '#contact',
          alt: 'link to contact section',
        },
      ],
    }
  }
  render() {
    return (
      <div className="navigation">
        <Content>
          <nav>
            <div className="nav__container">
              <div className="nav__container__brand">
                {/* <h2>Purple + Bold</h2> */}
                <img
                  src="http://placehold.it/328x56"
                  alt="purple and bold logo"
                />
              </div>
              <div className="nav__container__navigation">
                {this.state.navItems.map(n => (
                  <a data-scroll href={n.url}>{n.name}</a>
                ))}
              </div>
            </div>
          </nav>
        </Content>
      </div>
    )
  }
}

export default Navigation

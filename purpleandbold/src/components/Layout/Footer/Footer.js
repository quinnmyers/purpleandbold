import React, { Component } from 'react'

//components
import Content from '../../utility/Content/Content'
import A from '../../utility/link/A'

//styles
import './footer.sass'

//images
import brand from '../../../images/pb-logo.svg'
import twitterIcon from '../../../images/icons/twitter-icon-blog.svg'
import facebookIcon from '../../../images/icons/facebook-icon-blog.svg'
import instagramIcon from '../../../images/icons/instagram-icon-blog.svg'
import linkedinIcon from '../../../images/icons/linkedin-icon-blog.svg'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: '',
      socialItems: [
        {
          name: 'facebook',
          url: 'facebook.com',
        },
        {
          name: 'instagram',
          url: 'instagram.com',
        },
        {
          name: 'twitter',
          url: 'twitter.com',
        },
        {
          name: 'linkedin',
          url: 'linkedin.com',
        },
      ],
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
          name: 'Blog',
          url: 'blog',
          alt: 'link to blog',
        },
        {
          name: 'Contact',
          url: '#contact',
          alt: 'link to contact section',
        },
      ],
    }
  }
  componentDidMount() {
    const d = new Date()
    const fullYear = d.getFullYear()
    this.setState({ year: fullYear })
  }
  render() {
    return (
      <div className={`footer`}>
        <Content>
          <div className="footer__container">
            <div className={`footer__container__left`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.
              </p>
              <div className="footer__container__left__social">
                <a href="//facebook.com" target="__blank">
                  <img src={facebookIcon} alt="facebook icon" />
                </a>
                <a href="//instagram.com" target="__blank">
                  <img src={instagramIcon} alt="instagram icon" />
                </a>
                <a href="//twitter.com" target="__blank">
                  <img src={twitterIcon} alt="twitter icon" />
                </a>
                <a href="//linkedin.com" target="__blank">
                  <img src={linkedinIcon} alt="linkedin icon" />
                </a>
              </div>
              {/* <ul className={`mobile__nav`}>
                {this.state.navItems.map((l, index) => (
                  <li key={index}>
                    <A
                      href={l.url}
                      // onClick={this.testFunction.bind(this)}
                      // hasOnClick={true}
                    >
                      {l.name}
                    </A>
                  </li>
                ))}
              </ul> */}
            </div>
            <div className={`footer__container__center`}>
              <img src={brand} alt="Purple and Bold Logo" />
              <span>
                Copyright &copy; {this.state.year} Myers Consulting LLC, dba
                Purple and Bold
              </span>
            </div>
            <div className={`footer__container__right`}>
              <ul>
                {this.state.navItems.map((l, index) => (
                  <li key={index}>
                    <A
                      href={l.url}
                    // onClick={this.testFunction.bind(this)}
                    // hasOnClick={true}
                    >
                      {l.name}
                    </A>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default Footer

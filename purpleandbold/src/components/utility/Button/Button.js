import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { Link } from "gatsby"

//components
import AnchorLink from 'react-anchor-link-smooth-scroll'

//styles
import './button.sass'

//section must be in ID format, like "#contact" for Contact Section
//text is inner text of button
const Button = ({ section, text, loadButton, noscroll }) => (
  <div className={`button ${loadButton ? 'loaded' : ''}`}>
    {noscroll ? (<Link to={section}>
      <div className={`spacer ${loadButton ? 'loaded' : ''}`}>{text}</div>
    </Link>) : (
        <AnchorLink href={section} offset="70">
          <div className={`spacer ${loadButton ? 'loaded' : ''}`}>{text}</div>
        </AnchorLink>
      )}

  </div>
)

Button.propTypes = {
  section: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button

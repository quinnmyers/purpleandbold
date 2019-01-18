import React from 'react'
import PropTypes from 'prop-types'

//components
import AnchorLink from 'react-anchor-link-smooth-scroll'

//styles
import './button.sass'

//section must be in ID format, like "#contact" for Contact Section
//text is inner text of button
const Button = ({ section, text }) => (
  <div className="button">
    <AnchorLink href={section} offset="70">
      {text}
    </AnchorLink>
  </div>
)

Button.propTypes = {
  section: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button

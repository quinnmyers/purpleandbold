import React from 'react'
import PropTypes from 'prop-types'

//styles
import './textblock.sass'

const TextBlock = ({ header, text }) => (
  <div className={`text-block`}>
    <h2>{header}</h2>
    <p>{text}</p>
  </div>
)

TextBlock.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default TextBlock

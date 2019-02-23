import React from 'react'
import PropTypes from 'prop-types'

//styles
import './textblock.sass'

const TextBlock = ({ header, text, loaded }) => (
  <div className={`text-block ${loaded ? 'loaded' : ''}`}>
    <h2>{header}</h2>
    <p> {text}</p>
  </div>
)

TextBlock.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
}

export default TextBlock

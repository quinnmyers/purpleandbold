import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"


//styles
import './posthero.sass'

const PostHero = ({ img, title, desc, author, date }) => (
  <div className="posthero">
    <div className="posthero__info">
      <div className="posthero__info__top">
        <h2>{title}</h2>
      </div>
      <div className="posthero__info__bottom">
        <p>{desc}</p>
        <p>
          <span>
            {author}, &nbsp; {date}
          </span>
        </p>
      </div>
    </div>
    <div className="posthero__image">
      <img src={img} alt="" />
    </div>
  </div>
)

export default PostHero

//make these required when we really go
PostHero.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  desc: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
}

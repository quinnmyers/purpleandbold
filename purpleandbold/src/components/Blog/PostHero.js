import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

//styles
import './posthero.sass'

const PostHero = ({ slug, img, title, desc, author, date }) => (
  <Link to={slug}>
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
  </Link>
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

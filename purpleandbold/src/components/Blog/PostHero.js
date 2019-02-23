import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

//styles
import './posthero.sass'

const PostHero = ({ slug, img, title, desc, author, date, loaded }) => (
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
        <div className={`posthero__image__container ${loaded ? 'loaded' : ''}`}>
          <Img fluid={img} />
        </div>
      </div>
    </div>
  </Link>
)

export default PostHero

PostHero.propTypes = {
  img: PropTypes.object.isRequried,
  title: PropTypes.string.isRequried,
  desc: PropTypes.string.isRequried,
  author: PropTypes.string.isRequried,
  date: PropTypes.string.isRequried,
  loaded: PropTypes.bool.isRequried,
}

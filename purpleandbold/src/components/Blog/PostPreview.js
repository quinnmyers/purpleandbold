import React from 'react'
import PropTypes from 'prop-types'

//styles
import './postpreview.sass'

const PostPreview = ({ img, title, desc, author, date }) => (
  <div className="postpreview">
    <div className="postpreview__image">
      <img src={img} alt="" />
    </div>
    <div className="postpreview__info">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>
        <span>
          {author} {date}
        </span>
      </p>
    </div>
  </div>
)

export default PostPreview

//make these required when we really go
PostPreview.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  desc: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
}

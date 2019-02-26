import React from 'react'
import PropTypes from 'prop-types'

//components
import Content from '../../utility/Content/Content'
import TextBlock from '../../utility/TextBlock/TextBlock'
import Spacer from '../../utility/Spacer/spacer'
import PostHero from '../PostHero.js'

//styles
import './blogfeature.sass'

//images
import AnalFeatured from '../../../images/blog/analytics/blog-analytics-noreflect.jpg'

const BlogFeature = ({ title, description, author, date, img, slug }) => (
  <div className={`blog__feature`}>
    {/* <Spacer /> */}
    <Content>
      <div className={`blog__feature__content`}>
        <TextBlock
          header={`Check Out Our Blog`}
          text={`We love to write about what makes us happy — growing businesses. Our main goal is always to create concise, informative, and ultimately useful information to business owners and aspiring entrepreneurs. If you have a minute, check out some of the posts, you’ll probably find something helpful to you.`}
          loaded={true}
        />
        {/* <PostHero
          img={AnalFeatured}
          title="Analytics In Modern Websites"
          desc={`Learn what analytics are, how to use analytics, and why analytics are important to your business' success`}
          author={`Quinn Myers`}
          date={`2/6/19`}
          slug={`#`}
        /> */}
        <PostHero
          img={img}
          title={title}
          desc={description}
          author={author}
          date={date}
          slug={slug}
        />
      </div>
    </Content>
  </div>
)

export default BlogFeature

BlogFeature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

import React from 'react'

//components
import Content from '../../utility/Content/Content'
import TextBlock from '../../utility/TextBlock/TextBlock'
import Spacer from '../../utility/Spacer/Spacer'
import PostHero from '../PostHero.js'

//styles
import './blogfeature.sass'

//images
import AnalFeatured from '../../../images/blog/analytics/blog-analytics-noreflect.jpg'

const BlogFeature = () => (
  <div className={`blog__feature`}>
    {/* <Spacer /> */}
    <Content>
      <div className={`blog__feature__content`}>
        <TextBlock
          header={`Check Out Our Blog`}
          text={`We love to write about what makes us happy — growing businesses from the ground up. Some topics are laser focused and others are more broad, but our main goal is always to create concise, informative, and ultimately useful information to businesses owner and aspiring entrepreneurs. If you have a minute, check out some of the posts, you’ll probably find something helpful to you.`}
        />
        <PostHero
          img={AnalFeatured}
          title="Analytics In Modern Websites"
          desc={`Learn what analytics are, how to use analytics, and why analytics are important to your business' success`}
          author={`Quinn Myers`}
          date={`2/6/19`}
          slug={`#`}
        />
      </div>
    </Content>
  </div>
)

export default BlogFeature

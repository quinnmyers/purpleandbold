import React, { Component } from 'react'
import Content from '../components/utility/Content/Content'
import Img from 'gatsby-image'
import GatsbyImage from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

//components
import PostPreview from '../components/Blog/PostPreview'

//images
import AnalFeatured from '../images/blog/analytics/blog-analytics-noreflect.jpg'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const data = this.props.data.allMarkdownRemark.edges
    const testExcerpt = ''
    return (
      <Layout>
        <Content>
          {data.map(post => (
            <div className="post" key={post.id}>
              <Img
                fluid={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid
                }
              />
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.exceprt}</p>
            </div>
          ))}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <PostPreview
            img={AnalFeatured}
            title="Analytics In Modern Websites"
            desc={`Learn what analytics are, how to use analytics, and why analytics are important to your business' success`}
            author={`Quinn Myers`}
            date={`2/6/19`}
          />
        </Content>
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            tags
            exceprt
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog

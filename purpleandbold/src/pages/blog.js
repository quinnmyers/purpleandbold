import React, { Component } from 'react'
import Content from '../components/utility/Content/Content'
import Img from 'gatsby-image'
import GatsbyImage from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

//components
import PostPreview from '../components/Blog/PostPreview'
import PostHero from '../components/Blog/PostHero'

//images
import AnalFeatured from '../images/blog/analytics/blog-analytics-noreflect.jpg'

//styles
import '../components/Blog/blogindex.sass'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const data = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <Content>
          <div className="blogindex">
            <div className="blogindex__header">
              <h2>Welcome to Our Blog</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p>
            </div>
            <div className="blogindex__featured">
              <h4>Featured Post</h4>
              <PostHero
                img={AnalFeatured}
                title="Analytics In Modern Websites"
                desc={`Learn what analytics are, how to use analytics, and why analytics are important to your business' success`}
                author={`Quinn Myers`}
                date={`2/6/19`}
                slug={`#`}
              />
            </div>
            <div className="blogindex__posts">
              <h4>All Blog Posts</h4>
              <div className="blogindex__posts__filters">
                <div className="blogindex__posts__filters__buttons">
                  <h5>Categories:</h5>
                  <button>websites</button>
                  <button>marketing</button>
                  <button>design</button>
                </div>
                <div className="blogindex__posts__filters__search">
                  <img src="http://placehold.it/35x35" alt="" />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="blogindex__posts__grid">
              {data.map(post => (
                <div className="post" key={post.id}>
                  <PostPreview
                    img={
                      post.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    title={post.node.frontmatter.title}
                    desc={post.node.frontmatter.exceprt}
                    author={`Quinn Myers`}
                    date={`2/6/19`}
                    slug={post.node.fields.slug}
                  />
                </div>
              ))}
            </div>
          </div>
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

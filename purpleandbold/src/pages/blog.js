import React, { Component } from 'react'
import Content from '../components/utility/Content/Content'
import TextBlock from '../components/utility/TextBlock/TextBlock'
// import Img from 'gatsby-image'
// import GatsbyImage from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

//components
import PostPreview from '../components/Blog/PostPreview'
import PostHero from '../components/Blog/PostHero'

//images
import AnalFeatured from '../images/blog/analytics/blog-analytics-noreflect.jpg'

//styles
import '../components/Blog/blogindex.sass'
import { set } from 'react-ga'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      showing: [],
      pickedTags: [],
    }
    this.filter = this.filter.bind(this)
    this.buildFilterArray = this.buildFilterArray.bind(this)
  }
  componentDidMount() {
    this.setState({
      showing: this.props.data.allPosts.edges,
      posts: this.props.data.allPosts.edges,
    })
  }
  // buildFeaturedPost() {
  //   // this.props.data.allMarkdownRemark.forEach(p => {
  //   //   if (p.edges.node.frontmatter === true) {
  //   //     this.setState({ featuredPost: p })
  //   //   }
  //   // })
  //   // console.log(this.state.featuredPost)
  //   console.log(this.props.data)
  //   this.props.data.allPosts.edges.forEach(p => {
  //     if (p.node.frontmatter.featured) {
  //       this.setState({ featuredPost: p })
  //     }
  //   })
  //   setTimeout(() => {
  //     console.log('from blog index:', this.state.featuredPost)
  //   }, 100)
  // }
  buildFilterArray(tag) {
    const otherpicked = [...this.state.pickedTags]
    const isIn = otherpicked.indexOf(tag) === -1
    if (!isIn) {
      const ii = otherpicked.indexOf(tag)
      otherpicked.splice(ii, 1)
    } else {
      otherpicked.push(tag)
    }
    this.setState({ pickedTags: otherpicked })
    this.filter(otherpicked)
  }

  filter(tags) {
    const posts = this.state.posts
    let temparray = new Set()
    // loop over all posts
    posts.forEach(post => {
      // loop over the tags you are matching to
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        // inside of the loop of tags you are matching too we loop over the tages on each post
        for (let pi = 0; pi < post.node.frontmatter.tags.length; pi++) {
          const ptag = post.node.frontmatter.tags[pi]
          // now we check if the tag on the post matches the tag we are looping over on line 61
          if (tag === ptag) {
            // if its true then we push the whole post el from the foreach loop into an array and brake witch kills all of the for loops
            temparray.add(post)
            break
          }
        }
      }
    })
    // if there are no posts that match our tags then it will just show all of the posts
    if (temparray.size === 0) {
      temparray = new Set([...posts])
    }
    // setting the state that we loop over to show the posts at the bottom of the page
    const newarr = Array.from(temparray)
    this.setState({ showing: newarr })
  }

  render() {
    const data = this.props.data.allPosts.edges
    const featured = this.props.data.featuredPost.edges[0].node
    return (
      <Layout>
        <Content>
          <div className="blogindex">
            <div className="blogindex__header">
              <TextBlock
                header={`Welcome to Our Blog`}
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
              />
              {/* <h2>Welcome to Our Blog</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p> */}
            </div>
            <div className="blogindex__featured">
              <h4>Featured Post</h4>
              <PostHero
                img={featured.frontmatter.featuredImage.childImageSharp.fluid}
                title={featured.frontmatter.title}
                desc={featured.frontmatter.description}
                author={featured.frontmatter.author}
                date={featured.frontmatter.date}
                slug={featured.fields.slug}
              />
            </div>
            <div className="blogindex__posts">
              <h4>All Blog Posts</h4>
              <div className="blogindex__posts__filters">
                <div className="blogindex__posts__filters__buttons">
                  <h5>Categories:</h5>
                  <button
                    className={
                      this.state.pickedTags.includes('website') ? 'showing' : ''
                    }
                    onClick={() => this.buildFilterArray('website')}
                  >
                    websites
                  </button>
                  <button
                    className={
                      this.state.pickedTags.includes('marketing')
                        ? 'showing'
                        : ''
                    }
                    onClick={() => this.buildFilterArray('marketing')}
                  >
                    marketing
                  </button>
                  <button
                    className={
                      this.state.pickedTags.includes('design') ? 'showing' : ''
                    }
                    onClick={() => this.buildFilterArray('design')}
                  >
                    design
                  </button>
                </div>
                {/* <div className="blogindex__posts__filters__search">
                  <img src="http://placehold.it/35x35" alt="" />
                  <input type="text" />
                </div> */}
              </div>
            </div>
            <div className="blogindex__posts__grid">
              {this.state.showing.map(post => (
                <div className="post" key={post.id}>
                  <PostPreview
                    img={
                      post.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    title={post.node.frontmatter.title}
                    desc={post.node.frontmatter.description}
                    author={post.node.frontmatter.description}
                    date={post.node.frontmatter.date}
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
    allPosts: allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            tags
            description
            date(formatString: "MMMM DD, YYYY")
            author
            featured
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
    featuredPost: allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            description
            date(formatString: "MMMM DD, YYYY")
            author
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
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

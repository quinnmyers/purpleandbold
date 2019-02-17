import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Content from '../components/utility/Content/Content'
import PostHero from '../components/Blog/PostHero'
import PostPreview from '../components/Blog/PostPreview'

import './blogpost.sass'

//share
import ShareFacebook from '../components/Blog/shareLinks/shareFacebook'
import ShareTwitter from '../components/Blog/shareLinks/shareTwitter'
import ShareLinked from '../components/Blog/shareLinks/shareLinked'
import ShareReddit from '../components/Blog/shareLinks/shareReddit'

//images
import twitterIcon from '../images/icons/twitter-icon-blog.svg'
import facebookIcon from '../images/icons/facebook-icon-blog.svg'
import linkedinIcon from '../images/icons/linkedin-icon-blog.svg'
import redditIcon from '../images/icons/reddit-icon-blog.svg'

class BlogPostTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showing: [],
      posts: [],
    }
    this.filter = this.filter.bind(this)
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      posts: nextProps.data.allMarkdownRemark.edges,
    }
  }
  componentDidMount() {
    // console.log(`showing mount: ${this.state.showing}`)
    this.checkDates()
    // this.setState({ posts: this.props.data.allMarkdownRemark.edges })
    this.filter(this.props.data.markdownRemark.frontmatter.tags)
    // this.styleBody()
  }
  checkDates() {
    this.state.posts.forEach(p => {
      console.log(`date is: ${p.node.frontmatter.date}`)
    })
  }
  styleBody() {
    console.log(this.shareIcons.getBoundingClientRect())
    console.log(this.contentBlock.getBoundingClientRect())
    this.contentBlock.style.marginLeft = `-${
      this.shareIcons.getBoundingClientRect().width
    }px`
  }
  componentWillUnmount() {}
  filter(tags) {
    const posts = this.state.posts
    const index = posts.findIndex(
      post => post.node.id == this.props.data.markdownRemark.id
    )
    const currentPost = posts[index]

    posts.splice(index, 1)
    let temparray = []
    //first try

    // this.props.data.allMarkdownRemark.edges.forEach(element => {
    //     tag.forEach(tagel => {
    //         element.node.frontmatter.tag.forEach(tag => {

    //             if (tag === tagel) {
    //                 temparray.push(element)
    //                 break
    //             } else {
    //                 return
    //             }
    //         })
    //     });
    // })
    // failed because no brake
    //second try

    // tags.forEach(tag => {
    //     const finding = posts.find(post => {
    //         for (let i = 0; i < post.node.frontmatter.tags.length; i++) {
    //             const element = post.node.frontmatter.tags[i];
    //             return element === tag
    //         }
    //         // return post.node.frontmatter.tags[0] === tag
    //     })
    //     console.log("tag", tag, "finding", finding);
    //     temparray.push(finding)

    // });
    // failed becaue of limmits in find
    //third try
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
            temparray.push(post)
            break
          }
        }
      }
    })
    // if there are no posts that match our tags then it will just show all of the posts
    if (temparray.length === 0) {
      console.log('hit 0')
      temparray = posts
    }
    // setting the state that we loop over to show the posts at the bottom of the page
    posts.push(currentPost)
    this.setState({
      posts: posts,
      // showing: temparray,
    })
    setTimeout(() => {
      this.sortRelated(temparray)
    }, 15)
  }
  sortRelated(temparray) {
    this.setState({ showing: temparray })
    if (this.state.showing.length > 3) {
      this.state.showing.splice(3)
    }
    this.setState({ showing: temparray })
  }
  render() {
    const { previous, next } = this.props.pageContext
    const post = this.props.data.markdownRemark
    const posts = this.props.data.allMarkdownRemark.edges
    console.log('posts render', posts)

    return (
      <Layout>
        <SEO />
        <Content>
          <div className="blog">
            <PostHero
              img={post.frontmatter.featuredImage.childImageSharp.fluid}
              title={post.frontmatter.title}
              desc={post.frontmatter.description}
              author={post.frontmatter.author}
              date={post.frontmatter.date}
            />

            <div className="blog__body" ref={div => (this.contentBlock = div)}>
              <div
                className="blog__body__icons"
                ref={div => (this.shareIcons = div)}
              >
                <div className="blog__body__icons__container">
                  <ShareTwitter
                    title={post.frontmatter.title}
                    message={post.frontmatter.description}
                    hastag={`#${post.frontmatter.tags.join(' #')}`}
                    link={`https://purpleandbold.com${post.fields.slug}`}
                    icon={twitterIcon}
                  />
                  <ShareFacebook
                    message={`https://purpleandbold.com${post.fields.slug}`}
                    icon={facebookIcon}
                  />
                  <ShareLinked
                    message={`${post.frontmatter.description}`}
                    title={post.frontmatter.title}
                    website={'purple + bold'}
                    link={`https://purpleandbold.com${post.fields.slug}`}
                    icon={linkedinIcon}
                  />
                  <ShareReddit
                    message={`${
                      post.frontmatter.description
                    } from https://purpleandbold.com${post.fields.slug}`}
                    title={`${post.frontmatter.title} by purple and bold`}
                    icon={redditIcon}
                  />
                </div>
              </div>
              <div className="blog__body__post">
                <div
                  className="blog__body__post__content"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <div className="blog__body__post__more">
                  {this.state.showing.map(oPost => (
                    <div key={oPost.node.id}>
                      <PostPreview
                        slug={oPost.node.fields.slug}
                        img={
                          oPost.node.frontmatter.featuredImage.childImageSharp
                            .fluid
                        }
                        title={oPost.node.frontmatter.title}
                        desc={oPost.node.frontmatter.description}
                        author={oPost.node.frontmatter.author}
                        date={oPost.node.frontmatter.date}
                      />
                    </div>
                  ))}
                </div>

                <ul>
                  <li>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>
                <Link to={`/blog`}>See All Posts</Link>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    )
  }
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        author
        tags
        description
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            tags
            description
            title
            date(formatString: "MMMM DD, YYYY")
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

export default BlogPostTemplate

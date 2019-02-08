import React, { Component } from 'react';
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'

class BlogPostTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log(this.props);

    }
    render() {
        const post = this.props.data.markdownRemark
        const { previous, next } = this.props.pageContext

        return (
            <Layout>
                <SEO />
                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                <Content>

                    <h1>{post.frontmatter.title}</h1>
                    <p

                    >
                        {post.frontmatter.date}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <hr

                    />

                    <ul

                    >
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
                </Content>
            </Layout>
        )

    }
}
export const query = graphql`
query($slug: String!) { 
  markdownRemark(fields: { slug: { eq: $slug} }) {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
        featuredImage{
        childImageSharp{
          fluid(maxWidth: 1000){
...GatsbyImageSharpFluid_noBase64
        }
        }
      }
      author
      tags
      exceprt
      title
      date(formatString: "MMMM DD, YYYY")
    }
    }
  }`

export default BlogPostTemplate

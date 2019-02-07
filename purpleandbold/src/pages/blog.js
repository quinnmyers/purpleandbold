import React, { Component } from 'react';
import Content from '../components/utility/Content/Content'
import Img from 'gatsby-image'
import GatsbyImage from 'gatsby-image';
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const data = this.props.data.allMarkdownRemark.edges
        return (
            <Layout>

                <Content>
                    {data.map((post, ) => (
                        <div className="post" key={post.id}>
                            <Img fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}></Img>
                            <h2>
                                {post.node.frontmatter.title}

                            </h2>
                            <p>{post.node.frontmatter.exceprt}</p>
                        </div>
                    ))}
                </Content>
            </Layout>
        );
    }
}
export const query = graphql`
query{ 
    allMarkdownRemark{
        edges{
          node{
              fields{
                slug
              }
              id
            frontmatter{
              tags
              exceprt
              title
              featuredImage{
            childImageSharp{
              fluid(maxWidth: 200){
    ...GatsbyImageSharpFluid_noBase64
            }
            }
          }
            }
          }
        }
      }
  }`

export default Blog;
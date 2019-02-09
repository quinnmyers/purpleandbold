import React, { Component } from 'react';
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'
import PostHero from '../components/Blog/PostHero'
import PostPreview from '../components/Blog/PostPreview'

import "./blogpost.sass"

class BlogPostTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: [],
            posts: []
        }
        this.filter = this.filter.bind(this)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            posts: nextProps.data.allMarkdownRemark.edges
        }
    }
    componentDidMount() {
        // console.log(this.props.data.allMarkdownRemark.edges);

        // this.setState({ posts: this.props.data.allMarkdownRemark.edges })
        this.filter(this.props.data.markdownRemark.frontmatter.tags)
    }

    componentWillUnmount() {
    }
    filter(tags) {

        const posts = this.state.posts
        const index = posts.findIndex(post => post.node.id == this.props.data.markdownRemark.id)
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
                const tag = tags[i];
                // inside of the loop of tags you are matching too we loop over the tages on each post
                for (let pi = 0; pi < post.node.frontmatter.tags.length; pi++) {
                    const ptag = post.node.frontmatter.tags[pi];
                    // now we check if the tag on the post matches the tag we are looping over on line 61
                    if (tag === ptag) {
                        // if its true then we push the whole post el from the foreach loop into an array and brake witch kills all of the for loops 
                        temparray.push(post)
                        break
                    }
                }
            }
        });
        // if there are no posts that match our tags then it will just show all of the posts 
        if (temparray.length === 0) {
            console.log("hit 0");

            temparray = posts
        }
        // setting the state that we loop over to show the posts at the bottom of the page 
        posts.push(currentPost)
        this.setState({
            showing: temparray,
            posts: posts
        })

    }

    render() {
        const { previous, next } = this.props.pageContext
        const post = this.props.data.markdownRemark
        const posts = this.props.data.allMarkdownRemark.edges
        console.log("posts render", posts);


        return (
            <Layout>
                <SEO />
                <Content>
                    <div className="blog">
                        <PostHero
                            img={post.frontmatter.featuredImage.childImageSharp.fluid}
                            title={post.frontmatter.title}
                            desc={post.frontmatter.exceprt}
                            author={post.frontmatter.author}
                            date={post.frontmatter.date}
                        />

                        <div className="blog__body">
                            <div className="blog__body__icons">
                                <a href="google.com" aria-label="link to navigation bar">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg==" />
                                </a>
                                <a href="google.com" aria-label="link to navigation bar">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjIuNjc1IDBoLTIxLjM1Yy0uNzMyIDAtMS4zMjUuNTkzLTEuMzI1IDEuMzI1djIxLjM1MWMwIC43MzEuNTkzIDEuMzI0IDEuMzI1IDEuMzI0aDExLjQ5NXYtOS4yOTRoLTMuMTI4di0zLjYyMmgzLjEyOHYtMi42NzFjMC0zLjEgMS44OTMtNC43ODggNC42NTktNC43ODggMS4zMjUgMCAyLjQ2My4wOTkgMi43OTUuMTQzdjMuMjRsLTEuOTE4LjAwMWMtMS41MDQgMC0xLjc5NS43MTUtMS43OTUgMS43NjN2Mi4zMTNoMy41ODdsLS40NjcgMy42MjJoLTMuMTJ2OS4yOTNoNi4xMTZjLjczIDAgMS4zMjMtLjU5MyAxLjMyMy0xLjMyNXYtMjEuMzVjMC0uNzMyLS41OTMtMS4zMjUtMS4zMjUtMS4zMjV6Ii8+PC9zdmc+" />
                                </a>
                                <a href="google.com" aria-label="link to navigation bar">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC45OCAzLjVjMCAxLjM4MS0xLjExIDIuNS0yLjQ4IDIuNXMtMi40OC0xLjExOS0yLjQ4LTIuNWMwLTEuMzggMS4xMS0yLjUgMi40OC0yLjVzMi40OCAxLjEyIDIuNDggMi41em0uMDIgNC41aC01djE2aDV2LTE2em03Ljk4MiAwaC00Ljk2OHYxNmg0Ljk2OXYtOC4zOTljMC00LjY3IDYuMDI5LTUuMDUyIDYuMDI5IDB2OC4zOTloNC45ODh2LTEwLjEzMWMwLTcuODgtOC45MjItNy41OTMtMTEuMDE4LTMuNzE0di0yLjE1NXoiLz48L3N2Zz4=" />
                                </a>
                                <a href="google.com" aria-label="link to navigation bar">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTEuNzc5YzAtMS40NTktMS4xOTItMi42NDUtMi42NTctMi42NDUtLjcxNSAwLTEuMzYzLjI4Ni0xLjg0Ljc0Ni0xLjgxLTEuMTkxLTQuMjU5LTEuOTQ5LTYuOTcxLTIuMDQ2bDEuNDgzLTQuNjY5IDQuMDE2Ljk0MS0uMDA2LjA1OGMwIDEuMTkzLjk3NSAyLjE2MyAyLjE3NCAyLjE2MyAxLjE5OCAwIDIuMTcyLS45NyAyLjE3Mi0yLjE2M3MtLjk3NS0yLjE2NC0yLjE3Mi0yLjE2NGMtLjkyIDAtMS43MDQuNTc0LTIuMDIxIDEuMzc5bC00LjMyOS0xLjAxNWMtLjE4OS0uMDQ2LS4zODEuMDYzLS40NC4yNDlsLTEuNjU0IDUuMjA3Yy0yLjgzOC4wMzQtNS40MDkuNzk4LTcuMyAyLjAyNS0uNDc0LS40MzgtMS4xMDMtLjcxMi0xLjc5OS0uNzEyLTEuNDY1IDAtMi42NTYgMS4xODctMi42NTYgMi42NDYgMCAuOTcuNTMzIDEuODExIDEuMzE3IDIuMjcxLS4wNTIuMjgyLS4wODYuNTY3LS4wODYuODU3IDAgMy45MTEgNC44MDggNy4wOTMgMTAuNzE5IDcuMDkzczEwLjcyLTMuMTgyIDEwLjcyLTcuMDkzYzAtLjI3NC0uMDI5LS41NDQtLjA3NS0uODEuODMyLS40NDcgMS40MDUtMS4zMTIgMS40MDUtMi4zMTh6bS0xNy4yMjQgMS44MTZjMC0uODY4LjcxLTEuNTc1IDEuNTgyLTEuNTc1Ljg3MiAwIDEuNTgxLjcwNyAxLjU4MSAxLjU3NXMtLjcwOSAxLjU3NC0xLjU4MSAxLjU3NC0xLjU4Mi0uNzA2LTEuNTgyLTEuNTc0em05LjA2MSA0LjY2OWMtLjc5Ny43OTMtMi4wNDggMS4xNzktMy44MjQgMS4xNzlsLS4wMTMtLjAwMy0uMDEzLjAwM2MtMS43NzcgMC0zLjAyOC0uMzg2LTMuODI0LTEuMTc5LS4xNDUtLjE0NC0uMTQ1LS4zNzkgMC0uNTIzLjE0NS0uMTQ1LjM4MS0uMTQ1LjUyNiAwIC42NS42NDcgMS43MjkuOTYxIDMuMjk4Ljk2MWwuMDEzLjAwMy4wMTMtLjAwM2MxLjU2OSAwIDIuNjQ4LS4zMTUgMy4yOTgtLjk2Mi4xNDUtLjE0NS4zODEtLjE0NC41MjYgMCAuMTQ1LjE0NS4xNDUuMzc5IDAgLjUyNHptLS4xODktMy4wOTVjLS44NzIgMC0xLjU4MS0uNzA2LTEuNTgxLTEuNTc0IDAtLjg2OC43MDktMS41NzUgMS41ODEtMS41NzVzMS41ODEuNzA3IDEuNTgxIDEuNTc1LS43MDkgMS41NzQtMS41ODEgMS41NzR6Ii8+PC9zdmc+" />
                                </a>
                            </div>
                            <div className="blog__body__post">
                                <div className="blog__body__post__content" dangerouslySetInnerHTML={{ __html: post.html }} />
                                <div className="blog__body__post__more">
                                    {this.state.showing.map(oPost => (
                                        <div key={oPost.node.id}>
                                            <PostPreview
                                                slug={oPost.node.fields.slug}
                                                img={oPost.node.frontmatter.featuredImage.childImageSharp.fluid}
                                                title={oPost.node.frontmatter.title}
                                                desc={oPost.node.frontmatter.excerpt}
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
                                                {next.frontmatter.title} →</Link>
                                        )}
                                    </li>
                                </ul>
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
                            markdownRemark(fields: {slug: {eq: $slug} }) {
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
          }`

export default BlogPostTemplate

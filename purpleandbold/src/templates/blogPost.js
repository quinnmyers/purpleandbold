import React, { Component } from 'react';
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'
import "./blogpost.sass"
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
                <Content>
                    <div className="blog">
                        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />

                        <h2>{post.frontmatter.title}</h2>
                        <p>
                            {post.frontmatter.date}
                        </p>
                        <div className="blog__body">
                            <div className="blog__body__icons">
                                <a href="google.com" aria-label="link to navigation bar">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTEuNzc5YzAtMS40NTktMS4xOTItMi42NDUtMi42NTctMi42NDUtLjcxNSAwLTEuMzYzLjI4Ni0xLjg0Ljc0Ni0xLjgxLTEuMTkxLTQuMjU5LTEuOTQ5LTYuOTcxLTIuMDQ2bDEuNDgzLTQuNjY5IDQuMDE2Ljk0MS0uMDA2LjA1OGMwIDEuMTkzLjk3NSAyLjE2MyAyLjE3NCAyLjE2MyAxLjE5OCAwIDIuMTcyLS45NyAyLjE3Mi0yLjE2M3MtLjk3NS0yLjE2NC0yLjE3Mi0yLjE2NGMtLjkyIDAtMS43MDQuNTc0LTIuMDIxIDEuMzc5bC00LjMyOS0xLjAxNWMtLjE4OS0uMDQ2LS4zODEuMDYzLS40NC4yNDlsLTEuNjU0IDUuMjA3Yy0yLjgzOC4wMzQtNS40MDkuNzk4LTcuMyAyLjAyNS0uNDc0LS40MzgtMS4xMDMtLjcxMi0xLjc5OS0uNzEyLTEuNDY1IDAtMi42NTYgMS4xODctMi42NTYgMi42NDYgMCAuOTcuNTMzIDEuODExIDEuMzE3IDIuMjcxLS4wNTIuMjgyLS4wODYuNTY3LS4wODYuODU3IDAgMy45MTEgNC44MDggNy4wOTMgMTAuNzE5IDcuMDkzczEwLjcyLTMuMTgyIDEwLjcyLTcuMDkzYzAtLjI3NC0uMDI5LS41NDQtLjA3NS0uODEuODMyLS40NDcgMS40MDUtMS4zMTIgMS40MDUtMi4zMTh6bS0xNy4yMjQgMS44MTZjMC0uODY4LjcxLTEuNTc1IDEuNTgyLTEuNTc1Ljg3MiAwIDEuNTgxLjcwNyAxLjU4MSAxLjU3NXMtLjcwOSAxLjU3NC0xLjU4MSAxLjU3NC0xLjU4Mi0uNzA2LTEuNTgyLTEuNTc0em05LjA2MSA0LjY2OWMtLjc5Ny43OTMtMi4wNDggMS4xNzktMy44MjQgMS4xNzlsLS4wMTMtLjAwMy0uMDEzLjAwM2MtMS43NzcgMC0zLjAyOC0uMzg2LTMuODI0LTEuMTc5LS4xNDUtLjE0NC0uMTQ1LS4zNzkgMC0uNTIzLjE0NS0uMTQ1LjM4MS0uMTQ1LjUyNiAwIC42NS42NDcgMS43MjkuOTYxIDMuMjk4Ljk2MWwuMDEzLjAwMy4wMTMtLjAwM2MxLjU2OSAwIDIuNjQ4LS4zMTUgMy4yOTgtLjk2Mi4xNDUtLjE0NS4zODEtLjE0NC41MjYgMCAuMTQ1LjE0NS4xNDUuMzc5IDAgLjUyNHptLS4xODktMy4wOTVjLS44NzIgMC0xLjU4MS0uNzA2LTEuNTgxLTEuNTc0IDAtLjg2OC43MDktMS41NzUgMS41ODEtMS41NzVzMS41ODEuNzA3IDEuNTgxIDEuNTc1LS43MDkgMS41NzQtMS41ODEgMS41NzR6Ii8+PC9zdmc+" />
                                </a>
                                <a href="google.com" aria-label="link to navigation bar">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTEuNzc5YzAtMS40NTktMS4xOTItMi42NDUtMi42NTctMi42NDUtLjcxNSAwLTEuMzYzLjI4Ni0xLjg0Ljc0Ni0xLjgxLTEuMTkxLTQuMjU5LTEuOTQ5LTYuOTcxLTIuMDQ2bDEuNDgzLTQuNjY5IDQuMDE2Ljk0MS0uMDA2LjA1OGMwIDEuMTkzLjk3NSAyLjE2MyAyLjE3NCAyLjE2MyAxLjE5OCAwIDIuMTcyLS45NyAyLjE3Mi0yLjE2M3MtLjk3NS0yLjE2NC0yLjE3Mi0yLjE2NGMtLjkyIDAtMS43MDQuNTc0LTIuMDIxIDEuMzc5bC00LjMyOS0xLjAxNWMtLjE4OS0uMDQ2LS4zODEuMDYzLS40NC4yNDlsLTEuNjU0IDUuMjA3Yy0yLjgzOC4wMzQtNS40MDkuNzk4LTcuMyAyLjAyNS0uNDc0LS40MzgtMS4xMDMtLjcxMi0xLjc5OS0uNzEyLTEuNDY1IDAtMi42NTYgMS4xODctMi42NTYgMi42NDYgMCAuOTcuNTMzIDEuODExIDEuMzE3IDIuMjcxLS4wNTIuMjgyLS4wODYuNTY3LS4wODYuODU3IDAgMy45MTEgNC44MDggNy4wOTMgMTAuNzE5IDcuMDkzczEwLjcyLTMuMTgyIDEwLjcyLTcuMDkzYzAtLjI3NC0uMDI5LS41NDQtLjA3NS0uODEuODMyLS40NDcgMS40MDUtMS4zMTIgMS40MDUtMi4zMTh6bS0xNy4yMjQgMS44MTZjMC0uODY4LjcxLTEuNTc1IDEuNTgyLTEuNTc1Ljg3MiAwIDEuNTgxLjcwNyAxLjU4MSAxLjU3NXMtLjcwOSAxLjU3NC0xLjU4MSAxLjU3NC0xLjU4Mi0uNzA2LTEuNTgyLTEuNTc0em05LjA2MSA0LjY2OWMtLjc5Ny43OTMtMi4wNDggMS4xNzktMy44MjQgMS4xNzlsLS4wMTMtLjAwMy0uMDEzLjAwM2MtMS43NzcgMC0zLjAyOC0uMzg2LTMuODI0LTEuMTc5LS4xNDUtLjE0NC0uMTQ1LS4zNzkgMC0uNTIzLjE0NS0uMTQ1LjM4MS0uMTQ1LjUyNiAwIC42NS42NDcgMS43MjkuOTYxIDMuMjk4Ljk2MWwuMDEzLjAwMy4wMTMtLjAwM2MxLjU2OSAwIDIuNjQ4LS4zMTUgMy4yOTgtLjk2Mi4xNDUtLjE0NS4zODEtLjE0NC41MjYgMCAuMTQ1LjE0NS4xNDUuMzc5IDAgLjUyNHptLS4xODktMy4wOTVjLS44NzIgMC0xLjU4MS0uNzA2LTEuNTgxLTEuNTc0IDAtLjg2OC43MDktMS41NzUgMS41ODEtMS41NzVzMS41ODEuNzA3IDEuNTgxIDEuNTc1LS43MDkgMS41NzQtMS41ODEgMS41NzR6Ii8+PC9zdmc+" />
                                </a>
                                <a href="google.com" aria-label="link to navigation bar">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTEuNzc5YzAtMS40NTktMS4xOTItMi42NDUtMi42NTctMi42NDUtLjcxNSAwLTEuMzYzLjI4Ni0xLjg0Ljc0Ni0xLjgxLTEuMTkxLTQuMjU5LTEuOTQ5LTYuOTcxLTIuMDQ2bDEuNDgzLTQuNjY5IDQuMDE2Ljk0MS0uMDA2LjA1OGMwIDEuMTkzLjk3NSAyLjE2MyAyLjE3NCAyLjE2MyAxLjE5OCAwIDIuMTcyLS45NyAyLjE3Mi0yLjE2M3MtLjk3NS0yLjE2NC0yLjE3Mi0yLjE2NGMtLjkyIDAtMS43MDQuNTc0LTIuMDIxIDEuMzc5bC00LjMyOS0xLjAxNWMtLjE4OS0uMDQ2LS4zODEuMDYzLS40NC4yNDlsLTEuNjU0IDUuMjA3Yy0yLjgzOC4wMzQtNS40MDkuNzk4LTcuMyAyLjAyNS0uNDc0LS40MzgtMS4xMDMtLjcxMi0xLjc5OS0uNzEyLTEuNDY1IDAtMi42NTYgMS4xODctMi42NTYgMi42NDYgMCAuOTcuNTMzIDEuODExIDEuMzE3IDIuMjcxLS4wNTIuMjgyLS4wODYuNTY3LS4wODYuODU3IDAgMy45MTEgNC44MDggNy4wOTMgMTAuNzE5IDcuMDkzczEwLjcyLTMuMTgyIDEwLjcyLTcuMDkzYzAtLjI3NC0uMDI5LS41NDQtLjA3NS0uODEuODMyLS40NDcgMS40MDUtMS4zMTIgMS40MDUtMi4zMTh6bS0xNy4yMjQgMS44MTZjMC0uODY4LjcxLTEuNTc1IDEuNTgyLTEuNTc1Ljg3MiAwIDEuNTgxLjcwNyAxLjU4MSAxLjU3NXMtLjcwOSAxLjU3NC0xLjU4MSAxLjU3NC0xLjU4Mi0uNzA2LTEuNTgyLTEuNTc0em05LjA2MSA0LjY2OWMtLjc5Ny43OTMtMi4wNDggMS4xNzktMy44MjQgMS4xNzlsLS4wMTMtLjAwMy0uMDEzLjAwM2MtMS43NzcgMC0zLjAyOC0uMzg2LTMuODI0LTEuMTc5LS4xNDUtLjE0NC0uMTQ1LS4zNzkgMC0uNTIzLjE0NS0uMTQ1LjM4MS0uMTQ1LjUyNiAwIC42NS42NDcgMS43MjkuOTYxIDMuMjk4Ljk2MWwuMDEzLjAwMy4wMTMtLjAwM2MxLjU2OSAwIDIuNjQ4LS4zMTUgMy4yOTgtLjk2Mi4xNDUtLjE0NS4zODEtLjE0NC41MjYgMCAuMTQ1LjE0NS4xNDUuMzc5IDAgLjUyNHptLS4xODktMy4wOTVjLS44NzIgMC0xLjU4MS0uNzA2LTEuNTgxLTEuNTc0IDAtLjg2OC43MDktMS41NzUgMS41ODEtMS41NzVzMS41ODEuNzA3IDEuNTgxIDEuNTc1LS43MDkgMS41NzQtMS41ODEgMS41NzR6Ii8+PC9zdmc+" />
                                </a>
                                <a href="google.com" aria-label="link to navigation bar">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTEuNzc5YzAtMS40NTktMS4xOTItMi42NDUtMi42NTctMi42NDUtLjcxNSAwLTEuMzYzLjI4Ni0xLjg0Ljc0Ni0xLjgxLTEuMTkxLTQuMjU5LTEuOTQ5LTYuOTcxLTIuMDQ2bDEuNDgzLTQuNjY5IDQuMDE2Ljk0MS0uMDA2LjA1OGMwIDEuMTkzLjk3NSAyLjE2MyAyLjE3NCAyLjE2MyAxLjE5OCAwIDIuMTcyLS45NyAyLjE3Mi0yLjE2M3MtLjk3NS0yLjE2NC0yLjE3Mi0yLjE2NGMtLjkyIDAtMS43MDQuNTc0LTIuMDIxIDEuMzc5bC00LjMyOS0xLjAxNWMtLjE4OS0uMDQ2LS4zODEuMDYzLS40NC4yNDlsLTEuNjU0IDUuMjA3Yy0yLjgzOC4wMzQtNS40MDkuNzk4LTcuMyAyLjAyNS0uNDc0LS40MzgtMS4xMDMtLjcxMi0xLjc5OS0uNzEyLTEuNDY1IDAtMi42NTYgMS4xODctMi42NTYgMi42NDYgMCAuOTcuNTMzIDEuODExIDEuMzE3IDIuMjcxLS4wNTIuMjgyLS4wODYuNTY3LS4wODYuODU3IDAgMy45MTEgNC44MDggNy4wOTMgMTAuNzE5IDcuMDkzczEwLjcyLTMuMTgyIDEwLjcyLTcuMDkzYzAtLjI3NC0uMDI5LS41NDQtLjA3NS0uODEuODMyLS40NDcgMS40MDUtMS4zMTIgMS40MDUtMi4zMTh6bS0xNy4yMjQgMS44MTZjMC0uODY4LjcxLTEuNTc1IDEuNTgyLTEuNTc1Ljg3MiAwIDEuNTgxLjcwNyAxLjU4MSAxLjU3NXMtLjcwOSAxLjU3NC0xLjU4MSAxLjU3NC0xLjU4Mi0uNzA2LTEuNTgyLTEuNTc0em05LjA2MSA0LjY2OWMtLjc5Ny43OTMtMi4wNDggMS4xNzktMy44MjQgMS4xNzlsLS4wMTMtLjAwMy0uMDEzLjAwM2MtMS43NzcgMC0zLjAyOC0uMzg2LTMuODI0LTEuMTc5LS4xNDUtLjE0NC0uMTQ1LS4zNzkgMC0uNTIzLjE0NS0uMTQ1LjM4MS0uMTQ1LjUyNiAwIC42NS42NDcgMS43MjkuOTYxIDMuMjk4Ljk2MWwuMDEzLjAwMy4wMTMtLjAwM2MxLjU2OSAwIDIuNjQ4LS4zMTUgMy4yOTgtLjk2Mi4xNDUtLjE0NS4zODEtLjE0NC41MjYgMCAuMTQ1LjE0NS4xNDUuMzc5IDAgLjUyNHptLS4xODktMy4wOTVjLS44NzIgMC0xLjU4MS0uNzA2LTEuNTgxLTEuNTc0IDAtLjg2OC43MDktMS41NzUgMS41ODEtMS41NzVzMS41ODEuNzA3IDEuNTgxIDEuNTc1LS43MDkgMS41NzQtMS41ODEgMS41NzR6Ii8+PC9zdmc+" />
                                </a>
                            </div>
                            <div className="blog__body__post">
                                <div className="blog__body__post__content" dangerouslySetInnerHTML={{ __html: post.html }} />
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

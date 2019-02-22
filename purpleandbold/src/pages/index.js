import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

//components
// import Landing from '../components/Landing/Landing'
import HeroNew from '../components/Hero/HeroNew'
// import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
// import AboutOne from '../components/AboutOne/AboutOne'
import About from '../components/About/About'
// import Testimonials from '../components/Testimonials/Testimonials'
import TestimonialsNew from '../components/Testimonials/TestimonialsNew'
import Portfolio from '../components/Portfolio/Portfolio'
import BlogFeature from '../components/Blog/BlogFeature/BlogFeature'
import Spacer from '../components/utility/Spacer/Spacer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      didScroll: false,
    }
    this.didScroll = this.didScroll.bind(this)
  }
  didScroll() {
    this.setState({ didScroll: true })
  }
  componentDidMount() {
    this.testFunction()
  }
  testFunction() {
    console.log(this.props)
  }
  render() {
    const data = this.props.data.allMarkdownRemark.edges[0].node
    return (
      <div>
        <SEO />
        {/* <Landing didScroll={this.didScroll} /> */}
        <Layout didScroll={this.state.didScroll}>
          <Spacer />
          <HeroNew />
          <Spacer />
          <About />
          <Spacer />
          <Services />
          <Spacer />
          <BlogFeature
            title={data.frontmatter.title}
            description={data.frontmatter.description}
            author={data.frontmatter.author}
            date={data.frontmatter.date}
            img={data.frontmatter.featuredImage.childImageSharp.fluid}
            slug={data.fields.slug}
          />
          <Spacer />
          {/* <Hero /> */}
          {/* <AboutOne /> */}
          {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
          {/* <Testimonials /> */}
          <TestimonialsNew />
          <Spacer />
          <Portfolio />
          <Spacer />
          <Contact />
        </Layout>
      </div>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { featured: { eq: true } } }) {
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

export default IndexPage

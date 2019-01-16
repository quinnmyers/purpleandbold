import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

//components
import Landing from '../components/Landing/Landing'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'
import Portfolio from '../components/Portfolio/Portfolio'

const IndexPage = () => (
  <div>
    <Landing />
    <Layout>
      <Hero />
      <About />
      <Services />
      {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
      <Testimonials />
      <Portfolio />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage

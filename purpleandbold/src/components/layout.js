import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

//components
import Navigation from './Layout/Navigation/Navigation'
import Footer from './Layout/Footer/Footer'

const Layout = ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
  // <StaticQuery
  //   query={graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `}
  //   render={data => (
  //     <>
  //       <Header siteTitle={data.site.siteMetadata.title} />
  //       <div>
  //         {children}
  //         <footer>
  //           © {new Date().getFullYear()}, Built with
  //           {` `}
  //           <a href="https://www.gatsbyjs.org">Gatsby</a>
  //         </footer>
  //       </div>
  //     </>
  //   )}
  // />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import { Link } from 'gatsby'
import AuditHero from '../components/audit_page/auditHero/auditHero'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AuditCopy from '../components/audit_page/auditCopy/auditCopy'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <AuditHero />
    <AuditCopy />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default SecondPage

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/contact.css'
import { Row, Col, Grid } from 'react-bootstrap'

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <Grid>
      <div className="contacts-main">
        <Row>
          <Col xs={12} md={6}>
            <div className="contact-info">
              <h1>Park Slope Colonics</h1>
              <p>
                <i class="fas fa-phone" /> 917-654-2345
              </p>
              <p>
                <i class="far fa-envelope" /> reach.elena.bykova@gmail.com
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="my-maps" />
          </Col>
        </Row>
      </div>
    </Grid>
  </Layout>
)

export default Contact

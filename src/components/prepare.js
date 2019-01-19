import React from 'react'

import '../styles/about.css'
import { Row, Col, Grid } from 'react-bootstrap'

import { FaRegCheckSquare } from 'react-icons/fa'

const Prepare = () => (
  <Grid id="how-to-prepare">
    <div className="main-div-colon picture-about">
      <div className="opacity-dive">
        <Row>
          <Col xs={4} md={4} />
          <Col xs={8} md={8}>
            <div className="white-bckgrnd-about">
              <Row>
                <Col xs={12} md={12}>
                  <div className="about-colon">
                    <h1>HOW TO PREPARE</h1>
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <div>
                    <p className="info-about-colon">What to do:</p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> Stay properly hydrated.
                    </p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> Drink plenty of water and green
                      vegetable juices.
                    </p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> it'll help to hydrate the body ad
                      loosen the waste.
                    </p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> Avoid caffein, alcohol and tobacco.
                    </p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> s it dehydrates the body and creates
                      inflammation.
                    </p>
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <div>
                    <p className="info-about-colon">What not to do:</p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> Stay properly hydrated.
                    </p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> Drink plenty of water and green
                      vegetable juices.
                    </p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> it'll help to hydrate the body ad
                      loosen the waste.
                    </p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> Avoid caffein, alcohol and tobacco.
                    </p>
                    <p className="info-about-colon">
                      <FaRegCheckSquare /> s it dehydrates the body and creates
                      inflammation.
                    </p>
                  </div>
                </Col>
                <div className="mk-app-btn">
                  <button className="app-btn">BOOK NOW</button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </Grid>
)

export default Prepare

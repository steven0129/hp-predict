import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { observable } from 'mobx'
import Page from '../layouts/main'
import Header from '../components/Header.js'
import Jumbotrn from '../components/Jumbotron.js'

var state = observable({
  nav: {
    inverse: true,
    navHeader: 'HP predict',
    navItems: [
      '首頁', '房市現況'
    ]
  }
})


export default () => (
  <Page>

    <Header state={state} />

    <Grid>
      <Row className="show-grid">
        <Col xs={24} md={24}><Jumbotrn state={state} /></Col>
      </Row>
    </Grid>
  </Page>
)

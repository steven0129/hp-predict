import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { observable } from 'mobx'
import Page from '../layouts/main'
import Header from '../components/Header.js'
import Map from '../components/Map.js'

export default () => (
  < Page >

    <Header />
    <Map />

  </Page >
)

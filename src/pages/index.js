// eslint-disable-next-line filenames/match-exported
import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { connect } from 'react-redux'
import {
  PageWithSidebar,
  PageWithHeader,
  TopNav,
  Button,
  Image,
  Box,
} from 'bumbag'
import {
  GoogleMap,
  HeatmapLayer
} from '@react-google-maps/api'

import  ExampleHeatmap  from '../examples/example-heatmap'

import Info from '../components/info'
import Settings from '../components/settings'
import GoogleMaps from '../components/google-maps'
import NoMaps from '../components/no-maps'
// import { shapeExampleStyles } from './styles'

const IndexPage = ({ googleMapsApiKey, loadScriptChecked }) => (
  <PageWithHeader
    header={
      <TopNav>
        <TopNav.Section>
          <TopNav.Item href='https://evo.ngrok.io' fontWeight='semibold'>
            <Image src='../assets/pin.svg' height='44px' />
          </TopNav.Item>
          <TopNav.Item href='#'>Get started</TopNav.Item>
          <TopNav.Item href='#'>Map</TopNav.Item>
          <TopNav.Item href='#'>pg3</TopNav.Item>
        </TopNav.Section>
        <TopNav.Section marginRight='major-2'>
          <TopNav.Item>
            <Button variant='ghost' palette='primary'>
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette='primary'>Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    }
    border='default'
  >
    <PageWithSidebar sidebar={<Box padding='major-2'>This is a sidebar</Box>}>
      <Box padding='major-2'>
        asdf
      </Box>
    </PageWithSidebar>
  </PageWithHeader>
)

IndexPage.propTypes = {
  googleMapsApiKey: PropTypes.string.isRequired,
  loadScriptChecked: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  loadScriptChecked: state.getIn(['app', 'loadScriptChecked']),
  googleMapsApiKey: state.getIn(['app', 'googleMapsApiKey']),
})

export default connect(mapStateToProps)(IndexPage)

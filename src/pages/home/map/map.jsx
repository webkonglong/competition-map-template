import React from 'react'
import Component from '@/Component'
import mapboxgl from 'mapbox-gl'
import Loading from '@/components/Loading'
import styles from './map.scss'

class Map extends Component {
  map = null

  state = {
    mapload: false
  }

  componentDidMount () {
    this.initMap()
  }

  initMap () {
    mapboxgl.accessToken = 'null'

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'https://maps.tilehosting.com/c/adbc36eb-6765-4278-8c1a-b14fa25d0ae2/styles/basic-dark/style.json?key=eT7rAVG6glnuTf9iWHbK',
      center: [116.478515, 39.889992],
      width: '100%',
      height: '100%',
      zoom: 9
    })
    this.map.on('load', () => {
      this.mapLoad()
    })
  }

  mapLoad () {
    this.map.resize()
    this.setState({ mapload: true })
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.mapload && <Loading isMap />}
        <div className="g-absolute-fill"><div id="map" className={styles.map} /></div>
      </React.Fragment>
    )
  }
}

export default Map

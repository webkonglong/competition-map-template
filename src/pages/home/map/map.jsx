import React from 'react'
import { render } from 'react-dom'
import Component from '@/Component'
import mapboxgl from 'mapbox-gl'
import Loading from '@/components/Loading'
import Popup from './popup'
import amapLocation from './amapLocation'
import styles from './map.scss'

class Map extends Component {
  // 地图
  map = null
  // 我的坐标 类似array
  myLocation = null
  // 我的位置的icon
  myLocationComp = null
  // popup
  popupComp = null

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
    amapLocation.getMyLocatio(resp => {
      this.myLocation = resp
      this.moveMapCenterPoint()
    }, err => {
      console.log(err)
    })
  }

  moveMapCenterPoint () {
    this.map.flyTo({ center: this.myLocation, zoom: 13 })
    this.createMyMarker()
    this.createPupup()
  }

  createMyMarker () {
    this.myLocationComp = new mapboxgl.Marker(this.markerElement())
    this.myLocationComp.setLngLat(this.myLocation).addTo(this.map)
  }

  markerElement () {
    const container = document.createElement('div')
    const iNode = document.createElement('i')
    container.className = 'g-my-location-comp'
    iNode.className = 'icon icon-location'
    container.appendChild(iNode)
    return container
  }

  createPupup() {
    this.popupComp = new mapboxgl.Popup({
      offset: 25,
      closeButton: false,
      closeOnClick: false,
      className: 'g-popup'
    }).setDOMContent(this.popupElement())

    this.popupComp.setLngLat(this.myLocation).addTo(this.map)
  }

  popupElement () {
    const container = document.createElement('div')
    render(<Popup />, container)
    return container
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

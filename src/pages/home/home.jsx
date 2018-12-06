
import React from 'react'
import Component from '@/Component'
import styles from './home.scss'
import Map from './map'

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Map />
      </div>
    );
  }
}

export default Home

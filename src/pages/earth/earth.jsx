
import React from 'react'
import Component from '@/Component'
import Globe from './globe'
import styles from './earth.scss'

class Earth extends Component {
  state = {
    activeCountryCode: 'CHN',
    countriesPriceMap: {},
    thermodynamicChart: false
  }
  render() {
    return (
      <div className={styles.earth}>
        <Globe
          activeCountryCode={this.state.activeCountryCode}
          countryPrice={this.state.countriesPriceMap}
          thermodynamicChart={this.state.thermodynamicChart}
        />
      </div>
    );
  }
}

export default Earth

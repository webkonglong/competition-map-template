
import React from 'react'
import Component from '@/Component'
import Globe from './globe'
import Select from '@/components/select'
import * as CountryCode from 'i18n-iso-countries'
import styles from './earth.scss'

CountryCode.registerLocale(require('i18n-iso-countries/langs/zh.json'))

class Earth extends Component {
  state = {
    activeCountryCode: null,
    countriesPriceMap: {},
    thermodynamicChart: false,
    allCountriesCodes: Object.keys(CountryCode.getAlpha3Codes())
  }

  getOptionText(countryCode) {
    // const locale = CountryCode.langs().includes(this.$i18n.locale) ? this.$i18n.locale : 'en';
    return CountryCode.getName(countryCode, 'zh');
  }

  changeSelect (value) {
    this.setState({ activeCountryCode: value })
  }

  render() {
    return (
      <div className={styles.earth}>
        <div className={styles.countrySelect}>
          <Select
            list={this.state.allCountriesCodes}
            getOptionText={this.getOptionText}
            change={this.changeSelect.bind(this)}
            defaultValue="Filter Country or Region"
          />
        </div>
        <Globe
          value={this.state.activeCountryCode}
          countryPrice={this.state.countriesPriceMap}
          thermodynamicChart={this.state.thermodynamicChart}
        />
      </div>
    );
  }
}

export default Earth


import React from 'react'
import Component from '@/Component'
import styles from './home.scss'
import TronWeb from 'tronweb'
import Map from './map'

class Home extends Component {
  tronWeb = null
  componentDidMount () {
    const HttpProvider = TronWeb.providers.HttpProvider
    const fullNode = new HttpProvider('https://api.trongrid.io')
    const solidityNode = new HttpProvider('https://api.trongrid.io')
    const eventServer = 'https://api.trongrid.io/'
    const privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'
    this.tronWeb = new TronWeb(
      fullNode,
      solidityNode,
      eventServer,
      privateKey
    )

    this.getBalance()
  }

  getBalance () {
    this.tronWeb.trx.getBalance(window.tronWeb.defaultAddress.base58).then(balance => {
      console.log({balance});
    }).catch(err => console.error(err))
  }
  render() {
    return (
      <div className={styles.home}>
        <Map />
      </div>
    );
  }
}

export default Home

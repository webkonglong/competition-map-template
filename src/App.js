// @flow
import React from 'react'
import Component from '@/Component'
import api from 'api'

class App extends Component {
  componentWillMount () {
    const result = api.setTronWeb(window.tronWeb)
    if (!result) {
      console.log('Tron Wallet Needed or You Need Unlock Your Wallet')
    }
    const tronWebState = {
      installed: !!window.tronWeb,
      loggedIn: window.tronWeb && window.tronWeb.ready
    }

    console.log(tronWebState)
  }

  render () {
    return <div>
      {this.props.children}
    </div>
  }
}

export default App

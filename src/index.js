import React from 'react'
import Global from 'Global'
import { render, unmountComponentAtNode } from 'react-dom'
import './theme/app.global.scss'
import 'prototypeExtend'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'

const configureStore = require('./store/configureStore')
const store = configureStore.default.configureStore()
const history = configureStore.default.history

const waitForGlobal = async () => {
  if (window.tronWeb) {
    const tronWeb = window.tronWeb
    const nodes = await tronWeb.isConnected()
    const connected = !Object.entries(nodes).map(([key, value]) => {
      if (!value) {
        console.error(`Error: ${key} is not connected`)
      }
      return value
    }).includes(false)
    if (connected) {
      render(
        <AppContainer>
          <Root store={store} history={history} />
        </AppContainer>,
        document.getElementById('root')
      )
    } else {
      console.error('Error: TRON node is not connected')
      console.error('wait for tronLink')
      setTimeout(async () => {
        await waitForGlobal()
      }, 100)
    }
  } else {
    console.error('wait for tronLink')
    setTimeout(async () => {
      await waitForGlobal()
    }, 100)
  }
}

waitForGlobal().then()

Global.on('language.index', () => {
  unmountComponentAtNode(document.getElementById('root'))
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
})


registerServiceWorker()

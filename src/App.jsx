import * as Redstone from '@prohetamine/redstone'
//import * as Redstone from '/Users/stas/Desktop/redstone'
import { Outlet } from 'react-router'

import {
    Body,
    WalletButton,
    Navigation,
} from './components.jsx'

const App = () => {
  const { isConnected, open } = Redstone.useApp()

  return (
    <Body>
      <WalletButton onClick={() => open()}>{isConnected ? 'wallet' : 'connect'}</WalletButton>
      <Navigation />
      <Outlet />
    </Body>
  )
}

export default App
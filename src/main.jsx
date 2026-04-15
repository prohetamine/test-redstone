import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StasPayProvider } from 'stas-pay'
import { BrowserRouter, Routes, Route } from 'react-router'
//import { RedstoneProvider } from '/Users/stas/Desktop/redstone'
import { RedstoneProvider } from '@prohetamine/redstone'
import './index.css'

import App from './App.jsx'
import UseNote from './routers/UseNote.jsx'
import UseReadNote from './routers/UseReadNote.jsx'
import UseReadListItem from './routers/UseReadListItem.jsx'
import UseList from './routers/UseList.jsx'
import UseCounter from './routers/UseCounter.jsx'
import UseCertificate from './routers/UseCertificate.jsx'
import { UseReadStatistics } from './components.jsx'

const config = {
  metadata: {
    name: 'Redstone',
    description: 'Redstone examples',
    url: 'https://redstone.prohetamine.ru',
    icons: ['https://redstone.prohetamine.ru/icon.svg']
  },
  projectId: '1febfd92481d4ea997711d2ac4a363c0',
  host: '/test-redstone-testnet/'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RedstoneProvider config={config}>
      <StasPayProvider>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<UseNote />} />
              <Route path='/use-read-note' element={<UseReadNote />} />
              <Route path='/use-list' element={<UseList />} />
              <Route path='/use-read-list-item' element={<UseReadListItem />} />
              <Route path='/use-counter' element={<UseCounter />} />
              <Route path='/use-read-statistics' element={<UseReadStatistics />} />
              <Route path='/use-certificate' element={<UseCertificate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StasPayProvider>
    </RedstoneProvider>
  </StrictMode>
)
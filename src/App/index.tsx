import React, { FC } from 'react'
import './index.css'
import OrderBook from '../OrderBook'

const App: FC = React.memo(() => {
  return (
    <div className="app">
      <OrderBook />
    </div>
  )
})

export default App

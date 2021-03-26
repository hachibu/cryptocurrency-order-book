import React, { FC, useState, useEffect } from 'react'
import './index.scss'
import { currencyOptions } from './utils'
import { Data } from './types'
import OrderBookTable from '../OrderBookTable'
import BitstampWebSocket from '../BitstampWebSocket'

function rowShouldUpdate(newRow: [string, string], oldRow: [string, string, boolean]): boolean {
  return !oldRow ? true : newRow[0] !== oldRow[0] || newRow[1] !== oldRow[1]
}

const OrderBook: FC = React.memo(() => {
  const [data, setData] = useState<Data>({ asks: [], bids: [] })
  const [currencyPair, setCurrencyPair] = useState('btcusd')

  useEffect(() => {
    const ws = new BitstampWebSocket()

    ws.onOpen(() => ws.subscribe({ channel: `order_book_${currencyPair}` }))

    ws.onMessage(event => {
      const msg = JSON.parse(event.data)
      if (msg.event === 'data') {
        setData(data => {
          let newData: Data = {
            asks: [],
            bids: []
          }
          for (let i = 0; i < 100; i++) {
            let newAsk: [string, string] = msg.data.asks[i]
            let newBid: [string, string] = msg.data.bids[i]
            newData.asks[i] = [...newAsk, rowShouldUpdate(newAsk, data.asks[i])]
            newData.bids[i] = [...newBid, rowShouldUpdate(newBid, data.bids[i])]
          }
          return newData
        })
      }
    })

    return () => ws.close()
  }, [currencyPair])

  return (
    <div className="text-white">
      <div className="d-flex align-items-center justify-content-between m-2">
        <h5 className="m-0">Cryptocurrency Order Book</h5>
        <div>
          <select value={currencyPair}
                  className="form-select form-select-sm"
                  onChange={(e) => setCurrencyPair(e.target.value)}>
            {currencyOptions.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex">
        <OrderBookTable side="bids" currencyPair={currencyPair} dataRows={data.bids} />
        <OrderBookTable side="asks" currencyPair={currencyPair} dataRows={data.asks} />
      </div>
    </div>
  )
})

export default OrderBook

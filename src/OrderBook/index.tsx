import React, { FC, useState, useEffect } from 'react'
import './index.css'
import { currencyOptions } from './utils'
import { Data } from './types'
import OrderBookTable from '../OrderBookTable'

function rowShouldUpdate(newRow: [string, string], oldRow: [string, string, boolean]): boolean {
  return !oldRow ? true : newRow[0] !== oldRow[0] || newRow[1] !== oldRow[1]
}

const OrderBook: FC = React.memo(() => {
  const [data, setData] = useState<Data>({ asks: [], bids: [] })
  const [currencyPair, setCurrencyPair] = useState('btcusd')

  useEffect(() => {
    const ws = new WebSocket('wss://ws.bitstamp.net')
    ws.onopen = () => {
      ws.send(JSON.stringify({
        event: 'bts:subscribe',
        data: { channel: `order_book_${currencyPair}` }
      }))
    }
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data)
      if (msg.event === 'bts:subscription_succeeded') {
      } else if (msg.event === 'data') {
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
      } else {
        ws.close()
      }
    }
    return () => ws.close()
  }, [currencyPair])

  return (
    <div className="order-book">
      <h3>
        <div>Select Currency Pair</div>
        <select value={currencyPair}
                onChange={(e) => setCurrencyPair(e.target.value)}>
          {currencyOptions.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </h3>
      <div className="order-book__tables">
        <OrderBookTable side="bids" currencyPair={currencyPair} dataRows={data.bids} />
        <OrderBookTable side="asks" currencyPair={currencyPair} dataRows={data.asks} />
      </div>
    </div>
  )
})

export default OrderBook

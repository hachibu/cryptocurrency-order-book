import React, { FC, useState, useEffect } from 'react'
import './index.css'
import { dataRowEq, currencyPairs } from './utils'
import { Data } from './types'
import OrderBookTable from './OrderBookTable'

const OrderBook: FC = (props) => {
  const [data, setData] = useState<Data>({ asks: [], bids: [] })
  const [currencyPair, setCurrencyPair] = useState('btcusd')
  const currencyPairOptions = currencyPairs.map(
    ([a, b]) => ({ value: a + b, label: a + '-' + b })
  )

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
      }
      else if (msg.event === 'data') {
        setData(data => {
          let newData: Data = {
            asks: [],
            bids: []
          }
          if (data.asks.length === 0 && data.bids.length === 0) {
            for (let i = 0; i < 100; i++) {
              let ask = msg.data.asks[i]
              let bid = msg.data.bids[i]
              newData.asks.push(ask.concat(true))
              newData.bids.push(bid.concat(true))
            }
          } else {
            newData.asks = [...data.asks]
            newData.bids = [...data.bids]
            for (let i = 0; i < 100; i++) {
              let ask = msg.data.asks[i]
              let bid = msg.data.bids[i]
              if (dataRowEq(ask, newData.asks[i])) {
                newData.asks[i][2] = false
              } else {
                newData.asks[i] = ask.concat(true)
              }
              if (dataRowEq(bid, newData.bids[i])) {
                newData.bids[i][2] = false
              } else {
                newData.bids[i] = bid.concat(true)
              }
            }
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
          {currencyPairOptions.map(({ value, label }) => (
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
}

export default OrderBook

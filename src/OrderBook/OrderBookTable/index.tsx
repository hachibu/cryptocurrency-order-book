import React, { FC } from 'react'
import { parseCurrencyPair } from '../utils'
import { DataRow } from '../types'

interface OrderBookTableProps {
  side: string
  currencyPair: string
  dataRows: DataRow[]
}

const OrderBookTable: FC<OrderBookTableProps> = (props) => {
  const [priceType, sizeType] = parseCurrencyPair(props.currencyPair)
  const headers = [`price (${priceType})`, `size (${sizeType})`]

  const getClassName = (changed: boolean): string => {
    if (changed) {
      return props.side === 'asks' ? 'flash-red' : 'flash-green'
    }
    return ''
  }

  return (
    <table className={`order-book__table order-book__table--${props.side}`}>
      <thead>
        <tr>
          <th colSpan={2}>{props.side}</th>
        </tr>
        <tr>
          {headers.map(header => (<th key={header}>
            {header}
          </th>))}
        </tr>
      </thead>
      <tbody>
        {props.dataRows.map(([price, size, changed], index) => (
          <tr key={index}>
            <td className={getClassName(changed)}>{price}</td>
            <td className="order-book__td order-book__td--size">{size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default OrderBookTable

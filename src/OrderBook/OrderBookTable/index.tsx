import React, { FC, useMemo } from 'react'
import { parseCurrencyPair } from '../utils'
import { DataRow } from '../types'

interface OrderBookTableProps {
  side: string
  currencyPair: string
  dataRows: DataRow[]
}

const OrderBookTable: FC<OrderBookTableProps> = React.memo((props) => {
  const [priceType, sizeType] = useMemo(
    () => parseCurrencyPair(props.currencyPair),
    [props.currencyPair]
  )

  const getClassName = (changed: boolean): string => {
    if (changed) {
      if (props.side === 'asks') {
        return 'flash-red'
      } else if (props.side === 'bids') {
        return 'flash-green'
      }
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
          <th>price ({priceType})</th>
          <th>size ({sizeType})</th>
        </tr>
      </thead>
      <tbody>
        {props.dataRows.map(([price, size, changed]) => (
          <tr key={price}>
            <td className={getClassName(changed)}>{price}</td>
            <td className="order-book__td order-book__td--size">{size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
})

export default OrderBookTable

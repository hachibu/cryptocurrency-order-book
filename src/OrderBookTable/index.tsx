import React, { FC, useMemo } from 'react'
import { parseCurrencyPair } from '../OrderBook/utils'
import { DataRow } from '../OrderBook/types'

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

  const getPriceClassName = (changed: boolean): string => {
    if (changed) {
      if (props.side === 'asks') {
        return 'flash-red'
      } else if (props.side === 'bids') {
        return 'flash-green'
      }
    }
    return ''
  }

  const getSizeClassName = (): string => {
    return props.side === 'bids' ? 'text-success' : 'text-danger'
  }

  return (
    <table className="table table-dark table-striped w-50">
      <thead>
        <tr>
          <th className="text-capitalize" colSpan={2}>{props.side}</th>
        </tr>
        <tr>
          <th>Price ({priceType})</th>
          <th>Size ({sizeType})</th>
        </tr>
      </thead>
      <tbody>
        {props.dataRows.map(([price, size, changed]) => (
          <tr key={price}>
            <td className={getPriceClassName(changed)}>{price}</td>
            <td className={getSizeClassName()}>{size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
})

export default OrderBookTable

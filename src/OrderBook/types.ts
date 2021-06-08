export type DataRow = [price: string, size: string, updated: boolean]

export type Data = Record<Side, DataRow[]> 

export type Side = 'asks' | 'bids'

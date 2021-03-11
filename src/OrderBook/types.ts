export type DataRow = [price: string, size: string, updated: boolean]

export interface Data {
  asks: DataRow[]
  bids: DataRow[]
}

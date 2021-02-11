export type DataRow = [number, number, boolean]

export interface Data {
  asks: DataRow[]
  bids: DataRow[]
}

export function parseCurrencyPair(currencyPair: string): [string, string] {
  const price = currencyPair.slice(3)
  const size = currencyPair.slice(0, 3)
  return [price.toUpperCase(), size.toUpperCase()]
}

export const currencyPairs: [string, string][] = [
  ['btc','usd'],
  ['btc','eur'],
  ['btc','gbp'],
  ['btc','pax'],
  ['btc','usdc'],
  ['gbp','usd'],
  ['gbp','eur'],
  ['eur','usd'],
  ['xrp','usd'],
  ['xrp','eur'],
  ['xrp','btc'],
  ['xrp','gbp'],
  ['xrp','pax'],
  ['ltc','usd'],
  ['ltc','eur'],
  ['ltc','btc'],
  ['ltc','gbp'],
  ['eth','usd'],
  ['eth','eur'],
  ['eth','btc'],
  ['eth','gbp'],
  ['eth','pax'],
  ['eth','usdc'],
  ['bch','usd'],
  ['bch','eur'],
  ['bch','btc'],
  ['bch','gbp'],
  ['pax','usd'],
  ['pax','eur'],
  ['pax','gbp'],
  ['xlm','btc'],
  ['xlm','usd'],
  ['xlm','eur'],
  ['xlm','gbp'],
  ['link','usd'],
  ['link','eur'],
  ['link','gbp'],
  ['link','btc'],
  ['link','eth'],
  ['omg','usd'],
  ['omg','eur'],
  ['omg','gbp'],
  ['omg','btc'],
  ['usd','cusd'],
  ['usd','ceur']
]

export const currencyOptions = currencyPairs.map(
  ([a, b]) => ({ value: a + b, label: a + '-' + b })
)

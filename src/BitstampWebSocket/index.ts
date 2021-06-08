export default class BitstampWebSocket extends WebSocket {
  constructor() {
    super('wss://ws.bitstamp.net')
  }

  onOpen(handleOpen: () => void) {
    this.onopen = handleOpen
  }

  onMessage(handleMessage: (event: MessageEvent<any>) => void) {
    this.onmessage = handleMessage
  }

  subscribe(data: {}) {
    this.send(JSON.stringify({ event: 'bts:subscribe', data }))
  }
}

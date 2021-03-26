(this["webpackJsonpcryptocurrency-order-book"]=this["webpackJsonpcryptocurrency-order-book"]||[]).push([[0],{20:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),n=c(10),a=c.n(n),b=c(9),i=c(2);c(20);var u=[["btc","usd"],["btc","eur"],["btc","gbp"],["btc","pax"],["btc","usdc"],["gbp","usd"],["gbp","eur"],["eur","usd"],["xrp","usd"],["xrp","eur"],["xrp","btc"],["xrp","gbp"],["xrp","pax"],["ltc","usd"],["ltc","eur"],["ltc","btc"],["ltc","gbp"],["eth","usd"],["eth","eur"],["eth","btc"],["eth","gbp"],["eth","pax"],["eth","usdc"],["bch","usd"],["bch","eur"],["bch","btc"],["bch","gbp"],["pax","usd"],["pax","eur"],["pax","gbp"],["xlm","btc"],["xlm","usd"],["xlm","eur"],["xlm","gbp"],["link","usd"],["link","eur"],["link","gbp"],["link","btc"],["link","eth"],["omg","usd"],["omg","eur"],["omg","gbp"],["omg","btc"],["usd","cusd"],["usd","ceur"]].map((function(e){var t=Object(i.a)(e,2),c=t[0],s=t[1];return{value:c+s,label:c+"-"+s}})),d=c(0),o=r.a.memo((function(e){var t=Object(s.useMemo)((function(){return function(e){var t=e.slice(3),c=e.slice(0,3);return[t.toUpperCase(),c.toUpperCase()]}(e.currencyPair)}),[e.currencyPair]),c=Object(i.a)(t,2),r=c[0],n=c[1],a=function(t){if(t){if("asks"===e.side)return"flash--red";if("bids"===e.side)return"flash--green"}return""};return Object(d.jsxs)("table",{className:"order-book-table table table-dark table-striped w-50",children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("tr",{children:Object(d.jsx)("th",{className:"text-capitalize",colSpan:2,children:e.side})}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{children:["Price (",r,")"]}),Object(d.jsxs)("th",{children:["Size (",n,")"]})]})]}),Object(d.jsx)("tbody",{children:e.dataRows.map((function(t){var c=Object(i.a)(t,3),s=c[0],r=c[1],n=c[2];return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:a(n),children:s}),Object(d.jsx)("td",{className:"bids"===e.side?"text-success":"text-danger",children:r})]},s)}))})]})})),l=c(11),j=c(12),h=c(13),p=c(14),x=c(15),O=function(e){Object(h.a)(c,e);var t=Object(p.a)(c);function c(){return Object(l.a)(this,c),t.call(this,"wss://ws.bitstamp.net")}return Object(j.a)(c,[{key:"onOpen",value:function(e){this.onopen=e}},{key:"onMessage",value:function(e){this.onmessage=e}},{key:"subscribe",value:function(e){this.send(JSON.stringify({event:"bts:subscribe",data:e}))}}]),c}(Object(x.a)(WebSocket));function f(e,t){return!t||(e[0]!==t[0]||e[1]!==t[1])}var m=r.a.memo((function(){var e=Object(s.useState)({asks:[],bids:[]}),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)("btcusd"),a=Object(i.a)(n,2),l=a[0],j=a[1];return Object(s.useEffect)((function(){var e=new O;return e.onOpen((function(){return e.subscribe({channel:"order_book_".concat(l)})})),e.onMessage((function(e){var t=JSON.parse(e.data);"data"===t.event&&r((function(e){for(var c={asks:[],bids:[]},s=0;s<100;s++){var r=t.data.asks[s],n=t.data.bids[s];c.asks[s]=[].concat(Object(b.a)(r),[f(r,e.asks[s])]),c.bids[s]=[].concat(Object(b.a)(n),[f(n,e.bids[s])])}return c}))})),function(){return e.close()}}),[l]),Object(d.jsxs)("div",{className:"text-white",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center justify-content-between m-2",children:[Object(d.jsx)("h5",{className:"m-0",children:"Cryptocurrency Order Book"}),Object(d.jsx)("div",{children:Object(d.jsx)("select",{value:l,className:"form-select form-select-sm",onChange:function(e){return j(e.target.value)},children:u.map((function(e){var t=e.value,c=e.label;return Object(d.jsx)("option",{value:t,children:c},t)}))})})]}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)(o,{side:"bids",currencyPair:l,dataRows:c.bids}),Object(d.jsx)(o,{side:"asks",currencyPair:l,dataRows:c.asks})]})]})})),v=r.a.memo((function(){return Object(d.jsx)(m,{})}));c(22);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ee090197.chunk.js.map
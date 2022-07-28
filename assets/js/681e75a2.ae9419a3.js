"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[57237],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"observe-data",title:"Observing data",sidebar_position:5},l="Observing new data",c={unversionedId:"developers/observe-data",id:"version-2.3/developers/observe-data",title:"Observing data",description:"Introduction",source:"@site/versioned_docs/version-2.3/02-developers/05-observe-data.md",sourceDirName:"02-developers",slug:"/developers/observe-data",permalink:"/2.3/developers/observe-data",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/05-observe-data.md",tags:[],version:"2.3",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:5,frontMatter:{id:"observe-data",title:"Observing data",sidebar_position:5},sidebar:"version-2.3/docs",previous:{title:"Application links",permalink:"/2.3/developers/queries/profiles/application-link"},next:{title:"F.A.Q",permalink:"/2.3/developers/faq"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Websocket",id:"websocket",level:2},{value:"Queries",id:"queries",level:3},{value:"Example",id:"example",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"observing-new-data"},"Observing new data"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Aside from querying data, you can also observe new data as its inserted inside the chain itself. In this way, you will be notified as soon as a transaction is properly executed without having to constantly polling the chain state by yourself. "),(0,a.kt)("h2",{id:"websocket"},"Websocket"),(0,a.kt)("p",null,"All the live data observation is done though the usage of a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"websocket"),". The endpoint of such websocket is the following: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ws://lcd-endpoint/websocket\n\n# Example\n# ws://morpheus1000.desmos.network/websocket\n")),(0,a.kt)("h3",{id:"queries"},"Queries"),(0,a.kt)("p",null,"In order to subscribe to specific events, you will need to send one or more messages to the websocket once you opened a connection to it. Such messages needs to contain the following JSON object and must be string encoded: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "subscribe",\n  "id": "0",\n  "params": {\n    "query": "<Query to send>"\n  }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," field can have the following values: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tm.event='NewBloc'")," if you want to observe each new block that is created (even empty ones)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tm.event='Tx'")," if you want to subscribe to all new transactions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message.action='<action>'")," if you want to subscribe to events emitted when a specific message is sent to the chain.\nIn this case, please refer to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Message action")," section on each transaction message\nspecification page to know what is the type associated to each message.")),(0,a.kt)("p",null,"Please note that if you want to subscribe to multiple events you will need to send multiple query messages upon connecting to the websocket. "),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "subscribe",\n  "id": "0",\n  "params": {\n    "query": "message.action=\'create_post\'"\n  }\n}\n')))}m.isMDXComponent=!0}}]);
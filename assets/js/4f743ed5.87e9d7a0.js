"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[42812],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>u});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),f=c(o),u=a,m=f["".concat(d,".").concat(u)]||f[u]||p[u]||n;return o?r.createElement(m,l(l({ref:t},i),{},{components:o})):r.createElement(m,l({ref:t},i))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<n;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},41325:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(87462),a=(o(67294),o(3905));const n={id:"block-stddev-pop-fields",title:"block_stddev_pop_fields",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/objects/block-stddev-pop-fields",id:"graphql/objects/block-stddev-pop-fields",title:"block_stddev_pop_fields",description:"aggregate stddev_pop on columns",source:"@site/docs/07-graphql/objects/block-stddev-pop-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/block-stddev-pop-fields",permalink:"/next/graphql/objects/block-stddev-pop-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/block-stddev-pop-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"block-stddev-pop-fields",title:"block_stddev_pop_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"block_stddev_fields",permalink:"/next/graphql/objects/block-stddev-fields"},next:{title:"block_stddev_samp_fields",permalink:"/next/graphql/objects/block-stddev-samp-fields"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>Float</code>)",id:"height-float",level:4},{value:"<code>num_txs</code> (<code>Float</code>)",id:"num_txs-float",level:4},{value:"<code>total_gas</code> (<code>Float</code>)",id:"total_gas-float",level:4}],i={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"aggregate stddev_pop on columns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type block_stddev_pop_fields {\n  height: Float\n  num_txs: Float\n  total_gas: Float\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"height-float"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"num_txs-float"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"num_txs"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"total_gas-float"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"total_gas"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"))}p.isMDXComponent=!0}}]);
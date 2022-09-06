"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[33260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=a.createContext({}),i=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(g.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,g=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(r),b=o,f=p["".concat(g,".").concat(b)]||p[b]||d[b]||n;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=p;var c={};for(var g in t)hasOwnProperty.call(t,g)&&(c[g]=t[g]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<n;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},96103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var a=r(87462),o=(r(67294),r(3905));const n={id:"block-aggregate",title:"block_aggregate",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/objects/block-aggregate",id:"graphql/objects/block-aggregate",title:"block_aggregate",description:'aggregated selection of "block"',source:"@site/docs/07-graphql/objects/block-aggregate.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/block-aggregate",permalink:"/next/graphql/objects/block-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/block-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"block-aggregate",title:"block_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"block_aggregate_fields",permalink:"/next/graphql/objects/block-aggregate-fields"},next:{title:"block_avg_fields",permalink:"/next/graphql/objects/block-avg-fields"}},g={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>aggregate</code> (<code>block_aggregate_fields</code>)",id:"aggregate-block_aggregate_fields",level:4},{value:"<code>nodes</code> (<code>[block!]!</code>)",id:"nodes-block",level:4}],s={toc:i};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'aggregated selection of "block"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type block_aggregate {\n  aggregate: block_aggregate_fields\n  nodes: [block!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"aggregate-block_aggregate_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/block-aggregate-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"block_aggregate_fields")),")"),(0,o.kt)("h4",{id:"nodes-block"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/block"},(0,o.kt)("inlineCode",{parentName:"a"},"[block!]!")),")"))}d.isMDXComponent=!0}}]);
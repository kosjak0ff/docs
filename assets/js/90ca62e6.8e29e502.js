"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[87948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=i,f=m["".concat(c,".").concat(h)]||m[h]||p[h]||r;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={id:"chain-link-max-fields",title:"chain_link_max_fields",hide_table_of_contents:!1},o=void 0,l={unversionedId:"graphql/objects/chain-link-max-fields",id:"graphql/objects/chain-link-max-fields",title:"chain_link_max_fields",description:"aggregate max on columns",source:"@site/docs/07-graphql/objects/chain-link-max-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/chain-link-max-fields",permalink:"/next/graphql/objects/chain-link-max-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/chain-link-max-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-max-fields",title:"chain_link_max_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_chain_config",permalink:"/next/graphql/objects/chain-link-chain-config"},next:{title:"chain_link_min_fields",permalink:"/next/graphql/objects/chain-link-min-fields"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_config_id</code> (<code>bigint</code>)",id:"chain_config_id-bigint",level:4},{value:"<code>creation_time</code> (<code>timestamp</code>)",id:"creation_time-timestamp",level:4},{value:"<code>external_address</code> (<code>String</code>)",id:"external_address-string",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>user_address</code> (<code>String</code>)",id:"user_address-string",level:4}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"aggregate max on columns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type chain_link_max_fields {\n  chain_config_id: bigint\n  creation_time: timestamp\n  external_address: String\n  height: bigint\n  id: Int\n  user_address: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"chain_config_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_config_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"creation_time-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,i.kt)("h4",{id:"external_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"external_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"height-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"user_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}p.isMDXComponent=!0}}]);
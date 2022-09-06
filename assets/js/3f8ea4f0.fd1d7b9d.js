"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[75838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,k=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"block-by-pk",title:"block_by_pk",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/subscriptions/block-by-pk",id:"graphql/subscriptions/block-by-pk",title:"block_by_pk",description:'fetch data from the table: "block" using primary key columns',source:"@site/docs/07-graphql/subscriptions/block-by-pk.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/block-by-pk",permalink:"/next/graphql/subscriptions/block-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/block-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"block-by-pk",title:"block_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"block_aggregate",permalink:"/next/graphql/subscriptions/block-aggregate"},next:{title:"block",permalink:"/next/graphql/subscriptions/block"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>height</code> (<code>bigint!</code>)",id:"height-bigint",level:4},{value:"Type",id:"type",level:3},{value:"<code>block</code>",id:"block",level:4}],s={toc:p};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch data from the table: "block" using primary key columns'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"block_by_pk(\n  height: bigint!\n): block\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"height-bigint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"block"},(0,o.kt)("a",{parentName:"h4",href:"../objects/block"},(0,o.kt)("inlineCode",{parentName:"a"},"block"))),(0,o.kt)("p",null,'columns and relationships of "block"'))}b.isMDXComponent=!0}}]);
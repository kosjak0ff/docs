"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[45674],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>f});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},_={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,u=s["".concat(p,".").concat(f)]||s[f]||_[f]||a;return n?t.createElement(u,i(i({ref:r},d),{},{components:n})):t.createElement(u,i({ref:r},d))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78497:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>_,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const a={id:"chain-link-proof-aggregate-order-by",title:"chain_link_proof_aggregate_order_by",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/inputs/chain-link-proof-aggregate-order-by",id:"version-4.2.0/graphql/inputs/chain-link-proof-aggregate-order-by",title:"chain_link_proof_aggregate_order_by",description:'order by aggregate values of table "chainlinkproof"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/chain-link-proof-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-proof-aggregate-order-by",permalink:"/graphql/inputs/chain-link-proof-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/chain-link-proof-aggregate-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-proof-aggregate-order-by",title:"chain_link_proof_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_order_by",permalink:"/graphql/inputs/chain-link-order-by"},next:{title:"chain_link_proof_bool_exp",permalink:"/graphql/inputs/chain-link-proof-bool-exp"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>chain_link_proof_max_order_by</code>)",id:"max-chain_link_proof_max_order_by",level:4},{value:"<code>min</code> (<code>chain_link_proof_min_order_by</code>)",id:"min-chain_link_proof_min_order_by",level:4}],d={toc:c};function _(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by aggregate values of table "chain_link_proof"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_proof_aggregate_order_by {\n  count: order_by\n  max: chain_link_proof_max_order_by\n  min: chain_link_proof_min_order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"count-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"max-chain_link_proof_max_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-max-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_max_order_by")),")"),(0,o.kt)("h4",{id:"min-chain_link_proof_min_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-min-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_min_order_by")),")"))}_.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[10421],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,h=u["".concat(l,".").concat(f)]||u[f]||s[f]||o;return n?t.createElement(h,i(i({ref:r},p),{},{components:n})):t.createElement(h,i({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85510:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(87462),a=(n(67294),n(3905));const o={id:"chain-link-proof-variance-order-by",title:"chain_link_proof_variance_order_by",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/chain-link-proof-variance-order-by",id:"graphql/inputs/chain-link-proof-variance-order-by",title:"chain_link_proof_variance_order_by",description:'order by variance() on columns of table "chainlinkproof"',source:"@site/docs/07-graphql/inputs/chain-link-proof-variance-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-proof-variance-order-by",permalink:"/next/graphql/inputs/chain-link-proof-variance-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-proof-variance-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-proof-variance-order-by",title:"chain_link_proof_variance_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_proof_var_samp_order_by",permalink:"/next/graphql/inputs/chain-link-proof-var-samp-order-by"},next:{title:"chain_link_set_input",permalink:"/next/graphql/inputs/chain-link-set-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_link_id</code> (<code>order_by</code>)",id:"chain_link_id-order_by",level:4},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4}],p={toc:d};function s(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by variance() on columns of table "chain_link_proof"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_proof_variance_order_by {\n  chain_link_id: order_by\n  height: order_by\n  id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"chain_link_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"height-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}s.isMDXComponent=!0}}]);
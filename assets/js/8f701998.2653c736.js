"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[84758],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>h});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),d=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,b=u["".concat(c,".").concat(h)]||u[h]||s[h]||i;return n?t.createElement(b,o(o({ref:r},p),{},{components:n})):t.createElement(b,o({ref:r},p))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57256:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(87462),a=(n(67294),n(3905));const i={id:"chain-link-avg-order-by",title:"chain_link_avg_order_by",hide_table_of_contents:!1},o=void 0,l={unversionedId:"graphql/inputs/chain-link-avg-order-by",id:"graphql/inputs/chain-link-avg-order-by",title:"chain_link_avg_order_by",description:'order by avg() on columns of table "chain_link"',source:"@site/docs/07-graphql/inputs/chain-link-avg-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-avg-order-by",permalink:"/next/graphql/inputs/chain-link-avg-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-avg-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-avg-order-by",title:"chain_link_avg_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_arr_rel_insert_input",permalink:"/next/graphql/inputs/chain-link-arr-rel-insert-input"},next:{title:"chain_link_bool_exp",permalink:"/next/graphql/inputs/chain-link-bool-exp"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_config_id</code> (<code>order_by</code>)",id:"chain_config_id-order_by",level:4},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4}],p={toc:d};function s(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by avg() on columns of table "chain_link"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_avg_order_by {\n  chain_config_id: order_by\n  height: order_by\n  id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"chain_config_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_config_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"height-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}s.isMDXComponent=!0}}]);
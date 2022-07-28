"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[72260],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return g}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(r),g=i,h=s["".concat(l,".").concat(g)]||s[g]||u[g]||a;return r?t.createElement(h,o(o({ref:n},p),{},{components:r})):t.createElement(h,o({ref:n},p))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},21120:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var t=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={id:"chain-link-chain-config-order-by",title:"chain_link_chain_config_order_by",hide_table_of_contents:!1},l=void 0,d={unversionedId:"graphql/inputs/chain-link-chain-config-order-by",id:"graphql/inputs/chain-link-chain-config-order-by",title:"chain_link_chain_config_order_by",description:'Ordering options when selecting data from "chainlinkchain_config".',source:"@site/docs/07-graphql/inputs/chain-link-chain-config-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-chain-config-order-by",permalink:"/next/graphql/inputs/chain-link-chain-config-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-chain-config-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"chain-link-chain-config-order-by",title:"chain_link_chain_config_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_chain_config_bool_exp",permalink:"/next/graphql/inputs/chain-link-chain-config-bool-exp"},next:{title:"chain_link_max_order_by",permalink:"/next/graphql/inputs/chain-link-max-order-by"}},p={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_links_aggregate</code> (<code>chain_link_aggregate_order_by</code>)",id:"chain_links_aggregate-chain_link_aggregate_order_by",level:4},{value:"<code>name</code> (<code>order_by</code>)",id:"name-order_by",level:4}],s={toc:u};function g(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "chain_link_chain_config".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_chain_config_order_by {\n  chain_links_aggregate: chain_link_aggregate_order_by\n  name: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"chain_links_aggregate-chain_link_aggregate_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_links_aggregate"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-aggregate-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_aggregate_order_by")),")"),(0,a.kt)("h4",{id:"name-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}g.isMDXComponent=!0}}]);
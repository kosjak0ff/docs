"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[33955],{3905:(n,e,i)=>{i.d(e,{Zo:()=>_,kt:()=>s});var o=i(67294);function a(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function t(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,o)}return i}function c(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?t(Object(i),!0).forEach((function(e){a(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function r(n,e){if(null==n)return{};var i,o,a=function(n,e){if(null==n)return{};var i,o,a={},t=Object.keys(n);for(o=0;o<t.length;o++)i=t[o],e.indexOf(i)>=0||(a[i]=n[i]);return a}(n,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(o=0;o<t.length;o++)i=t[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(a[i]=n[i])}return a}var l=o.createContext({}),p=function(n){var e=o.useContext(l),i=e;return n&&(i="function"==typeof n?n(e):c(c({},e),n)),i},_=function(n){var e=p(n.components);return o.createElement(l.Provider,{value:e},n.children)},h={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var i=n.components,a=n.mdxType,t=n.originalType,l=n.parentName,_=r(n,["components","mdxType","originalType","parentName"]),d=p(i),s=a,f=d["".concat(l,".").concat(s)]||d[s]||h[s]||t;return i?o.createElement(f,c(c({ref:e},_),{},{components:i})):o.createElement(f,c({ref:e},_))}));function s(n,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var t=i.length,c=new Array(t);c[0]=d;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=n,r.mdxType="string"==typeof n?n:a,c[1]=r;for(var p=2;p<t;p++)c[p]=i[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},84740:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>p});var o=i(87462),a=(i(67294),i(3905));const t={id:"chain-link-chain-config-bool-exp",title:"chain_link_chain_config_bool_exp",hide_table_of_contents:!1},c=void 0,r={unversionedId:"graphql/inputs/chain-link-chain-config-bool-exp",id:"graphql/inputs/chain-link-chain-config-bool-exp",title:"chain_link_chain_config_bool_exp",description:"Boolean expression to filter rows from the table \"chainlinkchain_config\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/chain-link-chain-config-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-chain-config-bool-exp",permalink:"/next/graphql/inputs/chain-link-chain-config-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-chain-config-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"chain-link-chain-config-bool-exp",title:"chain_link_chain_config_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_bool_exp",permalink:"/next/graphql/inputs/chain-link-bool-exp"},next:{title:"chain_link_chain_config_order_by",permalink:"/next/graphql/inputs/chain-link-chain-config-order-by"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[chain_link_chain_config_bool_exp!]</code>)",id:"_and-chain_link_chain_config_bool_exp",level:4},{value:"<code>_not</code> (<code>chain_link_chain_config_bool_exp</code>)",id:"_not-chain_link_chain_config_bool_exp",level:4},{value:"<code>_or</code> (<code>[chain_link_chain_config_bool_exp!]</code>)",id:"_or-chain_link_chain_config_bool_exp",level:4},{value:"<code>chain_links</code> (<code>chain_link_bool_exp</code>)",id:"chain_links-chain_link_bool_exp",level:4},{value:"<code>name</code> (<code>String_comparison_exp</code>)",id:"name-string_comparison_exp",level:4}],_={toc:p};function h(n){let{components:e,...i}=n;return(0,a.kt)("wrapper",(0,o.Z)({},_,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"chain_link_chain_config\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_chain_config_bool_exp {\n  _and: [chain_link_chain_config_bool_exp!]\n  _not: chain_link_chain_config_bool_exp\n  _or: [chain_link_chain_config_bool_exp!]\n  chain_links: chain_link_bool_exp\n  name: String_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-chain_link_chain_config_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-chain_link_chain_config_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-chain_link_chain_config_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_bool_exp!]")),")"),(0,a.kt)("h4",{id:"chain_links-chain_link_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_links"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"),(0,a.kt)("h4",{id:"name-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}h.isMDXComponent=!0}}]);
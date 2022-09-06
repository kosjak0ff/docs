"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[36900],{3905:(e,n,i)=>{i.d(n,{Zo:()=>_,kt:()=>p});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function c(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=t.createContext({}),h=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):c(c({},n),e)),i},_=function(e){var n=h(e.components);return t.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,_=o(e,["components","mdxType","originalType","parentName"]),s=h(i),p=a,d=s["".concat(l,".").concat(p)]||s[p]||g[p]||r;return i?t.createElement(d,c(c({ref:n},_),{},{components:i})):t.createElement(d,c({ref:n},_))}));function p(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,c=new Array(r);c[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var h=2;h<r;h++)c[h]=i[h];return t.createElement.apply(null,c)}return t.createElement.apply(null,i)}s.displayName="MDXCreateElement"},4129:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var t=i(87462),a=(i(67294),i(3905));const r={id:"chain-link-chain-config-aggregate",title:"chain_link_chain_config_aggregate",hide_table_of_contents:!1},c=void 0,o={unversionedId:"graphql/subscriptions/chain-link-chain-config-aggregate",id:"graphql/subscriptions/chain-link-chain-config-aggregate",title:"chain_link_chain_config_aggregate",description:'fetch aggregated fields from the table: "chainlinkchain_config"',source:"@site/docs/07-graphql/subscriptions/chain-link-chain-config-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/chain-link-chain-config-aggregate",permalink:"/next/graphql/subscriptions/chain-link-chain-config-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/chain-link-chain-config-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-chain-config-aggregate",title:"chain_link_chain_config_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_by_pk",permalink:"/next/graphql/subscriptions/chain-link-by-pk"},next:{title:"chain_link_chain_config_by_pk",permalink:"/next/graphql/subscriptions/chain-link-chain-config-by-pk"}},l={},h=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[chain_link_chain_config_select_column!]</code>)",id:"distinct_on-chain_link_chain_config_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[chain_link_chain_config_order_by!]</code>)",id:"order_by-chain_link_chain_config_order_by",level:4},{value:"<code>where</code> (<code>chain_link_chain_config_bool_exp</code>)",id:"where-chain_link_chain_config_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link_chain_config_aggregate</code>",id:"chain_link_chain_config_aggregate",level:4}],_={toc:h};function g(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},_,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch aggregated fields from the table: "chain_link_chain_config"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"chain_link_chain_config_aggregate(\n  distinct_on: [chain_link_chain_config_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [chain_link_chain_config_order_by!]\n  where: chain_link_chain_config_bool_exp\n): chain_link_chain_config_aggregate!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"distinct_on-chain_link_chain_config_select_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/chain-link-chain-config-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_select_column!]")),")"),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("h4",{id:"order_by-chain_link_chain_config_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_order_by!]")),")"),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("h4",{id:"where-chain_link_chain_config_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_bool_exp")),")"),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"chain_link_chain_config_aggregate"},(0,a.kt)("a",{parentName:"h4",href:"../objects/chain-link-chain-config-aggregate"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_aggregate"))),(0,a.kt)("p",null,'aggregated selection of "chain_link_chain_config"'))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[20012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,f=u["".concat(l,".").concat(p)]||u[p]||g[p]||s;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const s={id:"dtag-transfer-requests-aggregate",title:"dtag_transfer_requests_aggregate",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/subscriptions/dtag-transfer-requests-aggregate",id:"graphql/subscriptions/dtag-transfer-requests-aggregate",title:"dtag_transfer_requests_aggregate",description:'fetch aggregated fields from the table: "dtagtransferrequests"',source:"@site/docs/07-graphql/subscriptions/dtag-transfer-requests-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/dtag-transfer-requests-aggregate",permalink:"/next/graphql/subscriptions/dtag-transfer-requests-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/dtag-transfer-requests-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"dtag-transfer-requests-aggregate",title:"dtag_transfer_requests_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link",permalink:"/next/graphql/subscriptions/chain-link"},next:{title:"dtag_transfer_requests",permalink:"/next/graphql/subscriptions/dtag-transfer-requests"}},l={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[dtag_transfer_requests_select_column!]</code>)",id:"distinct_on-dtag_transfer_requests_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[dtag_transfer_requests_order_by!]</code>)",id:"order_by-dtag_transfer_requests_order_by",level:4},{value:"<code>where</code> (<code>dtag_transfer_requests_bool_exp</code>)",id:"where-dtag_transfer_requests_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>dtag_transfer_requests_aggregate</code>",id:"dtag_transfer_requests_aggregate",level:4}],c={toc:d};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch aggregated fields from the table: "dtag_transfer_requests"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"dtag_transfer_requests_aggregate(\n  distinct_on: [dtag_transfer_requests_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [dtag_transfer_requests_order_by!]\n  where: dtag_transfer_requests_bool_exp\n): dtag_transfer_requests_aggregate!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"distinct_on-dtag_transfer_requests_select_column"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/dtag-transfer-requests-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_select_column!]")),")"),(0,n.kt)("p",null,"distinct select on columns"),(0,n.kt)("h4",{id:"limit-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",{id:"offset-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",{id:"order_by-dtag_transfer_requests_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",{id:"where-dtag_transfer_requests_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"dtag_transfer_requests_aggregate"},(0,n.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-aggregate"},(0,n.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_aggregate"))),(0,n.kt)("p",null,'aggregated selection of "dtag_transfer_requests"'))}g.isMDXComponent=!0}}]);
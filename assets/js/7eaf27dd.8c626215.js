"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[55875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,_=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return r?n.createElement(_,o(o({ref:t},u),{},{components:r})):n.createElement(_,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},10583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={id:"dtag-transfer-requests-on-conflict",title:"dtag_transfer_requests_on_conflict",hide_table_of_contents:!1},o=void 0,c={unversionedId:"graphql/inputs/dtag-transfer-requests-on-conflict",id:"graphql/inputs/dtag-transfer-requests-on-conflict",title:"dtag_transfer_requests_on_conflict",description:'on conflict condition type for table "dtagtransferrequests"',source:"@site/docs/07-graphql/inputs/dtag-transfer-requests-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-on-conflict",permalink:"/next/graphql/inputs/dtag-transfer-requests-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/dtag-transfer-requests-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"dtag-transfer-requests-on-conflict",title:"dtag_transfer_requests_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_min_order_by",permalink:"/next/graphql/inputs/dtag-transfer-requests-min-order-by"},next:{title:"dtag_transfer_requests_order_by",permalink:"/next/graphql/inputs/dtag-transfer-requests-order-by"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>dtag_transfer_requests_constraint!</code>)",id:"constraint-dtag_transfer_requests_constraint",level:4},{value:"<code>update_columns</code> (<code>[dtag_transfer_requests_update_column!]!</code>)",id:"update_columns-dtag_transfer_requests_update_column",level:4},{value:"<code>where</code> (<code>dtag_transfer_requests_bool_exp</code>)",id:"where-dtag_transfer_requests_bool_exp",level:4}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'on conflict condition type for table "dtag_transfer_requests"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_on_conflict {\n  constraint: dtag_transfer_requests_constraint!\n  update_columns: [dtag_transfer_requests_update_column!]!\n  where: dtag_transfer_requests_bool_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"constraint-dtag_transfer_requests_constraint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/dtag-transfer-requests-constraint"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_constraint!")),")"),(0,a.kt)("h4",{id:"update_columns-dtag_transfer_requests_update_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/dtag-transfer-requests-update-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_update_column!]!")),")"),(0,a.kt)("h4",{id:"where-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp")),")"))}d.isMDXComponent=!0}}]);
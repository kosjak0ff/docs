"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32318],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>c});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(i.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(t),c=n,_=p["".concat(i,".").concat(c)]||p[c]||g[c]||s;return t?a.createElement(_,o(o({ref:r},u),{},{components:t})):a.createElement(_,o({ref:r},u))}));function c(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=p;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88134:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var a=t(87462),n=(t(67294),t(3905));const s={id:"dtag-transfer-requests-aggregate-order-by",title:"dtag_transfer_requests_aggregate_order_by",hide_table_of_contents:!1},o=void 0,d={unversionedId:"graphql/inputs/dtag-transfer-requests-aggregate-order-by",id:"version-4.2.0/graphql/inputs/dtag-transfer-requests-aggregate-order-by",title:"dtag_transfer_requests_aggregate_order_by",description:'order by aggregate values of table "dtagtransferrequests"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/dtag-transfer-requests-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-aggregate-order-by",permalink:"/graphql/inputs/dtag-transfer-requests-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/dtag-transfer-requests-aggregate-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"dtag-transfer-requests-aggregate-order-by",title:"dtag_transfer_requests_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_variance_order_by",permalink:"/graphql/inputs/chain-link-variance-order-by"},next:{title:"dtag_transfer_requests_bool_exp",permalink:"/graphql/inputs/dtag-transfer-requests-bool-exp"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>dtag_transfer_requests_max_order_by</code>)",id:"max-dtag_transfer_requests_max_order_by",level:4},{value:"<code>min</code> (<code>dtag_transfer_requests_min_order_by</code>)",id:"min-dtag_transfer_requests_min_order_by",level:4}],u={toc:l};function g(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by aggregate values of table "dtag_transfer_requests"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_aggregate_order_by {\n  count: order_by\n  max: dtag_transfer_requests_max_order_by\n  min: dtag_transfer_requests_min_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"count-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"max-dtag_transfer_requests_max_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-max-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_max_order_by")),")"),(0,n.kt)("h4",{id:"min-dtag_transfer_requests_min_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-min-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_min_order_by")),")"))}g.isMDXComponent=!0}}]);
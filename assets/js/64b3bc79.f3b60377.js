"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[72929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),u=a,m=g["".concat(i,".").concat(u)]||g[u]||d[u]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},33211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={id:"poll-answer-aggregate",title:"poll_answer_aggregate",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/queries/poll-answer-aggregate",id:"version-4.2.0/graphql/queries/poll-answer-aggregate",title:"poll_answer_aggregate",description:'fetch aggregated fields from the table: "poll_answer"',source:"@site/versioned_docs/version-4.2.0/07-graphql/queries/poll-answer-aggregate.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/poll-answer-aggregate",permalink:"/graphql/queries/poll-answer-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/queries/poll-answer-aggregate.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"poll-answer-aggregate",title:"poll_answer_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests",permalink:"/graphql/queries/dtag-transfer-requests"},next:{title:"poll_answer",permalink:"/graphql/queries/poll-answer"}},i={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[poll_answer_select_column!]</code>)",id:"distinct_on-poll_answer_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[poll_answer_order_by!]</code>)",id:"order_by-poll_answer_order_by",level:4},{value:"<code>where</code> (<code>poll_answer_bool_exp</code>)",id:"where-poll_answer_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>poll_answer_aggregate</code>",id:"poll_answer_aggregate",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch aggregated fields from the table: "poll_answer"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"poll_answer_aggregate(\n  distinct_on: [poll_answer_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [poll_answer_order_by!]\n  where: poll_answer_bool_exp\n): poll_answer_aggregate!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"distinct_on-poll_answer_select_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/poll-answer-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[poll_answer_select_column!]")),")"),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("h4",{id:"order_by-poll_answer_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[poll_answer_order_by!]")),")"),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("h4",{id:"where-poll_answer_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_bool_exp")),")"),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"poll_answer_aggregate"},(0,a.kt)("a",{parentName:"h4",href:"../objects/poll-answer-aggregate"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_aggregate"))),(0,a.kt)("p",null,'aggregated selection of "poll_answer"'))}d.isMDXComponent=!0}}]);
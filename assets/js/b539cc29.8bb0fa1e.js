"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=l(r),u=o,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},46003:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"post-aggregate",title:"post_aggregate",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/subscriptions/post-aggregate",id:"graphql/subscriptions/post-aggregate",title:"post_aggregate",description:'fetch aggregated fields from the table: "post"',source:"@site/docs/07-graphql/subscriptions/post-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/post-aggregate",permalink:"/next/graphql/subscriptions/post-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/post-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-aggregate",title:"post_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"poll_answer",permalink:"/next/graphql/subscriptions/poll-answer"},next:{title:"post_attachment_aggregate",permalink:"/next/graphql/subscriptions/post-attachment-aggregate"}},p={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[post_select_column!]</code>)",id:"distinct_on-post_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[post_order_by!]</code>)",id:"order_by-post_order_by",level:4},{value:"<code>where</code> (<code>post_bool_exp</code>)",id:"where-post_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_aggregate</code>",id:"post_aggregate",level:4}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch aggregated fields from the table: "post"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"post_aggregate(\n  distinct_on: [post_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_order_by!]\n  where: post_bool_exp\n): post_aggregate!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-post_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/post-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-post_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-post_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_aggregate"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-aggregate"},(0,o.kt)("inlineCode",{parentName:"a"},"post_aggregate"))),(0,o.kt)("p",null,'aggregated selection of "post"'))}d.isMDXComponent=!0}}]);
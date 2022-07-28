"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[57931],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),b=o,k=d["".concat(i,".").concat(b)]||d[b]||p[b]||l;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97714:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),a=["components"],c={id:"user-block",title:"user_block",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/queries/user-block",id:"version-4.1.0/graphql/queries/user-block",title:"user_block",description:'fetch data from the table: "user_block"',source:"@site/versioned_docs/version-4.1.0/07-graphql/queries/user-block.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/user-block",permalink:"/graphql/queries/user-block",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/queries/user-block.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"user-block",title:"user_block",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_aggregate",permalink:"/graphql/queries/user-block-aggregate"},next:{title:"application_link_oracle_request",permalink:"/graphql/subscriptions/application-link-oracle-request"}},u={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[user_block_select_column!]</code>)",id:"distinct_on-user_block_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[user_block_order_by!]</code>)",id:"order_by-user_block_order_by",level:4},{value:"<code>where</code> (<code>user_block_bool_exp</code>)",id:"where-user_block_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>user_block</code>",id:"user_block",level:4}],d={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'fetch data from the table: "user_block"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"user_block(\n  distinct_on: [user_block_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [user_block_order_by!]\n  where: user_block_bool_exp\n): [user_block!]!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"distinct_on-user_block_select_column"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,l.kt)("a",{parentName:"h4",href:"../enums/user-block-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_select_column!]")),")"),(0,l.kt)("p",null,"distinct select on columns"),(0,l.kt)("h4",{id:"limit-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"limit the number of rows returned"),(0,l.kt)("h4",{id:"offset-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,l.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,l.kt)("h4",{id:"order_by-user_block_order_by"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/user-block-order-by"},(0,l.kt)("inlineCode",{parentName:"a"},"[user_block_order_by!]")),")"),(0,l.kt)("p",null,"sort the rows by one or more columns"),(0,l.kt)("h4",{id:"where-user_block_bool_exp"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,l.kt)("a",{parentName:"h4",href:"../inputs/user-block-bool-exp"},(0,l.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp")),")"),(0,l.kt)("p",null,"filter the rows returned"),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"user_block"},(0,l.kt)("a",{parentName:"h4",href:"../objects/user-block"},(0,l.kt)("inlineCode",{parentName:"a"},"user_block"))),(0,l.kt)("p",null,'columns and relationships of "user_block"'))}b.isMDXComponent=!0}}]);
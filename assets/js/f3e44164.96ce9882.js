"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[72866],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37499:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={id:"post-reference",title:"post_reference",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/subscriptions/post-reference",id:"version-4.2.0/graphql/subscriptions/post-reference",title:"post_reference",description:'fetch data from the table: "post_reference"',source:"@site/versioned_docs/version-4.2.0/07-graphql/subscriptions/post-reference.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/post-reference",permalink:"/graphql/subscriptions/post-reference",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/subscriptions/post-reference.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-reference",title:"post_reference",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention",permalink:"/graphql/subscriptions/post-mention"},next:{title:"post_url",permalink:"/graphql/subscriptions/post-url"}},l={},f=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[post_reference_select_column!]</code>)",id:"distinct_on-post_reference_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[post_reference_order_by!]</code>)",id:"order_by-post_reference_order_by",level:4},{value:"<code>where</code> (<code>post_reference_bool_exp</code>)",id:"where-post_reference_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_reference</code>",id:"post_reference",level:4}],d={toc:f};function u(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch data from the table: "post_reference"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"post_reference(\n  distinct_on: [post_reference_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_reference_order_by!]\n  where: post_reference_bool_exp\n): [post_reference!]!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"distinct_on-post_reference_select_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/post-reference-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[post_reference_select_column!]")),")"),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("h4",{id:"order_by-post_reference_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[post_reference_order_by!]")),")"),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("h4",{id:"where-post_reference_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_bool_exp")),")"),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"post_reference"},(0,a.kt)("a",{parentName:"h4",href:"../objects/post-reference"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference"))),(0,a.kt)("p",null,'columns and relationships of "post_reference"'))}u.isMDXComponent=!0}}]);
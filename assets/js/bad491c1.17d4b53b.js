"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[87705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||s;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={id:"subspace",title:"subspace",hide_table_of_contents:!1},o=void 0,c={unversionedId:"graphql/queries/subspace",id:"version-4.2.0/graphql/queries/subspace",title:"subspace",description:'fetch data from the table: "subspace"',source:"@site/versioned_docs/version-4.2.0/07-graphql/queries/subspace.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace",permalink:"/graphql/queries/subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/queries/subspace.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace",title:"subspace",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission",permalink:"/graphql/queries/subspace-user-permission"},next:{title:"user_block_aggregate",permalink:"/graphql/queries/user-block-aggregate"}},i={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_select_column!]</code>)",id:"distinct_on-subspace_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_order_by!]</code>)",id:"order_by-subspace_order_by",level:4},{value:"<code>where</code> (<code>subspace_bool_exp</code>)",id:"where-subspace_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace</code>",id:"subspace",level:4}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch data from the table: "subspace"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace(\n  distinct_on: [subspace_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_order_by!]\n  where: subspace_bool_exp\n): [subspace!]!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"distinct_on-subspace_select_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/subspace-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_select_column!]")),")"),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("h4",{id:"order_by-subspace_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_order_by!]")),")"),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("h4",{id:"where-subspace_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"subspace"},(0,a.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))),(0,a.kt)("p",null,'columns and relationships of "subspace"'))}u.isMDXComponent=!0}}]);
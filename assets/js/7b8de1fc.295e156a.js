"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[86039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,_=u["".concat(c,".").concat(g)]||u[g]||l[g]||s;return r?a.createElement(_,i(i({ref:t},d),{},{components:r})):a.createElement(_,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"subspace-registered-reaction-aggregate",title:"subspace_registered_reaction_aggregate",hide_table_of_contents:!1},i=void 0,o={unversionedId:"graphql/subscriptions/subspace-registered-reaction-aggregate",id:"graphql/subscriptions/subspace-registered-reaction-aggregate",title:"subspace_registered_reaction_aggregate",description:'fetch aggregated fields from the table: "subspaceregisteredreaction"',source:"@site/docs/07-graphql/subscriptions/subspace-registered-reaction-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-registered-reaction-aggregate",permalink:"/next/graphql/subscriptions/subspace-registered-reaction-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/subspace-registered-reaction-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-registered-reaction-aggregate",title:"subspace_registered_reaction_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_free_text_params",permalink:"/next/graphql/subscriptions/subspace-free-text-params"},next:{title:"subspace_registered_reaction_by_pk",permalink:"/next/graphql/subscriptions/subspace-registered-reaction-by-pk"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_registered_reaction_select_column!]</code>)",id:"distinct_on-subspace_registered_reaction_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_registered_reaction_order_by!]</code>)",id:"order_by-subspace_registered_reaction_order_by",level:4},{value:"<code>where</code> (<code>subspace_registered_reaction_bool_exp</code>)",id:"where-subspace_registered_reaction_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_registered_reaction_aggregate</code>",id:"subspace_registered_reaction_aggregate",level:4}],d={toc:p};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch aggregated fields from the table: "subspace_registered_reaction"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_registered_reaction_aggregate(\n  distinct_on: [subspace_registered_reaction_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_registered_reaction_order_by!]\n  where: subspace_registered_reaction_bool_exp\n): subspace_registered_reaction_aggregate!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"distinct_on-subspace_registered_reaction_select_column"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/subspace-registered-reaction-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_select_column!]")),")"),(0,n.kt)("p",null,"distinct select on columns"),(0,n.kt)("h4",{id:"limit-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",{id:"offset-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",{id:"order_by-subspace_registered_reaction_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",{id:"where-subspace_registered_reaction_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"subspace_registered_reaction_aggregate"},(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction-aggregate"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_aggregate"))),(0,n.kt)("p",null,'aggregated selection of "subspace_registered_reaction"'))}l.isMDXComponent=!0}}]);
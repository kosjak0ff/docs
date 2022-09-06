"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[5403],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>_});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),_=a,b=u["".concat(c,".").concat(_)]||u[_]||l[_]||s;return t?n.createElement(b,i(i({ref:r},d),{},{components:t})):n.createElement(b,i({ref:r},d))}));function _(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66987:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={id:"subspace-registered-reaction",title:"subspace_registered_reaction",hide_table_of_contents:!1},i=void 0,o={unversionedId:"graphql/queries/subspace-registered-reaction",id:"version-4.2.0/graphql/queries/subspace-registered-reaction",title:"subspace_registered_reaction",description:'fetch data from the table: "subspaceregisteredreaction"',source:"@site/versioned_docs/version-4.2.0/07-graphql/queries/subspace-registered-reaction.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-registered-reaction",permalink:"/graphql/queries/subspace-registered-reaction",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/queries/subspace-registered-reaction.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-registered-reaction",title:"subspace_registered_reaction",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_params",permalink:"/graphql/queries/subspace-registered-reaction-params"},next:{title:"subspace_report_reason",permalink:"/graphql/queries/subspace-report-reason"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_registered_reaction_select_column!]</code>)",id:"distinct_on-subspace_registered_reaction_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_registered_reaction_order_by!]</code>)",id:"order_by-subspace_registered_reaction_order_by",level:4},{value:"<code>where</code> (<code>subspace_registered_reaction_bool_exp</code>)",id:"where-subspace_registered_reaction_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_registered_reaction</code>",id:"subspace_registered_reaction",level:4}],d={toc:p};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch data from the table: "subspace_registered_reaction"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_registered_reaction(\n  distinct_on: [subspace_registered_reaction_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_registered_reaction_order_by!]\n  where: subspace_registered_reaction_bool_exp\n): [subspace_registered_reaction!]!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"distinct_on-subspace_registered_reaction_select_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/subspace-registered-reaction-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_select_column!]")),")"),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("h4",{id:"order_by-subspace_registered_reaction_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_order_by!]")),")"),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("h4",{id:"where-subspace_registered_reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_bool_exp")),")"),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"subspace_registered_reaction"},(0,a.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction"))),(0,a.kt)("p",null,'columns and relationships of "subspace_registered_reaction"'))}l.isMDXComponent=!0}}]);
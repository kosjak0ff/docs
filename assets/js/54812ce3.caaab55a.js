"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[72086],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return _}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),_=a,b=u["".concat(c,".").concat(_)]||u[_]||l[_]||s;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67499:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return _},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={id:"subspace-registered-reaction",title:"subspace_registered_reaction",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/subscriptions/subspace-registered-reaction",id:"version-4.1.0/graphql/subscriptions/subspace-registered-reaction",title:"subspace_registered_reaction",description:'fetch data from the table: "subspaceregisteredreaction"',source:"@site/versioned_docs/version-4.1.0/07-graphql/subscriptions/subspace-registered-reaction.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-registered-reaction",permalink:"/graphql/subscriptions/subspace-registered-reaction",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/subscriptions/subspace-registered-reaction.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-registered-reaction",title:"subspace_registered_reaction",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_params",permalink:"/graphql/subscriptions/subspace-registered-reaction-params"},next:{title:"subspace_report_reason",permalink:"/graphql/subscriptions/subspace-report-reason"}},d={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_registered_reaction_select_column!]</code>)",id:"distinct_on-subspace_registered_reaction_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_registered_reaction_order_by!]</code>)",id:"order_by-subspace_registered_reaction_order_by",level:4},{value:"<code>where</code> (<code>subspace_registered_reaction_bool_exp</code>)",id:"where-subspace_registered_reaction_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_registered_reaction</code>",id:"subspace_registered_reaction",level:4}],u={toc:l};function _(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch data from the table: "subspace_registered_reaction"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_registered_reaction(\n  distinct_on: [subspace_registered_reaction_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_registered_reaction_order_by!]\n  where: subspace_registered_reaction_bool_exp\n): [subspace_registered_reaction!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_registered_reaction_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-registered-reaction-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_registered_reaction_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_registered_reaction_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_registered_reaction"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction"))),(0,s.kt)("p",null,'columns and relationships of "subspace_registered_reaction"'))}_.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22252],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return _}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),_=n,m=u["".concat(c,".").concat(_)]||u[_]||l[_]||s;return t?a.createElement(m,i(i({ref:r},d),{},{components:t})):a.createElement(m,i({ref:r},d))}));function _(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},157:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return _},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var a=t(87462),n=t(63366),s=(t(67294),t(3905)),i=["components"],o={id:"subspace-registered-reaction-params",title:"subspace_registered_reaction_params",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/subscriptions/subspace-registered-reaction-params",id:"graphql/subscriptions/subspace-registered-reaction-params",title:"subspace_registered_reaction_params",description:'fetch data from the table: "subspaceregisteredreaction_params"',source:"@site/docs/07-graphql/subscriptions/subspace-registered-reaction-params.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-registered-reaction-params",permalink:"/next/graphql/subscriptions/subspace-registered-reaction-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/subspace-registered-reaction-params.mdx",tags:[],version:"current",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-registered-reaction-params",title:"subspace_registered_reaction_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_params_by_pk",permalink:"/next/graphql/subscriptions/subspace-registered-reaction-params-by-pk"},next:{title:"subspace_registered_reaction",permalink:"/next/graphql/subscriptions/subspace-registered-reaction"}},d={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_registered_reaction_params_select_column!]</code>)",id:"distinct_on-subspace_registered_reaction_params_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_registered_reaction_params_order_by!]</code>)",id:"order_by-subspace_registered_reaction_params_order_by",level:4},{value:"<code>where</code> (<code>subspace_registered_reaction_params_bool_exp</code>)",id:"where-subspace_registered_reaction_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_registered_reaction_params</code>",id:"subspace_registered_reaction_params",level:4}],u={toc:l};function _(e){var r=e.components,t=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch data from the table: "subspace_registered_reaction_params"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_registered_reaction_params(\n  distinct_on: [subspace_registered_reaction_params_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_registered_reaction_params_order_by!]\n  where: subspace_registered_reaction_params_bool_exp\n): [subspace_registered_reaction_params!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_registered_reaction_params_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-registered-reaction-params-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_params_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_registered_reaction_params_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_params_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_registered_reaction_params_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_registered_reaction_params"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction-params"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params"))),(0,s.kt)("p",null,'columns and relationships of "subspace_registered_reaction_params"'))}_.isMDXComponent=!0}}]);
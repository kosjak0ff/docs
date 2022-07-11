"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1219],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,u=f["".concat(p,".").concat(d)]||f[d]||m[d]||o;return t?n.createElement(u,i(i({ref:r},c),{},{components:t})):n.createElement(u,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75759:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"profiles-params",title:"profiles_params",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/subscriptions/profiles-params",id:"version-4.1.0/graphql/subscriptions/profiles-params",title:"profiles_params",description:'fetch data from the table: "profiles_params"',source:"@site/versioned_docs/version-4.1.0/07-graphql/subscriptions/profiles-params.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/profiles-params",permalink:"/graphql/subscriptions/profiles-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/subscriptions/profiles-params.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"profiles-params",title:"profiles_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile",permalink:"/graphql/subscriptions/profile"},next:{title:"reaction_aggregate",permalink:"/graphql/subscriptions/reaction-aggregate"}},c={},m=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[profiles_params_select_column!]</code>)",id:"distinct_on-profiles_params_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[profiles_params_order_by!]</code>)",id:"order_by-profiles_params_order_by",level:4},{value:"<code>where</code> (<code>profiles_params_bool_exp</code>)",id:"where-profiles_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profiles_params</code>",id:"profiles_params",level:4}],f={toc:m};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch data from the table: "profiles_params"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"profiles_params(\n  distinct_on: [profiles_params_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profiles_params_order_by!]\n  where: profiles_params_bool_exp\n): [profiles_params!]!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-profiles_params_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/profiles-params-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[profiles_params_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-profiles_params_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[profiles_params_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-profiles_params_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"profiles_params_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"profiles_params"},(0,o.kt)("a",{parentName:"h4",href:"../objects/profiles-params"},(0,o.kt)("inlineCode",{parentName:"a"},"profiles_params"))),(0,o.kt)("p",null,'columns and relationships of "profiles_params"'))}d.isMDXComponent=!0}}]);
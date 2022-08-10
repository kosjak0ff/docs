"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[93505],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),i=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=i(e.components);return a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(t),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(f,p(p({ref:r},c),{},{components:t})):a.createElement(f,p({ref:r},c))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67773:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=t(87462),n=(t(67294),t(3905));const o={id:"reports-params",title:"reports_params",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/queries/reports-params",id:"graphql/queries/reports-params",title:"reports_params",description:'fetch data from the table: "reports_params"',source:"@site/docs/07-graphql/queries/reports-params.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/reports-params",permalink:"/next/graphql/queries/reports-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/reports-params.mdx",tags:[],version:"current",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"reports-params",title:"reports_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report",permalink:"/next/graphql/queries/report"},next:{title:"subspace_by_pk",permalink:"/next/graphql/queries/subspace-by-pk"}},l={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[reports_params_select_column!]</code>)",id:"distinct_on-reports_params_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[reports_params_order_by!]</code>)",id:"order_by-reports_params_order_by",level:4},{value:"<code>where</code> (<code>reports_params_bool_exp</code>)",id:"where-reports_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>reports_params</code>",id:"reports_params",level:4}],c={toc:i};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch data from the table: "reports_params"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"reports_params(\n  distinct_on: [reports_params_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [reports_params_order_by!]\n  where: reports_params_bool_exp\n): [reports_params!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"distinct_on-reports_params_select_column"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/reports-params-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[reports_params_select_column!]")),")"),(0,n.kt)("p",null,"distinct select on columns"),(0,n.kt)("h4",{id:"limit-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",{id:"offset-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",{id:"order_by-reports_params_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/reports-params-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[reports_params_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",{id:"where-reports_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/reports-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"reports_params_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"reports_params"},(0,n.kt)("a",{parentName:"h4",href:"../objects/reports-params"},(0,n.kt)("inlineCode",{parentName:"a"},"reports_params"))),(0,n.kt)("p",null,'columns and relationships of "reports_params"'))}m.isMDXComponent=!0}}]);
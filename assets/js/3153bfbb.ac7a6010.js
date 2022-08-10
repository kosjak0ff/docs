"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[86870],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),l=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,p(p({ref:r},c),{},{components:t})):o.createElement(f,p({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var l=2;l<a;l++)p[l]=t[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20493:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const a={id:"report-reason",title:"report_reason",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/subscriptions/report-reason",id:"version-4.1.0/graphql/subscriptions/report-reason",title:"report_reason",description:'fetch data from the table: "report_reason"',source:"@site/versioned_docs/version-4.1.0/07-graphql/subscriptions/report-reason.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/report-reason",permalink:"/4.1.0/graphql/subscriptions/report-reason",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/subscriptions/report-reason.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"report-reason",title:"report_reason",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_aggregate",permalink:"/4.1.0/graphql/subscriptions/report-aggregate"},next:{title:"report",permalink:"/4.1.0/graphql/subscriptions/report"}},i={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[report_reason_order_by!]</code>)",id:"order_by-report_reason_order_by",level:4},{value:"<code>where</code> (<code>report_reason_bool_exp</code>)",id:"where-report_reason_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>report_reason</code>",id:"report_reason",level:4}],c={toc:l};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch data from the table: "report_reason"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"report_reason(\n  limit: Int\n  offset: Int\n  order_by: [report_reason_order_by!]\n  where: report_reason_bool_exp\n): [report_reason!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"limit-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",{id:"offset-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",{id:"order_by-report_reason_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-reason-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[report_reason_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",{id:"where-report_reason_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-reason-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"report_reason_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"report_reason"},(0,n.kt)("a",{parentName:"h4",href:"../objects/report-reason"},(0,n.kt)("inlineCode",{parentName:"a"},"report_reason"))),(0,n.kt)("p",null,'columns and relationships of "report_reason"'))}d.isMDXComponent=!0}}]);
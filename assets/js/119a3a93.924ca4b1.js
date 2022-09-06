"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[38702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41136:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"insert-report-reason-one",title:"insert_report_reason_one",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/mutations/insert-report-reason-one",id:"graphql/mutations/insert-report-reason-one",title:"insert_report_reason_one",description:'insert a single row into the table: "report_reason"',source:"@site/docs/07-graphql/mutations/insert-report-reason-one.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-report-reason-one",permalink:"/next/graphql/mutations/insert-report-reason-one",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-report-reason-one.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-report-reason-one",title:"insert_report_reason_one",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_report_one",permalink:"/next/graphql/mutations/insert-report-one"},next:{title:"insert_report_reason",permalink:"/next/graphql/mutations/insert-report-reason"}},p={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>object</code> (<code>report_reason_insert_input!</code>)",id:"object-report_reason_insert_input",level:4},{value:"<code>on_conflict</code> (<code>report_reason_on_conflict</code>)",id:"on_conflict-report_reason_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>report_reason</code>",id:"report_reason",level:4}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'insert a single row into the table: "report_reason"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_report_reason_one(\n  object: report_reason_insert_input!\n  on_conflict: report_reason_on_conflict\n): report_reason\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"object-report_reason_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"object"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/report-reason-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"report_reason_insert_input!")),")"),(0,o.kt)("p",null,"the row to be inserted"),(0,o.kt)("h4",{id:"on_conflict-report_reason_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/report-reason-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"report_reason_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"report_reason"},(0,o.kt)("a",{parentName:"h4",href:"../objects/report-reason"},(0,o.kt)("inlineCode",{parentName:"a"},"report_reason"))),(0,o.kt)("p",null,'columns and relationships of "report_reason"'))}u.isMDXComponent=!0}}]);
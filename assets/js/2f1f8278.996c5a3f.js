"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[57798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,p(p({ref:t},c),{},{components:r})):o.createElement(f,p({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={id:"delete-report",title:"delete_report",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/mutations/delete-report",id:"graphql/mutations/delete-report",title:"delete_report",description:'delete data from the table: "report"',source:"@site/docs/07-graphql/mutations/delete-report.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-report",permalink:"/next/graphql/mutations/delete-report",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-report.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"delete-report",title:"delete_report",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_report_reason",permalink:"/next/graphql/mutations/delete-report-reason"},next:{title:"delete_reports_params_by_pk",permalink:"/next/graphql/mutations/delete-reports-params-by-pk"}},i={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>report_bool_exp!</code>)",id:"where-report_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>report_mutation_response</code>",id:"report_mutation_response",level:4}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'delete data from the table: "report"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_report(\n  where: report_bool_exp!\n): report_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"where-report_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"report_bool_exp!")),")"),(0,n.kt)("p",null,"filter the rows which have to be deleted"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"report_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/report-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"report_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "report"'))}d.isMDXComponent=!0}}]);
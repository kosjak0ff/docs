"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[64979],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),b=o,m=d["".concat(l,".").concat(b)]||d[b]||i[b]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>i,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"delete-subspace-report-reason",title:"delete_subspace_report_reason",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/mutations/delete-subspace-report-reason",id:"graphql/mutations/delete-subspace-report-reason",title:"delete_subspace_report_reason",description:'delete data from the table: "subspacereportreason"',source:"@site/docs/07-graphql/mutations/delete-subspace-report-reason.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-subspace-report-reason",permalink:"/next/graphql/mutations/delete-subspace-report-reason",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-subspace-report-reason.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"delete-subspace-report-reason",title:"delete_subspace_report_reason",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_subspace_report_reason_by_pk",permalink:"/next/graphql/mutations/delete-subspace-report-reason-by-pk"},next:{title:"delete_subspace_section_by_pk",permalink:"/next/graphql/mutations/delete-subspace-section-by-pk"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>subspace_report_reason_bool_exp!</code>)",id:"where-subspace_report_reason_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_report_reason_mutation_response</code>",id:"subspace_report_reason_mutation_response",level:4}],u={toc:c};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'delete data from the table: "subspace_report_reason"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_subspace_report_reason(\n  where: subspace_report_reason_bool_exp!\n): subspace_report_reason_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"where-subspace_report_reason_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_bool_exp!")),")"),(0,o.kt)("p",null,"filter the rows which have to be deleted"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"subspace_report_reason_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-report-reason-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "subspace_report_reason"'))}i.isMDXComponent=!0}}]);
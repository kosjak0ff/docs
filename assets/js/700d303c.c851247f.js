"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1214],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},_=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),_=i(t),d=o,b=_["".concat(c,".").concat(d)]||_[d]||u[d]||a;return t?n.createElement(b,s(s({ref:r},l),{},{components:t})):n.createElement(b,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=_;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},16877:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={id:"subspace-report-reason-on-conflict",title:"subspace_report_reason_on_conflict",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/subspace-report-reason-on-conflict",id:"graphql/inputs/subspace-report-reason-on-conflict",title:"subspace_report_reason_on_conflict",description:'on conflict condition type for table "subspacereportreason"',source:"@site/docs/07-graphql/inputs/subspace-report-reason-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-report-reason-on-conflict",permalink:"/next/graphql/inputs/subspace-report-reason-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-report-reason-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-report-reason-on-conflict",title:"subspace_report_reason_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_report_reason_obj_rel_insert_input",permalink:"/next/graphql/inputs/subspace-report-reason-obj-rel-insert-input"},next:{title:"subspace_report_reason_order_by",permalink:"/next/graphql/inputs/subspace-report-reason-order-by"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>subspace_report_reason_constraint!</code>)",id:"constraint-subspace_report_reason_constraint",level:4},{value:"<code>update_columns</code> (<code>[subspace_report_reason_update_column!]!</code>)",id:"update_columns-subspace_report_reason_update_column",level:4},{value:"<code>where</code> (<code>subspace_report_reason_bool_exp</code>)",id:"where-subspace_report_reason_bool_exp",level:4}],l={toc:i};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'on conflict condition type for table "subspace_report_reason"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_report_reason_on_conflict {\n  constraint: subspace_report_reason_constraint!\n  update_columns: [subspace_report_reason_update_column!]!\n  where: subspace_report_reason_bool_exp\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"constraint-subspace_report_reason_constraint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/subspace-report-reason-constraint"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_constraint!")),")"),(0,o.kt)("h4",{id:"update_columns-subspace_report_reason_update_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/subspace-report-reason-update-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason_update_column!]!")),")"),(0,o.kt)("h4",{id:"where-subspace_report_reason_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_bool_exp")),")"))}u.isMDXComponent=!0}}]);
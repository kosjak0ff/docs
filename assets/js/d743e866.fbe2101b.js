"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[78804],{3905:(e,r,o)=>{o.d(r,{Zo:()=>_,kt:()=>b});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=t.createContext({}),i=function(e){var r=t.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},_=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),d=i(o),b=n,u=d["".concat(s,".").concat(b)]||d[b]||c[b]||a;return o?t.createElement(u,p(p({ref:r},_),{},{components:o})):t.createElement(u,p({ref:r},_))}));function b(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var i=2;i<a;i++)p[i]=o[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8908:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var t=o(87462),n=(o(67294),o(3905));const a={id:"report-reason-bool-exp",title:"report_reason_bool_exp",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/inputs/report-reason-bool-exp",id:"version-4.2.0/graphql/inputs/report-reason-bool-exp",title:"report_reason_bool_exp",description:"Boolean expression to filter rows from the table \"report_reason\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/report-reason-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-reason-bool-exp",permalink:"/graphql/inputs/report-reason-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/report-reason-bool-exp.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"report-reason-bool-exp",title:"report_reason_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_reason_aggregate_order_by",permalink:"/graphql/inputs/report-reason-aggregate-order-by"},next:{title:"report_reason_order_by",permalink:"/graphql/inputs/report-reason-order-by"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[report_reason_bool_exp!]</code>)",id:"_and-report_reason_bool_exp",level:4},{value:"<code>_not</code> (<code>report_reason_bool_exp</code>)",id:"_not-report_reason_bool_exp",level:4},{value:"<code>_or</code> (<code>[report_reason_bool_exp!]</code>)",id:"_or-report_reason_bool_exp",level:4},{value:"<code>reason</code> (<code>subspace_report_reason_bool_exp</code>)",id:"reason-subspace_report_reason_bool_exp",level:4},{value:"<code>report</code> (<code>report_bool_exp</code>)",id:"report-report_bool_exp",level:4}],_={toc:i};function c(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},_,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boolean expression to filter rows from the table \"report_reason\". All fields are combined with a logical 'AND'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_reason_bool_exp {\n  _and: [report_reason_bool_exp!]\n  _not: report_reason_bool_exp\n  _or: [report_reason_bool_exp!]\n  reason: subspace_report_reason_bool_exp\n  report: report_bool_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"_and-report_reason_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-reason-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[report_reason_bool_exp!]")),")"),(0,n.kt)("h4",{id:"_not-report_reason_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-reason-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"report_reason_bool_exp")),")"),(0,n.kt)("h4",{id:"_or-report_reason_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-reason-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[report_reason_bool_exp!]")),")"),(0,n.kt)("h4",{id:"reason-subspace_report_reason_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_bool_exp")),")"),(0,n.kt)("h4",{id:"report-report_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"report"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"report_bool_exp")),")"))}c.isMDXComponent=!0}}]);
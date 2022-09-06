"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[85008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=d(r),u=o,g=f["".concat(c,".").concat(u)]||f[u]||s[u]||n;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<n;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=r(87462),o=(r(67294),r(3905));const n={id:"report-avg-fields",title:"report_avg_fields",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/objects/report-avg-fields",id:"graphql/objects/report-avg-fields",title:"report_avg_fields",description:"aggregate avg on columns",source:"@site/docs/07-graphql/objects/report-avg-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/report-avg-fields",permalink:"/next/graphql/objects/report-avg-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/report-avg-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"report-avg-fields",title:"report_avg_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_aggregate",permalink:"/next/graphql/objects/report-aggregate"},next:{title:"report_max_fields",permalink:"/next/graphql/objects/report-max-fields"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>Float</code>)",id:"height-float",level:4},{value:"<code>id</code> (<code>Float</code>)",id:"id-float",level:4},{value:"<code>row_id</code> (<code>Float</code>)",id:"row_id-float",level:4},{value:"<code>subspace_id</code> (<code>Float</code>)",id:"subspace_id-float",level:4}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"aggregate avg on columns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type report_avg_fields {\n  height: Float\n  id: Float\n  row_id: Float\n  subspace_id: Float\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"height-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"id-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"row_id-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"subspace_id-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"))}s.isMDXComponent=!0}}]);
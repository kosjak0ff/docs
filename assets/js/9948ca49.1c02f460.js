"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[41068],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92037:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={id:"reports-params",title:"reports_params",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/objects/reports-params",id:"version-4.2.0/graphql/objects/reports-params",title:"reports_params",description:'columns and relationships of "reports_params"',source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/reports-params.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/reports-params",permalink:"/graphql/objects/reports-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/objects/reports-params.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"reports-params",title:"reports_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report",permalink:"/graphql/objects/report"},next:{title:"subscription_root",permalink:"/graphql/objects/subscription-root"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>params</code> (<code>jsonb!</code>)",id:"params-jsonb",level:4}],c={toc:l};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'columns and relationships of "reports_params"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type reports_params {\n  params(\n  path: String\n): jsonb!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"params-jsonb"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb!")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"path-string"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,a.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,a.kt)("p",null,"JSON select path"))}m.isMDXComponent=!0}}]);
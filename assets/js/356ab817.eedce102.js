"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=r,u=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"post-mention-variance-fields",title:"post_mention_variance_fields",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/objects/post-mention-variance-fields",id:"graphql/objects/post-mention-variance-fields",title:"post_mention_variance_fields",description:"aggregate variance on columns",source:"@site/docs/07-graphql/objects/post-mention-variance-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-mention-variance-fields",permalink:"/next/graphql/objects/post-mention-variance-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-mention-variance-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-mention-variance-fields",title:"post_mention_variance_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_var_samp_fields",permalink:"/next/graphql/objects/post-mention-var-samp-fields"},next:{title:"post_mention",permalink:"/next/graphql/objects/post-mention"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>Float</code>)",id:"end_index-float",level:4},{value:"<code>post_row_id</code> (<code>Float</code>)",id:"post_row_id-float",level:4},{value:"<code>row_id</code> (<code>Float</code>)",id:"row_id-float",level:4},{value:"<code>start_index</code> (<code>Float</code>)",id:"start_index-float",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"aggregate variance on columns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_mention_variance_fields {\n  end_index: Float\n  post_row_id: Float\n  row_id: Float\n  start_index: Float\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"end_index-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"post_row_id-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"row_id-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"start_index-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"))}p.isMDXComponent=!0}}]);
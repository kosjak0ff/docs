"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[38068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=c(r),u=a,k=b["".concat(s,".").concat(u)]||b[u]||p[u]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},62468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"user-block",title:"user_block",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/objects/user-block",id:"graphql/objects/user-block",title:"user_block",description:'columns and relationships of "user_block"',source:"@site/docs/07-graphql/objects/user-block.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/user-block",permalink:"/next/graphql/objects/user-block",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/user-block.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"user-block",title:"user_block",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_variance_fields",permalink:"/next/graphql/objects/user-block-variance-fields"},next:{title:"user_relationship_aggregate_fields",permalink:"/next/graphql/objects/user-relationship-aggregate-fields"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>blocked</code> (<code>profile!</code>)",id:"blocked-profile",level:4},{value:"<code>blocked_address</code> (<code>String!</code>)",id:"blocked_address-string",level:4},{value:"<code>blocker</code> (<code>profile!</code>)",id:"blocker-profile",level:4},{value:"<code>blocker_address</code> (<code>String!</code>)",id:"blocker_address-string",level:4},{value:"<code>height</code> (<code>bigint!</code>)",id:"height-bigint",level:4},{value:"<code>reason</code> (<code>String</code>)",id:"reason-string",level:4},{value:"<code>subspace</code> (<code>subspace!</code>)",id:"subspace-subspace",level:4},{value:"<code>subspace_id</code> (<code>bigint!</code>)",id:"subspace_id-bigint",level:4}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'columns and relationships of "user_block"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type user_block {\n  blocked: profile!\n  blocked_address: String!\n  blocker: profile!\n  blocker_address: String!\n  height: bigint!\n  reason: String\n  subspace: subspace!\n  subspace_id: bigint!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"blocked-profile"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocked"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,a.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,a.kt)("p",null,"An object relationship"),(0,a.kt)("h4",{id:"blocked_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocked_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"blocker-profile"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocker"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,a.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,a.kt)("p",null,"An object relationship"),(0,a.kt)("h4",{id:"blocker_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocker_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"height-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,a.kt)("h4",{id:"reason-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"subspace-subspace"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace!")),")"),(0,a.kt)("p",null,"An object relationship"),(0,a.kt)("h4",{id:"subspace_id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint!")),")"))}p.isMDXComponent=!0}}]);
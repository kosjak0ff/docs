"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[67150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={id:"posts-params",title:"posts_params",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/objects/posts-params",id:"graphql/objects/posts-params",title:"posts_params",description:'columns and relationships of "posts_params"',source:"@site/docs/07-graphql/objects/posts-params.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/posts-params",permalink:"/next/graphql/objects/posts-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/posts-params.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"posts-params",title:"posts_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"posts_params_variance_fields",permalink:"/next/graphql/objects/posts-params-variance-fields"},next:{title:"profile_aggregate_fields",permalink:"/next/graphql/objects/profile-aggregate-fields"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>bigint!</code>)",id:"height-bigint",level:4},{value:"<code>one_row_id</code> (<code>Boolean!</code>)",id:"one_row_id-boolean",level:4},{value:"<code>params</code> (<code>jsonb!</code>)",id:"params-jsonb",level:4}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'columns and relationships of "posts_params"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type posts_params {\n  height: bigint!\n  one_row_id: Boolean!\n  params(path: String): jsonb!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"height-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,n.kt)("h4",{id:"one_row_id-boolean"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"one_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,n.kt)("h4",{id:"params-jsonb"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,n.kt)("inlineCode",{parentName:"a"},"jsonb!")),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"path-string"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,n.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,n.kt)("p",null,"JSON select path"))}d.isMDXComponent=!0}}]);
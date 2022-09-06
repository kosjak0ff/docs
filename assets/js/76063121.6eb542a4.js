"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[55030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),u=a,d=f["".concat(p,".").concat(u)]||f[u]||m[u]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"insert-profiles-params",title:"insert_profiles_params",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/mutations/insert-profiles-params",id:"graphql/mutations/insert-profiles-params",title:"insert_profiles_params",description:'insert data into the table: "profiles_params"',source:"@site/docs/07-graphql/mutations/insert-profiles-params.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-profiles-params",permalink:"/next/graphql/mutations/insert-profiles-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-profiles-params.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-profiles-params",title:"insert_profiles_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_profiles_params_one",permalink:"/next/graphql/mutations/insert-profiles-params-one"},next:{title:"insert_reaction_one",permalink:"/next/graphql/mutations/insert-reaction-one"}},p={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[profiles_params_insert_input!]!</code>)",id:"objects-profiles_params_insert_input",level:4},{value:"<code>on_conflict</code> (<code>profiles_params_on_conflict</code>)",id:"on_conflict-profiles_params_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>profiles_params_mutation_response</code>",id:"profiles_params_mutation_response",level:4}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'insert data into the table: "profiles_params"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_profiles_params(\n  objects: [profiles_params_insert_input!]!\n  on_conflict: profiles_params_on_conflict\n): profiles_params_mutation_response\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"objects-profiles_params_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[profiles_params_insert_input!]!")),")"),(0,a.kt)("p",null,"the rows to be inserted"),(0,a.kt)("h4",{id:"on_conflict-profiles_params_on_conflict"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-on-conflict"},(0,a.kt)("inlineCode",{parentName:"a"},"profiles_params_on_conflict")),")"),(0,a.kt)("p",null,"on conflict condition"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"profiles_params_mutation_response"},(0,a.kt)("a",{parentName:"h4",href:"../objects/profiles-params-mutation-response"},(0,a.kt)("inlineCode",{parentName:"a"},"profiles_params_mutation_response"))),(0,a.kt)("p",null,'response of any mutation on the table "profiles_params"'))}m.isMDXComponent=!0}}]);
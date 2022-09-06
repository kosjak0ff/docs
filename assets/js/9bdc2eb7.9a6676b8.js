"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[53789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"subspace-free-text-params-insert-input",title:"subspace_free_text_params_insert_input",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/subspace-free-text-params-insert-input",id:"graphql/inputs/subspace-free-text-params-insert-input",title:"subspace_free_text_params_insert_input",description:'input type for inserting data into table "subspacefreetext_params"',source:"@site/docs/07-graphql/inputs/subspace-free-text-params-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-free-text-params-insert-input",permalink:"/next/graphql/inputs/subspace-free-text-params-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-free-text-params-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-free-text-params-insert-input",title:"subspace_free_text_params_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_free_text_params_inc_input",permalink:"/next/graphql/inputs/subspace-free-text-params-inc-input"},next:{title:"subspace_free_text_params_obj_rel_insert_input",permalink:"/next/graphql/inputs/subspace-free-text-params-obj-rel-insert-input"}},o={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>enabled</code> (<code>Boolean</code>)",id:"enabled-boolean",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>max_length</code> (<code>bigint</code>)",id:"max_length-bigint",level:4},{value:"<code>reg_ex</code> (<code>String</code>)",id:"reg_ex-string",level:4},{value:"<code>subspace</code> (<code>subspace_obj_rel_insert_input</code>)",id:"subspace-subspace_obj_rel_insert_input",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'input type for inserting data into table "subspace_free_text_params"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_free_text_params_insert_input {\n  enabled: Boolean\n  height: bigint\n  max_length: bigint\n  reg_ex: String\n  subspace: subspace_obj_rel_insert_input\n  subspace_id: bigint\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"enabled-boolean"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"enabled"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"height-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"max_length-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"max_length"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"reg_ex-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reg_ex"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"subspace-subspace_obj_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-obj-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_obj_rel_insert_input")),")"),(0,a.kt)("h4",{id:"subspace_id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"))}u.isMDXComponent=!0}}]);
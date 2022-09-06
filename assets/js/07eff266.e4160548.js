"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[84397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={id:"insert-posts-params-one",title:"insert_posts_params_one",hide_table_of_contents:!1},o=void 0,p={unversionedId:"graphql/mutations/insert-posts-params-one",id:"graphql/mutations/insert-posts-params-one",title:"insert_posts_params_one",description:'insert a single row into the table: "posts_params"',source:"@site/docs/07-graphql/mutations/insert-posts-params-one.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-posts-params-one",permalink:"/next/graphql/mutations/insert-posts-params-one",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-posts-params-one.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-posts-params-one",title:"insert_posts_params_one",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_post",permalink:"/next/graphql/mutations/insert-post"},next:{title:"insert_posts_params",permalink:"/next/graphql/mutations/insert-posts-params"}},i={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>object</code> (<code>posts_params_insert_input!</code>)",id:"object-posts_params_insert_input",level:4},{value:"<code>on_conflict</code> (<code>posts_params_on_conflict</code>)",id:"on_conflict-posts_params_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>posts_params</code>",id:"posts_params",level:4}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'insert a single row into the table: "posts_params"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_posts_params_one(\n  object: posts_params_insert_input!\n  on_conflict: posts_params_on_conflict\n): posts_params\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"object-posts_params_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"object"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/posts-params-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"posts_params_insert_input!")),")"),(0,a.kt)("p",null,"the row to be inserted"),(0,a.kt)("h4",{id:"on_conflict-posts_params_on_conflict"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/posts-params-on-conflict"},(0,a.kt)("inlineCode",{parentName:"a"},"posts_params_on_conflict")),")"),(0,a.kt)("p",null,"on conflict condition"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"posts_params"},(0,a.kt)("a",{parentName:"h4",href:"../objects/posts-params"},(0,a.kt)("inlineCode",{parentName:"a"},"posts_params"))),(0,a.kt)("p",null,'columns and relationships of "posts_params"'))}m.isMDXComponent=!0}}]);
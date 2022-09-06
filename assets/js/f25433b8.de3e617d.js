"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9722],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=l(n),d=s,_=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(_,o(o({ref:e},c),{},{components:n})):r.createElement(_,o({ref:e},c))}));function d(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:s,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99137:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const a={id:"insert-posts-params",title:"insert_posts_params",hide_table_of_contents:!1},o=void 0,p={unversionedId:"graphql/mutations/insert-posts-params",id:"graphql/mutations/insert-posts-params",title:"insert_posts_params",description:'insert data into the table: "posts_params"',source:"@site/docs/07-graphql/mutations/insert-posts-params.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-posts-params",permalink:"/next/graphql/mutations/insert-posts-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-posts-params.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-posts-params",title:"insert_posts_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_posts_params_one",permalink:"/next/graphql/mutations/insert-posts-params-one"},next:{title:"insert_profile_one",permalink:"/next/graphql/mutations/insert-profile-one"}},i={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[posts_params_insert_input!]!</code>)",id:"objects-posts_params_insert_input",level:4},{value:"<code>on_conflict</code> (<code>posts_params_on_conflict</code>)",id:"on_conflict-posts_params_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>posts_params_mutation_response</code>",id:"posts_params_mutation_response",level:4}],c={toc:l};function m(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'insert data into the table: "posts_params"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_posts_params(\n  objects: [posts_params_insert_input!]!\n  on_conflict: posts_params_on_conflict\n): posts_params_mutation_response\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"objects-posts_params_insert_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/posts-params-insert-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[posts_params_insert_input!]!")),")"),(0,s.kt)("p",null,"the rows to be inserted"),(0,s.kt)("h4",{id:"on_conflict-posts_params_on_conflict"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/posts-params-on-conflict"},(0,s.kt)("inlineCode",{parentName:"a"},"posts_params_on_conflict")),")"),(0,s.kt)("p",null,"on conflict condition"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"posts_params_mutation_response"},(0,s.kt)("a",{parentName:"h4",href:"../objects/posts-params-mutation-response"},(0,s.kt)("inlineCode",{parentName:"a"},"posts_params_mutation_response"))),(0,s.kt)("p",null,'response of any mutation on the table "posts_params"'))}m.isMDXComponent=!0}}]);
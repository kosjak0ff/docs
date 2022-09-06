"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95631],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),c=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=c(t.components);return o.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),u=c(n),d=r,_=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(_,s(s({ref:e},l),{},{components:n})):o.createElement(_,s({ref:e},l))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11487:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={id:"insert-post-mention",title:"insert_post_mention",hide_table_of_contents:!1},s=void 0,a={unversionedId:"graphql/mutations/insert-post-mention",id:"graphql/mutations/insert-post-mention",title:"insert_post_mention",description:'insert data into the table: "post_mention"',source:"@site/docs/07-graphql/mutations/insert-post-mention.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-post-mention",permalink:"/next/graphql/mutations/insert-post-mention",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-post-mention.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-post-mention",title:"insert_post_mention",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_post_mention_one",permalink:"/next/graphql/mutations/insert-post-mention-one"},next:{title:"insert_post_one",permalink:"/next/graphql/mutations/insert-post-one"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[post_mention_insert_input!]!</code>)",id:"objects-post_mention_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_mention_on_conflict</code>)",id:"on_conflict-post_mention_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_mention_mutation_response</code>",id:"post_mention_mutation_response",level:4}],l={toc:c};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'insert data into the table: "post_mention"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_post_mention(\n  objects: [post_mention_insert_input!]!\n  on_conflict: post_mention_on_conflict\n): post_mention_mutation_response\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"objects-post_mention_insert_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-mention-insert-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_mention_insert_input!]!")),")"),(0,r.kt)("p",null,"the rows to be inserted"),(0,r.kt)("h4",{id:"on_conflict-post_mention_on_conflict"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-mention-on-conflict"},(0,r.kt)("inlineCode",{parentName:"a"},"post_mention_on_conflict")),")"),(0,r.kt)("p",null,"on conflict condition"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"post_mention_mutation_response"},(0,r.kt)("a",{parentName:"h4",href:"../objects/post-mention-mutation-response"},(0,r.kt)("inlineCode",{parentName:"a"},"post_mention_mutation_response"))),(0,r.kt)("p",null,'response of any mutation on the table "post_mention"'))}m.isMDXComponent=!0}}]);
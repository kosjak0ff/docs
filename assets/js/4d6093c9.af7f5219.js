"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9531],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),l=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=l(t.components);return o.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,_=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(_,s(s({ref:e},c),{},{components:n})):o.createElement(_,s({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86808:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={id:"insert-post-tag",title:"insert_post_tag",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/mutations/insert-post-tag",id:"graphql/mutations/insert-post-tag",title:"insert_post_tag",description:'insert data into the table: "post_tag"',source:"@site/docs/07-graphql/mutations/insert-post-tag.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-post-tag",permalink:"/next/graphql/mutations/insert-post-tag",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-post-tag.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-post-tag",title:"insert_post_tag",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_post_tag_one",permalink:"/next/graphql/mutations/insert-post-tag-one"},next:{title:"insert_post_url_one",permalink:"/next/graphql/mutations/insert-post-url-one"}},p={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[post_tag_insert_input!]!</code>)",id:"objects-post_tag_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_tag_on_conflict</code>)",id:"on_conflict-post_tag_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_tag_mutation_response</code>",id:"post_tag_mutation_response",level:4}],c={toc:l};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'insert data into the table: "post_tag"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_post_tag(\n  objects: [post_tag_insert_input!]!\n  on_conflict: post_tag_on_conflict\n): post_tag_mutation_response\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"objects-post_tag_insert_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-tag-insert-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_tag_insert_input!]!")),")"),(0,r.kt)("p",null,"the rows to be inserted"),(0,r.kt)("h4",{id:"on_conflict-post_tag_on_conflict"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-tag-on-conflict"},(0,r.kt)("inlineCode",{parentName:"a"},"post_tag_on_conflict")),")"),(0,r.kt)("p",null,"on conflict condition"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"post_tag_mutation_response"},(0,r.kt)("a",{parentName:"h4",href:"../objects/post-tag-mutation-response"},(0,r.kt)("inlineCode",{parentName:"a"},"post_tag_mutation_response"))),(0,r.kt)("p",null,'response of any mutation on the table "post_tag"'))}u.isMDXComponent=!0}}]);
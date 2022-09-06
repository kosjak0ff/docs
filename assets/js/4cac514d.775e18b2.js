"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[27941],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13918:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"post-attachment-obj-rel-insert-input",title:"post_attachment_obj_rel_insert_input",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/post-attachment-obj-rel-insert-input",id:"graphql/inputs/post-attachment-obj-rel-insert-input",title:"post_attachment_obj_rel_insert_input",description:'input type for inserting object relation for remote table "post_attachment"',source:"@site/docs/07-graphql/inputs/post-attachment-obj-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-attachment-obj-rel-insert-input",permalink:"/next/graphql/inputs/post-attachment-obj-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-attachment-obj-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-attachment-obj-rel-insert-input",title:"post_attachment_obj_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment_min_order_by",permalink:"/next/graphql/inputs/post-attachment-min-order-by"},next:{title:"post_attachment_on_conflict",permalink:"/next/graphql/inputs/post-attachment-on-conflict"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>post_attachment_insert_input!</code>)",id:"data-post_attachment_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_attachment_on_conflict</code>)",id:"on_conflict-post_attachment_on_conflict",level:4}],l={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'input type for inserting object relation for remote table "post_attachment"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_attachment_obj_rel_insert_input {\n  data: post_attachment_insert_input!\n  on_conflict: post_attachment_on_conflict\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"data-post_attachment_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment_insert_input!")),")"),(0,a.kt)("h4",{id:"on_conflict-post_attachment_on_conflict"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-on-conflict"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment_on_conflict")),")"),(0,a.kt)("p",null,"on conflict condition"))}u.isMDXComponent=!0}}]);
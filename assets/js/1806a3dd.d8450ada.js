"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39813],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,_=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?n.createElement(_,s(s({ref:r},i),{},{components:t})):n.createElement(_,s({ref:r},i))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var d=2;d<a;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44402:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const a={id:"poll-answer-order-by",title:"poll_answer_order_by",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/inputs/poll-answer-order-by",id:"version-4.2.0/graphql/inputs/poll-answer-order-by",title:"poll_answer_order_by",description:'Ordering options when selecting data from "poll_answer".',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/poll-answer-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/poll-answer-order-by",permalink:"/graphql/inputs/poll-answer-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/poll-answer-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"poll-answer-order-by",title:"poll_answer_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"poll_answer_bool_exp",permalink:"/graphql/inputs/poll-answer-bool-exp"},next:{title:"post_aggregate_order_by",permalink:"/graphql/inputs/post-aggregate-order-by"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>answers_indexes</code> (<code>order_by</code>)",id:"answers_indexes-order_by",level:4},{value:"<code>post_attachment</code> (<code>post_attachment_order_by</code>)",id:"post_attachment-post_attachment_order_by",level:4},{value:"<code>user_address</code> (<code>order_by</code>)",id:"user_address-order_by",level:4}],i={toc:d};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "poll_answer".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input poll_answer_order_by {\n  answers_indexes: order_by\n  post_attachment: post_attachment_order_by\n  user_address: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"answers_indexes-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"answers_indexes"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"post_attachment-post_attachment_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_order_by")),")"),(0,o.kt)("h4",{id:"user_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);
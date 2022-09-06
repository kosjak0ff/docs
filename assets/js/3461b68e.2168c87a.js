"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[24455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={id:"post-mention-on-conflict",title:"post_mention_on_conflict",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/inputs/post-mention-on-conflict",id:"graphql/inputs/post-mention-on-conflict",title:"post_mention_on_conflict",description:'on conflict condition type for table "post_mention"',source:"@site/docs/07-graphql/inputs/post-mention-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-on-conflict",permalink:"/next/graphql/inputs/post-mention-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-mention-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-mention-on-conflict",title:"post_mention_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_min_order_by",permalink:"/next/graphql/inputs/post-mention-min-order-by"},next:{title:"post_mention_order_by",permalink:"/next/graphql/inputs/post-mention-order-by"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>post_mention_constraint!</code>)",id:"constraint-post_mention_constraint",level:4},{value:"<code>update_columns</code> (<code>[post_mention_update_column!]!</code>)",id:"update_columns-post_mention_update_column",level:4},{value:"<code>where</code> (<code>post_mention_bool_exp</code>)",id:"where-post_mention_bool_exp",level:4}],s={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'on conflict condition type for table "post_mention"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_on_conflict {\n  constraint: post_mention_constraint!\n  update_columns: [post_mention_update_column!]!\n  where: post_mention_bool_exp\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"constraint-post_mention_constraint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,r.kt)("a",{parentName:"h4",href:"../enums/post-mention-constraint"},(0,r.kt)("inlineCode",{parentName:"a"},"post_mention_constraint!")),")"),(0,r.kt)("h4",{id:"update_columns-post_mention_update_column"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,r.kt)("a",{parentName:"h4",href:"../enums/post-mention-update-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_mention_update_column!]!")),")"),(0,r.kt)("h4",{id:"where-post_mention_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-mention-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_mention_bool_exp")),")"))}m.isMDXComponent=!0}}]);
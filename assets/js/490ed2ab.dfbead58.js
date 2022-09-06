"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[81733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,_=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(_,a(a({ref:t},c),{},{components:n})):r.createElement(_,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"post-mention-arr-rel-insert-input",title:"post_mention_arr_rel_insert_input",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/inputs/post-mention-arr-rel-insert-input",id:"graphql/inputs/post-mention-arr-rel-insert-input",title:"post_mention_arr_rel_insert_input",description:'input type for inserting array relation for remote table "post_mention"',source:"@site/docs/07-graphql/inputs/post-mention-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-arr-rel-insert-input",permalink:"/next/graphql/inputs/post-mention-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-mention-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-mention-arr-rel-insert-input",title:"post_mention_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_aggregate_order_by",permalink:"/next/graphql/inputs/post-mention-aggregate-order-by"},next:{title:"post_mention_avg_order_by",permalink:"/next/graphql/inputs/post-mention-avg-order-by"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[post_mention_insert_input!]!</code>)",id:"data-post_mention_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_mention_on_conflict</code>)",id:"on_conflict-post_mention_on_conflict",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'input type for inserting array relation for remote table "post_mention"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_arr_rel_insert_input {\n  data: [post_mention_insert_input!]!\n  on_conflict: post_mention_on_conflict\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"data-post_mention_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_mention_insert_input!]!")),")"),(0,o.kt)("h4",{id:"on_conflict-post_mention_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-mention-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88001],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>_});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(t),_=o,y=m["".concat(p,".").concat(_)]||m[_]||c[_]||a;return t?n.createElement(y,d(d({ref:r},l),{},{components:t})):n.createElement(y,d({ref:r},l))}));function _(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,d=new Array(a);d[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var s=2;s<a;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48679:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={id:"post-mention-order-by",title:"post_mention_order_by",hide_table_of_contents:!1},d=void 0,i={unversionedId:"graphql/inputs/post-mention-order-by",id:"graphql/inputs/post-mention-order-by",title:"post_mention_order_by",description:'Ordering options when selecting data from "post_mention".',source:"@site/docs/07-graphql/inputs/post-mention-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-order-by",permalink:"/next/graphql/inputs/post-mention-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-mention-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-mention-order-by",title:"post_mention_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_on_conflict",permalink:"/next/graphql/inputs/post-mention-on-conflict"},next:{title:"post_mention_pk_columns_input",permalink:"/next/graphql/inputs/post-mention-pk-columns-input"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>order_by</code>)",id:"end_index-order_by",level:4},{value:"<code>mention</code> (<code>profile_order_by</code>)",id:"mention-profile_order_by",level:4},{value:"<code>mention_address</code> (<code>order_by</code>)",id:"mention_address-order_by",level:4},{value:"<code>post</code> (<code>post_order_by</code>)",id:"post-post_order_by",level:4},{value:"<code>post_row_id</code> (<code>order_by</code>)",id:"post_row_id-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4},{value:"<code>start_index</code> (<code>order_by</code>)",id:"start_index-order_by",level:4}],l={toc:s};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "post_mention".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_order_by {\n  end_index: order_by\n  mention: profile_order_by\n  mention_address: order_by\n  post: post_order_by\n  post_row_id: order_by\n  row_id: order_by\n  start_index: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"end_index-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"mention-profile_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"mention"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,o.kt)("h4",{id:"mention_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"mention_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"post-post_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_order_by")),")"),(0,o.kt)("h4",{id:"post_row_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"row_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"start_index-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);
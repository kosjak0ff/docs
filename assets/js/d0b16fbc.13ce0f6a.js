"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[42914],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(t),y=o,u=f["".concat(p,".").concat(y)]||f[y]||l[y]||a;return t?n.createElement(u,d(d({ref:r},c),{},{components:t})):n.createElement(u,d({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,d=new Array(a);d[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var s=2;s<a;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},97830:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={id:"post-reference-order-by",title:"post_reference_order_by",hide_table_of_contents:!1},d=void 0,i={unversionedId:"graphql/inputs/post-reference-order-by",id:"graphql/inputs/post-reference-order-by",title:"post_reference_order_by",description:'Ordering options when selecting data from "post_reference".',source:"@site/docs/07-graphql/inputs/post-reference-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-order-by",permalink:"/next/graphql/inputs/post-reference-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-reference-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"post-reference-order-by",title:"post_reference_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_min_order_by",permalink:"/next/graphql/inputs/post-reference-min-order-by"},next:{title:"post_reference_stddev_order_by",permalink:"/next/graphql/inputs/post-reference-stddev-order-by"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>position_index</code> (<code>order_by</code>)",id:"position_index-order_by",level:4},{value:"<code>post</code> (<code>post_order_by</code>)",id:"post-post_order_by",level:4},{value:"<code>reference_id</code> (<code>order_by</code>)",id:"reference_id-order_by",level:4},{value:"<code>type</code> (<code>order_by</code>)",id:"type-order_by",level:4}],c={toc:s};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "post_reference".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_order_by {\n  position_index: order_by\n  post: post_order_by\n  reference_id: order_by\n  type: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"position_index-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"post-post_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_order_by")),")"),(0,o.kt)("h4",{id:"reference_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reference_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"type-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}l.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[53388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(r),u=o,y=m["".concat(s,".").concat(u)]||m[u]||l[u]||a;return r?n.createElement(y,d(d({ref:t},c),{},{components:r})):n.createElement(y,d({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,d=new Array(a);d[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,d[1]=p;for(var i=2;i<a;i++)d[i]=r[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={id:"post-attachment-stddev-samp-order-by",title:"post_attachment_stddev_samp_order_by",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/inputs/post-attachment-stddev-samp-order-by",id:"graphql/inputs/post-attachment-stddev-samp-order-by",title:"post_attachment_stddev_samp_order_by",description:'order by stddevsamp() on columns of table "postattachment"',source:"@site/docs/07-graphql/inputs/post-attachment-stddev-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-attachment-stddev-samp-order-by",permalink:"/next/graphql/inputs/post-attachment-stddev-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-attachment-stddev-samp-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-attachment-stddev-samp-order-by",title:"post_attachment_stddev_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment_stddev_pop_order_by",permalink:"/next/graphql/inputs/post-attachment-stddev-pop-order-by"},next:{title:"post_attachment_sum_order_by",permalink:"/next/graphql/inputs/post-attachment-sum-order-by"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>post_row_id</code> (<code>order_by</code>)",id:"post_row_id-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4}],c={toc:i};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by stddev_samp() on columns of table "post_attachment"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_attachment_stddev_samp_order_by {\n  height: order_by\n  id: order_by\n  post_row_id: order_by\n  row_id: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"height-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"post_row_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"row_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}l.isMDXComponent=!0}}]);
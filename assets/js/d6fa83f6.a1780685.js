"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[35634],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>_});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},s=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),_=n,y=u["".concat(l,".").concat(_)]||u[_]||c[_]||a;return t?o.createElement(y,d(d({ref:r},s),{},{components:t})):o.createElement(y,d({ref:r},s))}));function _(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,d=new Array(a);d[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var p=2;p<a;p++)d[p]=t[p];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16087:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={id:"post-url-order-by",title:"post_url_order_by",hide_table_of_contents:!1},d=void 0,i={unversionedId:"graphql/inputs/post-url-order-by",id:"graphql/inputs/post-url-order-by",title:"post_url_order_by",description:'Ordering options when selecting data from "post_url".',source:"@site/docs/07-graphql/inputs/post-url-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-url-order-by",permalink:"/next/graphql/inputs/post-url-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-url-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-url-order-by",title:"post_url_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_url_on_conflict",permalink:"/next/graphql/inputs/post-url-on-conflict"},next:{title:"post_url_pk_columns_input",permalink:"/next/graphql/inputs/post-url-pk-columns-input"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>display_value</code> (<code>order_by</code>)",id:"display_value-order_by",level:4},{value:"<code>end_index</code> (<code>order_by</code>)",id:"end_index-order_by",level:4},{value:"<code>post</code> (<code>post_order_by</code>)",id:"post-post_order_by",level:4},{value:"<code>post_row_id</code> (<code>order_by</code>)",id:"post_row_id-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4},{value:"<code>start_index</code> (<code>order_by</code>)",id:"start_index-order_by",level:4},{value:"<code>url</code> (<code>order_by</code>)",id:"url-order_by",level:4}],s={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "post_url".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_url_order_by {\n  display_value: order_by\n  end_index: order_by\n  post: post_order_by\n  post_row_id: order_by\n  row_id: order_by\n  start_index: order_by\n  url: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"display_value-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"display_value"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"end_index-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"post-post_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_order_by")),")"),(0,n.kt)("h4",{id:"post_row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"start_index-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"url-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"url"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);
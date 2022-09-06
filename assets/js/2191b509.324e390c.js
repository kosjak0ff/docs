"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[11753],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),i=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},c=function(e){var r=i(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},b=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=i(t),u=n,m=b["".concat(s,".").concat(u)]||b[u]||p[u]||a;return t?o.createElement(m,d(d({ref:r},c),{},{components:t})):o.createElement(m,d({ref:r},c))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,d=new Array(a);d[0]=b;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,d[1]=l;for(var i=2;i<a;i++)d[i]=t[i];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},93228:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const a={id:"user-block-max-order-by",title:"user_block_max_order_by",hide_table_of_contents:!1},d=void 0,l={unversionedId:"graphql/inputs/user-block-max-order-by",id:"graphql/inputs/user-block-max-order-by",title:"user_block_max_order_by",description:'order by max() on columns of table "user_block"',source:"@site/docs/07-graphql/inputs/user-block-max-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-max-order-by",permalink:"/next/graphql/inputs/user-block-max-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/user-block-max-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"user-block-max-order-by",title:"user_block_max_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_insert_input",permalink:"/next/graphql/inputs/user-block-insert-input"},next:{title:"user_block_min_order_by",permalink:"/next/graphql/inputs/user-block-min-order-by"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>blocked_address</code> (<code>order_by</code>)",id:"blocked_address-order_by",level:4},{value:"<code>blocker_address</code> (<code>order_by</code>)",id:"blocker_address-order_by",level:4},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>reason</code> (<code>order_by</code>)",id:"reason-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],c={toc:i};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by max() on columns of table "user_block"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_max_order_by {\n  blocked_address: order_by\n  blocker_address: order_by\n  height: order_by\n  reason: order_by\n  subspace_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"blocked_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"blocked_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"blocker_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"blocker_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"height-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"reason-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}p.isMDXComponent=!0}}]);
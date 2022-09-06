"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88189],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},d=Object.keys(e);for(o=0;o<d.length;o++)t=d[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)t=d[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),i=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=i(e.components);return o.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},l=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,d=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=i(t),b=n,_=l["".concat(s,".").concat(b)]||l[b]||c[b]||d;return t?o.createElement(_,a(a({ref:r},u),{},{components:t})):o.createElement(_,a({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var d=t.length,a=new Array(d);a[0]=l;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var i=2;i<d;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},74778:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>d,metadata:()=>p,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const d={id:"subspace-user-group-stddev-pop-order-by",title:"subspace_user_group_stddev_pop_order_by",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/inputs/subspace-user-group-stddev-pop-order-by",id:"graphql/inputs/subspace-user-group-stddev-pop-order-by",title:"subspace_user_group_stddev_pop_order_by",description:'order by stddevpop() on columns of table "subspaceuser_group"',source:"@site/docs/07-graphql/inputs/subspace-user-group-stddev-pop-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-stddev-pop-order-by",permalink:"/next/graphql/inputs/subspace-user-group-stddev-pop-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-group-stddev-pop-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-group-stddev-pop-order-by",title:"subspace_user_group_stddev_pop_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_stddev_order_by",permalink:"/next/graphql/inputs/subspace-user-group-stddev-order-by"},next:{title:"subspace_user_group_stddev_samp_order_by",permalink:"/next/graphql/inputs/subspace-user-group-stddev-samp-order-by"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4},{value:"<code>section_row_id</code> (<code>order_by</code>)",id:"section_row_id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],u={toc:i};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by stddev_pop() on columns of table "subspace_user_group"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_stddev_pop_order_by {\n  height: order_by\n  id: order_by\n  row_id: order_by\n  section_row_id: order_by\n  subspace_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"height-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"section_row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"section_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);
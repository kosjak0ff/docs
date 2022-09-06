"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[99],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},d=Object.keys(e);for(o=0;o<d.length;o++)t=d[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)t=d[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),i=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=i(e.components);return o.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},b=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,d=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=i(t),u=n,y=b["".concat(p,".").concat(u)]||b[u]||l[u]||d;return t?o.createElement(y,a(a({ref:r},c),{},{components:t})):o.createElement(y,a({ref:r},c))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var d=t.length,a=new Array(d);a[0]=b;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var i=2;i<d;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},10167:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const d={id:"subspace-section-stddev-pop-order-by",title:"subspace_section_stddev_pop_order_by",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/inputs/subspace-section-stddev-pop-order-by",id:"graphql/inputs/subspace-section-stddev-pop-order-by",title:"subspace_section_stddev_pop_order_by",description:'order by stddevpop() on columns of table "subspacesection"',source:"@site/docs/07-graphql/inputs/subspace-section-stddev-pop-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-section-stddev-pop-order-by",permalink:"/next/graphql/inputs/subspace-section-stddev-pop-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-section-stddev-pop-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-section-stddev-pop-order-by",title:"subspace_section_stddev_pop_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_section_stddev_order_by",permalink:"/next/graphql/inputs/subspace-section-stddev-order-by"},next:{title:"subspace_section_stddev_samp_order_by",permalink:"/next/graphql/inputs/subspace-section-stddev-samp-order-by"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>parent_row_id</code> (<code>order_by</code>)",id:"parent_row_id-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],c={toc:i};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by stddev_pop() on columns of table "subspace_section"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_section_stddev_pop_order_by {\n  height: order_by\n  id: order_by\n  parent_row_id: order_by\n  row_id: order_by\n  subspace_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"height-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"parent_row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"parent_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}l.isMDXComponent=!0}}]);
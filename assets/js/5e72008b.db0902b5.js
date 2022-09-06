"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[99212],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,b=l["".concat(d,".").concat(m)]||l[m]||u[m]||s;return t?n.createElement(b,a(a({ref:r},c),{},{components:t})):n.createElement(b,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=l;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3139:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const s={id:"subspace-user-permission-max-order-by",title:"subspace_user_permission_max_order_by",hide_table_of_contents:!1},a=void 0,i={unversionedId:"graphql/inputs/subspace-user-permission-max-order-by",id:"graphql/inputs/subspace-user-permission-max-order-by",title:"subspace_user_permission_max_order_by",description:'order by max() on columns of table "subspaceuserpermission"',source:"@site/docs/07-graphql/inputs/subspace-user-permission-max-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-permission-max-order-by",permalink:"/next/graphql/inputs/subspace-user-permission-max-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-permission-max-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-permission-max-order-by",title:"subspace_user_permission_max_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission_insert_input",permalink:"/next/graphql/inputs/subspace-user-permission-insert-input"},next:{title:"subspace_user_permission_min_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-min-order-by"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4},{value:"<code>section_row_id</code> (<code>order_by</code>)",id:"section_row_id-order_by",level:4},{value:"<code>user_address</code> (<code>order_by</code>)",id:"user_address-order_by",level:4}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by max() on columns of table "subspace_user_permission"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_permission_max_order_by {\n  height: order_by\n  row_id: order_by\n  section_row_id: order_by\n  user_address: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"height-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"row_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"section_row_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"section_row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"user_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}u.isMDXComponent=!0}}]);
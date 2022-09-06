"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[5223],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),b=o,y=u["".concat(p,".").concat(b)]||u[b]||l[b]||n;return t?a.createElement(y,i(i({ref:r},c),{},{components:t})):a.createElement(y,i({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=u;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var s=2;s<n;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20217:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>d,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const n={id:"subspace-registered-reaction-var-pop-order-by",title:"subspace_registered_reaction_var_pop_order_by",hide_table_of_contents:!1},i=void 0,d={unversionedId:"graphql/inputs/subspace-registered-reaction-var-pop-order-by",id:"graphql/inputs/subspace-registered-reaction-var-pop-order-by",title:"subspace_registered_reaction_var_pop_order_by",description:'order by varpop() on columns of table "subspaceregistered_reaction"',source:"@site/docs/07-graphql/inputs/subspace-registered-reaction-var-pop-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-var-pop-order-by",permalink:"/next/graphql/inputs/subspace-registered-reaction-var-pop-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-registered-reaction-var-pop-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-registered-reaction-var-pop-order-by",title:"subspace_registered_reaction_var_pop_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_sum_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-sum-order-by"},next:{title:"subspace_registered_reaction_var_samp_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-var-samp-order-by"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],c={toc:s};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by var_pop() on columns of table "subspace_registered_reaction"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_var_pop_order_by {\n  height: order_by\n  id: order_by\n  row_id: order_by\n  subspace_id: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"height-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"row_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"subspace_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}l.isMDXComponent=!0}}]);
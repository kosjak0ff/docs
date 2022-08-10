"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88176],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>b});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),b=n,m=u["".concat(p,".").concat(b)]||u[b]||l[b]||o;return t?a.createElement(m,s(s({ref:r},d),{},{components:t})):a.createElement(m,s({ref:r},d))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73773:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={id:"subspace-registered-reaction-var-samp-order-by",title:"subspace_registered_reaction_var_samp_order_by",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/inputs/subspace-registered-reaction-var-samp-order-by",id:"graphql/inputs/subspace-registered-reaction-var-samp-order-by",title:"subspace_registered_reaction_var_samp_order_by",description:'order by varsamp() on columns of table "subspaceregistered_reaction"',source:"@site/docs/07-graphql/inputs/subspace-registered-reaction-var-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-var-samp-order-by",permalink:"/next/graphql/inputs/subspace-registered-reaction-var-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-registered-reaction-var-samp-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-registered-reaction-var-samp-order-by",title:"subspace_registered_reaction_var_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_var_pop_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-var-pop-order-by"},next:{title:"subspace_registered_reaction_variance_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-variance-order-by"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],d={toc:c};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by var_samp() on columns of table "subspace_registered_reaction"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_var_samp_order_by {\n  id: order_by\n  subspace_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}l.isMDXComponent=!0}}]);
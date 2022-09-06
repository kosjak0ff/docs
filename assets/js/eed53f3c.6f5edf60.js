"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[46883],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var s=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=s.createContext({}),c=function(e){var n=s.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return s.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(r),d=t,_=m["".concat(p,".").concat(d)]||m[d]||l[d]||o;return r?s.createElement(_,i(i({ref:n},u),{},{components:r})):s.createElement(_,i({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92009:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(87462),t=(r(67294),r(3905));const o={id:"subspace-user-permission-on-conflict",title:"subspace_user_permission_on_conflict",hide_table_of_contents:!1},i=void 0,a={unversionedId:"graphql/inputs/subspace-user-permission-on-conflict",id:"graphql/inputs/subspace-user-permission-on-conflict",title:"subspace_user_permission_on_conflict",description:'on conflict condition type for table "subspaceuserpermission"',source:"@site/docs/07-graphql/inputs/subspace-user-permission-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-permission-on-conflict",permalink:"/next/graphql/inputs/subspace-user-permission-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-permission-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-permission-on-conflict",title:"subspace_user_permission_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission_min_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-min-order-by"},next:{title:"subspace_user_permission_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-order-by"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>subspace_user_permission_constraint!</code>)",id:"constraint-subspace_user_permission_constraint",level:4},{value:"<code>update_columns</code> (<code>[subspace_user_permission_update_column!]!</code>)",id:"update_columns-subspace_user_permission_update_column",level:4},{value:"<code>where</code> (<code>subspace_user_permission_bool_exp</code>)",id:"where-subspace_user_permission_bool_exp",level:4}],u={toc:c};function l(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,s.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,'on conflict condition type for table "subspace_user_permission"'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_permission_on_conflict {\n  constraint: subspace_user_permission_constraint!\n  update_columns: [subspace_user_permission_update_column!]!\n  where: subspace_user_permission_bool_exp\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"constraint-subspace_user_permission_constraint"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,t.kt)("a",{parentName:"h4",href:"../enums/subspace-user-permission-constraint"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_constraint!")),")"),(0,t.kt)("h4",{id:"update_columns-subspace_user_permission_update_column"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,t.kt)("a",{parentName:"h4",href:"../enums/subspace-user-permission-update-column"},(0,t.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_update_column!]!")),")"),(0,t.kt)("h4",{id:"where-subspace_user_permission_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_bool_exp")),")"))}l.isMDXComponent=!0}}]);
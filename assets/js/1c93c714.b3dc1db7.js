"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[66761],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},_=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),_=c(t),d=o,b=_["".concat(p,".").concat(d)]||_[d]||l[d]||s;return t?n.createElement(b,u(u({ref:r},i),{},{components:t})):n.createElement(b,u({ref:r},i))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,u=new Array(s);u[0]=_;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<s;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},80553:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const s={id:"subspace-user-group-on-conflict",title:"subspace_user_group_on_conflict",hide_table_of_contents:!1},u=void 0,a={unversionedId:"graphql/inputs/subspace-user-group-on-conflict",id:"graphql/inputs/subspace-user-group-on-conflict",title:"subspace_user_group_on_conflict",description:'on conflict condition type for table "subspaceusergroup"',source:"@site/docs/07-graphql/inputs/subspace-user-group-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-on-conflict",permalink:"/next/graphql/inputs/subspace-user-group-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-group-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-group-on-conflict",title:"subspace_user_group_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_obj_rel_insert_input",permalink:"/next/graphql/inputs/subspace-user-group-obj-rel-insert-input"},next:{title:"subspace_user_group_order_by",permalink:"/next/graphql/inputs/subspace-user-group-order-by"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>subspace_user_group_constraint!</code>)",id:"constraint-subspace_user_group_constraint",level:4},{value:"<code>update_columns</code> (<code>[subspace_user_group_update_column!]!</code>)",id:"update_columns-subspace_user_group_update_column",level:4},{value:"<code>where</code> (<code>subspace_user_group_bool_exp</code>)",id:"where-subspace_user_group_bool_exp",level:4}],i={toc:c};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'on conflict condition type for table "subspace_user_group"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_on_conflict {\n  constraint: subspace_user_group_constraint!\n  update_columns: [subspace_user_group_update_column!]!\n  where: subspace_user_group_bool_exp\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"constraint-subspace_user_group_constraint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/subspace-user-group-constraint"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_constraint!")),")"),(0,o.kt)("h4",{id:"update_columns-subspace_user_group_update_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/subspace-user-group-update-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_update_column!]!")),")"),(0,o.kt)("h4",{id:"where-subspace_user_group_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"))}l.isMDXComponent=!0}}]);
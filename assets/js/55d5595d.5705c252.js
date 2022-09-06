"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[58277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"user-relationship-on-conflict",title:"user_relationship_on_conflict",hide_table_of_contents:!1},a=void 0,l={unversionedId:"graphql/inputs/user-relationship-on-conflict",id:"graphql/inputs/user-relationship-on-conflict",title:"user_relationship_on_conflict",description:'on conflict condition type for table "user_relationship"',source:"@site/docs/07-graphql/inputs/user-relationship-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-relationship-on-conflict",permalink:"/next/graphql/inputs/user-relationship-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/user-relationship-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"user-relationship-on-conflict",title:"user_relationship_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_relationship_min_order_by",permalink:"/next/graphql/inputs/user-relationship-min-order-by"},next:{title:"user_relationship_order_by",permalink:"/next/graphql/inputs/user-relationship-order-by"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>user_relationship_constraint!</code>)",id:"constraint-user_relationship_constraint",level:4},{value:"<code>update_columns</code> (<code>[user_relationship_update_column!]!</code>)",id:"update_columns-user_relationship_update_column",level:4},{value:"<code>where</code> (<code>user_relationship_bool_exp</code>)",id:"where-user_relationship_bool_exp",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'on conflict condition type for table "user_relationship"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_relationship_on_conflict {\n  constraint: user_relationship_constraint!\n  update_columns: [user_relationship_update_column!]!\n  where: user_relationship_bool_exp\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"constraint-user_relationship_constraint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/user-relationship-constraint"},(0,o.kt)("inlineCode",{parentName:"a"},"user_relationship_constraint!")),")"),(0,o.kt)("h4",{id:"update_columns-user_relationship_update_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/user-relationship-update-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[user_relationship_update_column!]!")),")"),(0,o.kt)("h4",{id:"where-user_relationship_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"user_relationship_bool_exp")),")"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[40476],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={id:"user-relationship",title:"user_relationship",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/subscriptions/user-relationship",id:"graphql/subscriptions/user-relationship",title:"user_relationship",description:'fetch data from the table: "user_relationship"',source:"@site/docs/07-graphql/subscriptions/user-relationship.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/user-relationship",permalink:"/next/graphql/subscriptions/user-relationship",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/user-relationship.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"user-relationship",title:"user_relationship",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_relationship_aggregate",permalink:"/next/graphql/subscriptions/user-relationship-aggregate"},next:{title:"application_link_constraint",permalink:"/next/graphql/enums/application-link-constraint"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[user_relationship_select_column!]</code>)",id:"distinct_on-user_relationship_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[user_relationship_order_by!]</code>)",id:"order_by-user_relationship_order_by",level:4},{value:"<code>where</code> (<code>user_relationship_bool_exp</code>)",id:"where-user_relationship_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>user_relationship</code>",id:"user_relationship",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'fetch data from the table: "user_relationship"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"user_relationship(\n  distinct_on: [user_relationship_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [user_relationship_order_by!]\n  where: user_relationship_bool_exp\n): [user_relationship!]!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"distinct_on-user_relationship_select_column"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/user-relationship-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[user_relationship_select_column!]")),")"),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("h4",{id:"offset-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("h4",{id:"order_by-user_relationship_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[user_relationship_order_by!]")),")"),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("h4",{id:"where-user_relationship_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_bool_exp")),")"),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"user_relationship"},(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship"))),(0,i.kt)("p",null,'columns and relationships of "user_relationship"'))}u.isMDXComponent=!0}}]);
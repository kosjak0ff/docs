"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[79755],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},i=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return r?a.createElement(f,n(n({ref:t},i),{},{components:r})):a.createElement(f,n({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,n[1]=p;for(var d=2;d<s;d++)n[d]=r[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(87462),o=(r(67294),r(3905));const s={id:"subspace-user-group-member-stddev-samp-fields",title:"subspace_user_group_member_stddev_samp_fields",hide_table_of_contents:!1},n=void 0,p={unversionedId:"graphql/objects/subspace-user-group-member-stddev-samp-fields",id:"graphql/objects/subspace-user-group-member-stddev-samp-fields",title:"subspace_user_group_member_stddev_samp_fields",description:"aggregate stddev_samp on columns",source:"@site/docs/07-graphql/objects/subspace-user-group-member-stddev-samp-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-group-member-stddev-samp-fields",permalink:"/next/graphql/objects/subspace-user-group-member-stddev-samp-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-user-group-member-stddev-samp-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-group-member-stddev-samp-fields",title:"subspace_user_group_member_stddev_samp_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_stddev_pop_fields",permalink:"/next/graphql/objects/subspace-user-group-member-stddev-pop-fields"},next:{title:"subspace_user_group_member_sum_fields",permalink:"/next/graphql/objects/subspace-user-group-member-sum-fields"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>group_row_id</code> (<code>Float</code>)",id:"group_row_id-float",level:4},{value:"<code>height</code> (<code>Float</code>)",id:"height-float",level:4},{value:"<code>row_id</code> (<code>Float</code>)",id:"row_id-float",level:4}],i={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"aggregate stddev_samp on columns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_group_member_stddev_samp_fields {\n  group_row_id: Float\n  height: Float\n  row_id: Float\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"group_row_id-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"group_row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"height-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"row_id-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"))}c.isMDXComponent=!0}}]);
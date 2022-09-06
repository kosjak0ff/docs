"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1245],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return t?n.createElement(b,o(o({ref:r},l),{},{components:t})):n.createElement(b,o({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21381:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const s={id:"subspace-user-group-member-sum-fields",title:"subspace_user_group_member_sum_fields",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/objects/subspace-user-group-member-sum-fields",id:"graphql/objects/subspace-user-group-member-sum-fields",title:"subspace_user_group_member_sum_fields",description:"aggregate sum on columns",source:"@site/docs/07-graphql/objects/subspace-user-group-member-sum-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-group-member-sum-fields",permalink:"/next/graphql/objects/subspace-user-group-member-sum-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-user-group-member-sum-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-group-member-sum-fields",title:"subspace_user_group_member_sum_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_stddev_samp_fields",permalink:"/next/graphql/objects/subspace-user-group-member-stddev-samp-fields"},next:{title:"subspace_user_group_member_var_pop_fields",permalink:"/next/graphql/objects/subspace-user-group-member-var-pop-fields"}},p={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>group_row_id</code> (<code>bigint</code>)",id:"group_row_id-bigint",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>row_id</code> (<code>Int</code>)",id:"row_id-int",level:4}],l={toc:u};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"aggregate sum on columns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_group_member_sum_fields {\n  group_row_id: bigint\n  height: bigint\n  row_id: Int\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"group_row_id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"group_row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"height-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"row_id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))}c.isMDXComponent=!0}}]);
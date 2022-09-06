"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[63827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),u=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return s.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?s.createElement(b,a(a({ref:t},l),{},{components:r})):s.createElement(b,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=r(87462),n=(r(67294),r(3905));const o={id:"delete-subspace-user-permission",title:"delete_subspace_user_permission",hide_table_of_contents:!1},a=void 0,i={unversionedId:"graphql/mutations/delete-subspace-user-permission",id:"graphql/mutations/delete-subspace-user-permission",title:"delete_subspace_user_permission",description:'delete data from the table: "subspaceuserpermission"',source:"@site/docs/07-graphql/mutations/delete-subspace-user-permission.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-subspace-user-permission",permalink:"/next/graphql/mutations/delete-subspace-user-permission",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-subspace-user-permission.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"delete-subspace-user-permission",title:"delete_subspace_user_permission",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_subspace_user_permission_by_pk",permalink:"/next/graphql/mutations/delete-subspace-user-permission-by-pk"},next:{title:"delete_subspace",permalink:"/next/graphql/mutations/delete-subspace"}},p={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>subspace_user_permission_bool_exp!</code>)",id:"where-subspace_user_permission_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_permission_mutation_response</code>",id:"subspace_user_permission_mutation_response",level:4}],l={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'delete data from the table: "subspace_user_permission"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_subspace_user_permission(\n  where: subspace_user_permission_bool_exp!\n): subspace_user_permission_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"where-subspace_user_permission_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_bool_exp!")),")"),(0,n.kt)("p",null,"filter the rows which have to be deleted"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"subspace_user_permission_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "subspace_user_permission"'))}c.isMDXComponent=!0}}]);
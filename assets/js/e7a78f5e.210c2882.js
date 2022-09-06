"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[19382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=n,u=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return r?a.createElement(u,p(p({ref:t},m),{},{components:r})):a.createElement(u,p({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={id:"delete-profiles-params",title:"delete_profiles_params",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/mutations/delete-profiles-params",id:"graphql/mutations/delete-profiles-params",title:"delete_profiles_params",description:'delete data from the table: "profiles_params"',source:"@site/docs/07-graphql/mutations/delete-profiles-params.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-profiles-params",permalink:"/next/graphql/mutations/delete-profiles-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-profiles-params.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"delete-profiles-params",title:"delete_profiles_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_profiles_params_by_pk",permalink:"/next/graphql/mutations/delete-profiles-params-by-pk"},next:{title:"delete_reaction_by_pk",permalink:"/next/graphql/mutations/delete-reaction-by-pk"}},s={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>profiles_params_bool_exp!</code>)",id:"where-profiles_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profiles_params_mutation_response</code>",id:"profiles_params_mutation_response",level:4}],m={toc:i};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'delete data from the table: "profiles_params"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_profiles_params(\n  where: profiles_params_bool_exp!\n): profiles_params_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"where-profiles_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"profiles_params_bool_exp!")),")"),(0,n.kt)("p",null,"filter the rows which have to be deleted"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"profiles_params_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/profiles-params-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"profiles_params_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "profiles_params"'))}c.isMDXComponent=!0}}]);
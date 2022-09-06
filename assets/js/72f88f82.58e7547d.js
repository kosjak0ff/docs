"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[21753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>_});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),_=s,d=m["".concat(l,".").concat(_)]||m[_]||i[_]||n;return r?a.createElement(d,p(p({ref:t},u),{},{components:r})):a.createElement(d,p({ref:t},u))}));function _(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,p=new Array(n);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,p[1]=o;for(var c=2;c<n;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>i,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=r(87462),s=(r(67294),r(3905));const n={id:"delete-subspace-free-text-params",title:"delete_subspace_free_text_params",hide_table_of_contents:!1},p=void 0,o={unversionedId:"graphql/mutations/delete-subspace-free-text-params",id:"graphql/mutations/delete-subspace-free-text-params",title:"delete_subspace_free_text_params",description:'delete data from the table: "subspacefreetext_params"',source:"@site/docs/07-graphql/mutations/delete-subspace-free-text-params.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-subspace-free-text-params",permalink:"/next/graphql/mutations/delete-subspace-free-text-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-subspace-free-text-params.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"delete-subspace-free-text-params",title:"delete_subspace_free_text_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_subspace_free_text_params_by_pk",permalink:"/next/graphql/mutations/delete-subspace-free-text-params-by-pk"},next:{title:"delete_subspace_registered_reaction_by_pk",permalink:"/next/graphql/mutations/delete-subspace-registered-reaction-by-pk"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>subspace_free_text_params_bool_exp!</code>)",id:"where-subspace_free_text_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_free_text_params_mutation_response</code>",id:"subspace_free_text_params_mutation_response",level:4}],u={toc:c};function i(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'delete data from the table: "subspace_free_text_params"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_subspace_free_text_params(\n  where: subspace_free_text_params_bool_exp!\n): subspace_free_text_params_mutation_response\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"where-subspace_free_text_params_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_bool_exp!")),")"),(0,s.kt)("p",null,"filter the rows which have to be deleted"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_free_text_params_mutation_response"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-free-text-params-mutation-response"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_mutation_response"))),(0,s.kt)("p",null,'response of any mutation on the table "subspace_free_text_params"'))}i.isMDXComponent=!0}}]);
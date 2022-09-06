"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"delete-application-link",title:"delete_application_link",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/mutations/delete-application-link",id:"graphql/mutations/delete-application-link",title:"delete_application_link",description:'delete data from the table: "application_link"',source:"@site/docs/07-graphql/mutations/delete-application-link.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-application-link",permalink:"/next/graphql/mutations/delete-application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-application-link.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"delete-application-link",title:"delete_application_link",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_application_link_oracle_request",permalink:"/next/graphql/mutations/delete-application-link-oracle-request"},next:{title:"delete_block_by_pk",permalink:"/next/graphql/mutations/delete-block-by-pk"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>application_link_bool_exp!</code>)",id:"where-application_link_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>application_link_mutation_response</code>",id:"application_link_mutation_response",level:4}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'delete data from the table: "application_link"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_application_link(\n  where: application_link_bool_exp!\n): application_link_mutation_response\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"where-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp!")),")"),(0,i.kt)("p",null,"filter the rows which have to be deleted"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"application_link_mutation_response"},(0,i.kt)("a",{parentName:"h4",href:"../objects/application-link-mutation-response"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_mutation_response"))),(0,i.kt)("p",null,'response of any mutation on the table "application_link"'))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[69543],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"user-relationship",title:"user_relationship",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/objects/user-relationship",id:"graphql/objects/user-relationship",title:"user_relationship",description:'columns and relationships of "user_relationship"',source:"@site/docs/07-graphql/objects/user-relationship.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/user-relationship",permalink:"/next/graphql/objects/user-relationship",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/user-relationship.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"user-relationship",title:"user_relationship",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_relationship_variance_fields",permalink:"/next/graphql/objects/user-relationship-variance-fields"},next:{title:"application_link_aggregate",permalink:"/next/graphql/queries/application-link-aggregate"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>counterparty</code> (<code>profile!</code>)",id:"counterparty-profile",level:4},{value:"<code>counterparty_address</code> (<code>String!</code>)",id:"counterparty_address-string",level:4},{value:"<code>creator</code> (<code>profile!</code>)",id:"creator-profile",level:4},{value:"<code>creator_address</code> (<code>String!</code>)",id:"creator_address-string",level:4},{value:"<code>height</code> (<code>bigint!</code>)",id:"height-bigint",level:4},{value:"<code>subspace</code> (<code>subspace!</code>)",id:"subspace-subspace",level:4},{value:"<code>subspace_id</code> (<code>bigint!</code>)",id:"subspace_id-bigint",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'columns and relationships of "user_relationship"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type user_relationship {\n  counterparty: profile!\n  counterparty_address: String!\n  creator: profile!\n  creator_address: String!\n  height: bigint!\n  subspace: subspace!\n  subspace_id: bigint!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"counterparty-profile"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"counterparty"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,n.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,n.kt)("p",null,"An object relationship"),(0,n.kt)("h4",{id:"counterparty_address-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"counterparty_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,n.kt)("h4",{id:"creator-profile"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creator"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,n.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,n.kt)("p",null,"An object relationship"),(0,n.kt)("h4",{id:"creator_address-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creator_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,n.kt)("h4",{id:"height-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,n.kt)("h4",{id:"subspace-subspace"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace!")),")"),(0,n.kt)("p",null,"An object relationship"),(0,n.kt)("h4",{id:"subspace_id-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint!")),")"))}d.isMDXComponent=!0}}]);
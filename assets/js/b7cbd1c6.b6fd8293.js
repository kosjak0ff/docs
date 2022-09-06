"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[49110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=o,m=b["".concat(a,".").concat(d)]||b[d]||p[d]||c;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=b;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},40171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const c={id:"insert-user-block-one",title:"insert_user_block_one",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/mutations/insert-user-block-one",id:"graphql/mutations/insert-user-block-one",title:"insert_user_block_one",description:'insert a single row into the table: "user_block"',source:"@site/docs/07-graphql/mutations/insert-user-block-one.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-user-block-one",permalink:"/next/graphql/mutations/insert-user-block-one",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-user-block-one.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-user-block-one",title:"insert_user_block_one",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_subspace",permalink:"/next/graphql/mutations/insert-subspace"},next:{title:"insert_user_block",permalink:"/next/graphql/mutations/insert-user-block"}},a={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>object</code> (<code>user_block_insert_input!</code>)",id:"object-user_block_insert_input",level:4},{value:"<code>on_conflict</code> (<code>user_block_on_conflict</code>)",id:"on_conflict-user_block_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>user_block</code>",id:"user_block",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'insert a single row into the table: "user_block"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_user_block_one(\n  object: user_block_insert_input!\n  on_conflict: user_block_on_conflict\n): user_block\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"object-user_block_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"object"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/user-block-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block_insert_input!")),")"),(0,o.kt)("p",null,"the row to be inserted"),(0,o.kt)("h4",{id:"on_conflict-user_block_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/user-block-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"user_block"},(0,o.kt)("a",{parentName:"h4",href:"../objects/user-block"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block"))),(0,o.kt)("p",null,'columns and relationships of "user_block"'))}p.isMDXComponent=!0}}]);
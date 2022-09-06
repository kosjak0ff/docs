"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[49874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||c;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const c={id:"insert-post-reference-one",title:"insert_post_reference_one",hide_table_of_contents:!1},i=void 0,a={unversionedId:"graphql/mutations/insert-post-reference-one",id:"graphql/mutations/insert-post-reference-one",title:"insert_post_reference_one",description:'insert a single row into the table: "post_reference"',source:"@site/docs/07-graphql/mutations/insert-post-reference-one.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-post-reference-one",permalink:"/next/graphql/mutations/insert-post-reference-one",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-post-reference-one.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-post-reference-one",title:"insert_post_reference_one",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_post_one",permalink:"/next/graphql/mutations/insert-post-one"},next:{title:"insert_post_reference",permalink:"/next/graphql/mutations/insert-post-reference"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>object</code> (<code>post_reference_insert_input!</code>)",id:"object-post_reference_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_reference_on_conflict</code>)",id:"on_conflict-post_reference_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_reference</code>",id:"post_reference",level:4}],l={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'insert a single row into the table: "post_reference"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_post_reference_one(\n  object: post_reference_insert_input!\n  on_conflict: post_reference_on_conflict\n): post_reference\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"object-post_reference_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"object"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-reference-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"post_reference_insert_input!")),")"),(0,o.kt)("p",null,"the row to be inserted"),(0,o.kt)("h4",{id:"on_conflict-post_reference_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-reference-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"post_reference_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_reference"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-reference"},(0,o.kt)("inlineCode",{parentName:"a"},"post_reference"))),(0,o.kt)("p",null,'columns and relationships of "post_reference"'))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[24182],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>_});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(r),_=a,b=d["".concat(c,".").concat(_)]||d[_]||u[_]||i;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"insert-subspace-registered-reaction-one",title:"insert_subspace_registered_reaction_one",hide_table_of_contents:!1},s=void 0,o={unversionedId:"graphql/mutations/insert-subspace-registered-reaction-one",id:"graphql/mutations/insert-subspace-registered-reaction-one",title:"insert_subspace_registered_reaction_one",description:'insert a single row into the table: "subspaceregisteredreaction"',source:"@site/docs/07-graphql/mutations/insert-subspace-registered-reaction-one.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-subspace-registered-reaction-one",permalink:"/next/graphql/mutations/insert-subspace-registered-reaction-one",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-subspace-registered-reaction-one.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-subspace-registered-reaction-one",title:"insert_subspace_registered_reaction_one",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_subspace_one",permalink:"/next/graphql/mutations/insert-subspace-one"},next:{title:"insert_subspace_registered_reaction_params_one",permalink:"/next/graphql/mutations/insert-subspace-registered-reaction-params-one"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>object</code> (<code>subspace_registered_reaction_insert_input!</code>)",id:"object-subspace_registered_reaction_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_registered_reaction_on_conflict</code>)",id:"on_conflict-subspace_registered_reaction_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_registered_reaction</code>",id:"subspace_registered_reaction",level:4}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'insert a single row into the table: "subspace_registered_reaction"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_subspace_registered_reaction_one(\n  object: subspace_registered_reaction_insert_input!\n  on_conflict: subspace_registered_reaction_on_conflict\n): subspace_registered_reaction\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"object-subspace_registered_reaction_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"object"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_insert_input!")),")"),(0,a.kt)("p",null,"the row to be inserted"),(0,a.kt)("h4",{id:"on_conflict-subspace_registered_reaction_on_conflict"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-on-conflict"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_on_conflict")),")"),(0,a.kt)("p",null,"on conflict condition"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"subspace_registered_reaction"},(0,a.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction"))),(0,a.kt)("p",null,'columns and relationships of "subspace_registered_reaction"'))}u.isMDXComponent=!0}}]);
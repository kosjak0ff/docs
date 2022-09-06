"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[49639],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>_});var n=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function a(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(s),_=r,b=m["".concat(p,".").concat(_)]||m[_]||l[_]||i;return s?n.createElement(b,o(o({ref:t},c),{},{components:s})):n.createElement(b,o({ref:t},c))}));function _(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=s.length,o=new Array(i);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<i;u++)o[u]=s[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},37446:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=s(87462),r=(s(67294),s(3905));const i={id:"insert-subspace-user-permission",title:"insert_subspace_user_permission",hide_table_of_contents:!1},o=void 0,a={unversionedId:"graphql/mutations/insert-subspace-user-permission",id:"graphql/mutations/insert-subspace-user-permission",title:"insert_subspace_user_permission",description:'insert data into the table: "subspaceuserpermission"',source:"@site/docs/07-graphql/mutations/insert-subspace-user-permission.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-subspace-user-permission",permalink:"/next/graphql/mutations/insert-subspace-user-permission",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-subspace-user-permission.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-subspace-user-permission",title:"insert_subspace_user_permission",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_subspace_user_permission_one",permalink:"/next/graphql/mutations/insert-subspace-user-permission-one"},next:{title:"insert_subspace",permalink:"/next/graphql/mutations/insert-subspace"}},p={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[subspace_user_permission_insert_input!]!</code>)",id:"objects-subspace_user_permission_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_user_permission_on_conflict</code>)",id:"on_conflict-subspace_user_permission_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_permission_mutation_response</code>",id:"subspace_user_permission_mutation_response",level:4}],c={toc:u};function l(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'insert data into the table: "subspace_user_permission"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_subspace_user_permission(\n  objects: [subspace_user_permission_insert_input!]!\n  on_conflict: subspace_user_permission_on_conflict\n): subspace_user_permission_mutation_response\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"objects-subspace_user_permission_insert_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-insert-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_insert_input!]!")),")"),(0,r.kt)("p",null,"the rows to be inserted"),(0,r.kt)("h4",{id:"on_conflict-subspace_user_permission_on_conflict"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-on-conflict"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_on_conflict")),")"),(0,r.kt)("p",null,"on conflict condition"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"subspace_user_permission_mutation_response"},(0,r.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission-mutation-response"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_mutation_response"))),(0,r.kt)("p",null,'response of any mutation on the table "subspace_user_permission"'))}l.isMDXComponent=!0}}]);
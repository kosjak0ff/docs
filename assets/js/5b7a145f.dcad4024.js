"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[67075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=s.createContext({}),p=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?s.createElement(b,o(o({ref:t},l),{},{components:r})):s.createElement(b,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var s=r(87462),n=(r(67294),r(3905));const a={id:"subspace-user-permission",title:"subspace_user_permission",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/objects/subspace-user-permission",id:"version-4.2.0/graphql/objects/subspace-user-permission",title:"subspace_user_permission",description:'columns and relationships of "subspaceuserpermission"',source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/subspace-user-permission.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-permission",permalink:"/graphql/objects/subspace-user-permission",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/objects/subspace-user-permission.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-user-permission",title:"subspace_user_permission",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group",permalink:"/graphql/objects/subspace-user-group"},next:{title:"subspace",permalink:"/graphql/objects/subspace"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>permissions</code> (<code>_text!</code>)",id:"permissions-_text",level:4},{value:"<code>section</code> (<code>subspace_section!</code>)",id:"section-subspace_section",level:4},{value:"<code>user_address</code> (<code>String!</code>)",id:"user_address-string",level:4}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'columns and relationships of "subspace_user_permission"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_permission {\n  permissions: _text!\n  section: subspace_section!\n  user_address: String!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"permissions-_text"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"permissions"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,n.kt)("inlineCode",{parentName:"a"},"_text!")),")"),(0,n.kt)("h4",{id:"section-subspace_section"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-section"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_section!")),")"),(0,n.kt)("p",null,"An object relationship"),(0,n.kt)("h4",{id:"user_address-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!")),")"))}u.isMDXComponent=!0}}]);
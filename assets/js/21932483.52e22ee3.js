"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[74981],{3905:(e,r,s)=>{s.d(r,{Zo:()=>l,kt:()=>d});var t=s(67294);function n(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function o(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?o(Object(s),!0).forEach((function(r){n(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function u(e,r){if(null==e)return{};var s,t,n=function(e,r){if(null==e)return{};var s,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],r.indexOf(s)>=0||(n[s]=e[s]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var p=t.createContext({}),a=function(e){var r=t.useContext(p),s=r;return e&&(s="function"==typeof e?e(r):i(i({},r),e)),s},l=function(e){var r=a(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var s=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=a(s),d=n,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return s?t.createElement(f,i(i({ref:r},l),{},{components:s})):t.createElement(f,i({ref:r},l))}));function d(e,r){var s=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=s.length,i=new Array(o);i[0]=m;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var a=2;a<o;a++)i[a]=s[a];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},38179:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>a});var t=s(87462),n=(s(67294),s(3905));const o={id:"user-permissions",title:"Query user permissions",sidebar_label:"Query user permissions",slug:"user-permissions"},i=void 0,u={unversionedId:"developers/queries/subspaces/user-permissions",id:"version-3/developers/queries/subspaces/user-permissions",title:"Query user permissions",description:"Query user permissions",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/user-permissions.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/user-permissions",permalink:"/3/developers/queries/subspaces/user-permissions",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/user-permissions.md",tags:[],version:"3",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"user-permissions",title:"Query user permissions",sidebar_label:"Query user permissions",slug:"user-permissions"},sidebar:"version-3/docs",previous:{title:"Query user group members",permalink:"/3/developers/queries/subspaces/user-group-members"},next:{title:"Observing data",permalink:"/3/developers/observe-data"}},p={},a=[{value:"Query user permissions",id:"query-user-permissions",level:2}],l={toc:a};function c(e){let{components:r,...s}=e;return(0,n.kt)("wrapper",(0,t.Z)({},l,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"query-user-permissions"},"Query user permissions"),(0,n.kt)("p",null,"This query allows to get the permissions for the given user"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CLI")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  desmos query subspaces permissions [subspace-id] [user]\n\n# Examples\n# desmos query subspaces permissions 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}c.isMDXComponent=!0}}]);
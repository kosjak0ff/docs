"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29733],{3905:(e,r,s)=>{s.d(r,{Zo:()=>i,kt:()=>d});var t=s(67294);function n(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function a(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function u(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?a(Object(s),!0).forEach((function(r){n(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function o(e,r){if(null==e)return{};var s,t,n=function(e,r){if(null==e)return{};var s,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],r.indexOf(s)>=0||(n[s]=e[s]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)s=a[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var p=t.createContext({}),c=function(e){var r=t.useContext(p),s=r;return e&&(s="function"==typeof e?e(r):u(u({},r),e)),s},i=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var s=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=c(s),d=n,y=b["".concat(p,".").concat(d)]||b[d]||l[d]||a;return s?t.createElement(y,u(u({ref:r},i),{},{components:s})):t.createElement(y,u({ref:r},i))}));function d(e,r){var s=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=s.length,u=new Array(a);u[0]=b;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var c=2;c<a;c++)u[c]=s[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,s)}b.displayName="MDXCreateElement"},34087:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(87462),n=(s(67294),s(3905));const a={id:"subspace",title:"Query subspace",sidebar_label:"Query subspace",slug:"subspace"},u=void 0,o={unversionedId:"developers/queries/subspaces/subspace",id:"version-3/developers/queries/subspaces/subspace",title:"Query subspace",description:"Query subspace",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/subspace.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/subspace",permalink:"/3/developers/queries/subspaces/subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/subspace.md",tags:[],version:"3",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace",title:"Query subspace",sidebar_label:"Query subspace",slug:"subspace"},sidebar:"version-3/docs",previous:{title:"Query subspaces",permalink:"/3/developers/queries/subspaces/subspaces"},next:{title:"Query user groups",permalink:"/3/developers/queries/subspaces/user-groups"}},p={},c=[{value:"Query subspace",id:"query-subspace",level:2}],i={toc:c};function l(e){let{components:r,...s}=e;return(0,n.kt)("wrapper",(0,t.Z)({},i,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"query-subspace"},"Query subspace"),(0,n.kt)("p",null,"This query allows to get all the information about the subspace with the given id"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CLI")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces subspace [id]\n\n# Examples\n# desmos query subspaces subspace 1\n")))}l.isMDXComponent=!0}}]);
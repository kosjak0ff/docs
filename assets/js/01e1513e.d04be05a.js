"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29733],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return d}});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},u=Object.keys(e);for(s=0;s<u.length;s++)t=u[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(s=0;s<u.length;s++)t=u[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=s.createContext({}),p=function(e){var r=s.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},i=function(e){var r=p(e.components);return s.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},b=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,f=b["".concat(c,".").concat(d)]||b[d]||l[d]||u;return t?s.createElement(f,a(a({ref:r},i),{},{components:t})):s.createElement(f,a({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,a=new Array(u);a[0]=b;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var p=2;p<u;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}b.displayName="MDXCreateElement"},34087:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var s=t(87462),n=t(63366),u=(t(67294),t(3905)),a=["components"],o={id:"subspace",title:"Query subspace",sidebar_label:"Query subspace",slug:"subspace"},c=void 0,p={unversionedId:"developers/queries/subspaces/subspace",id:"version-3/developers/queries/subspaces/subspace",title:"Query subspace",description:"Query subspace",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/subspace.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/subspace",permalink:"/3/developers/queries/subspaces/subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/subspace.md",tags:[],version:"3",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace",title:"Query subspace",sidebar_label:"Query subspace",slug:"subspace"},sidebar:"version-3/docs",previous:{title:"Query subspaces",permalink:"/3/developers/queries/subspaces/subspaces"},next:{title:"Query user groups",permalink:"/3/developers/queries/subspaces/user-groups"}},i={},l=[{value:"Query subspace",id:"query-subspace",level:2}],b={toc:l};function d(e){var r=e.components,t=(0,n.Z)(e,a);return(0,u.kt)("wrapper",(0,s.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"query-subspace"},"Query subspace"),(0,u.kt)("p",null,"This query allows to get all the information about the subspace with the given id"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"CLI")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces subspace [id]\n\n# Examples\n# desmos query subspaces subspace 1\n")))}d.isMDXComponent=!0}}]);
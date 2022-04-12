"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[4981],{3905:function(e,r,s){s.d(r,{Zo:function(){return c},kt:function(){return d}});var n=s(7294);function t(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function o(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?o(Object(s),!0).forEach((function(r){t(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function u(e,r){if(null==e)return{};var s,n,t=function(e,r){if(null==e)return{};var s,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],r.indexOf(s)>=0||(t[s]=e[s]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)s=o[n],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var p=n.createContext({}),a=function(e){var r=n.useContext(p),s=r;return e&&(s="function"==typeof e?e(r):i(i({},r),e)),s},c=function(e){var r=a(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var s=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=a(s),d=t,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||o;return s?n.createElement(f,i(i({ref:r},c),{},{components:s})):n.createElement(f,i({ref:r},c))}));function d(e,r){var s=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=s.length,i=new Array(o);i[0]=m;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:t,i[1]=u;for(var a=2;a<o;a++)i[a]=s[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},2715:function(e,r,s){s.r(r),s.d(r,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return a},toc:function(){return c},default:function(){return m}});var n=s(7462),t=s(3366),o=(s(7294),s(3905)),i=["components"],u={id:"user-permissions",title:"Query user permissions",sidebar_label:"Query user permissions",slug:"user-permissions"},p=void 0,a={unversionedId:"developers/queries/subspaces/user-permissions",id:"version-3/developers/queries/subspaces/user-permissions",isDocsHomePage:!1,title:"Query user permissions",description:"Query user permissions",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/user-permissions.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/user-permissions",permalink:"/developers/queries/subspaces/user-permissions",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/user-permissions.md",version:"3",lastUpdatedAt:1649770622,formattedLastUpdatedAt:"4/12/2022",frontMatter:{id:"user-permissions",title:"Query user permissions",sidebar_label:"Query user permissions",slug:"user-permissions"},sidebar:"version-3/docs",previous:{title:"Query user group members",permalink:"/developers/queries/subspaces/user-group-members"},next:{title:"Observing data",permalink:"/developers/observe-data"}},c=[{value:"Query user permissions",id:"query-user-permissions",children:[]}],l={toc:c};function m(e){var r=e.components,s=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"query-user-permissions"},"Query user permissions"),(0,o.kt)("p",null,"This query allows to get the permissions for the given user"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  desmos query subspaces permissions [subspace-id] [user]\n\n# Examples\n# desmos query subspaces permissions 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}m.isMDXComponent=!0}}]);
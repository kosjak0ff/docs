"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[3087],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3470:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],a={id:"incoming-dtag-requests",title:"Query incoming DTag requests",sidebar_label:"Incoming DTag requests",slug:"incoming-dtag-requests"},u=void 0,c={unversionedId:"developers/queries/profiles/incoming-dtag-requests",id:"developers/queries/profiles/incoming-dtag-requests",isDocsHomePage:!1,title:"Query incoming DTag requests",description:"Query incoming DTag requests",source:"@site/docs/02-developers/04-queries/profiles/incoming-dtag-requests.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/incoming-dtag-requests",permalink:"/next/developers/queries/profiles/incoming-dtag-requests",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/04-queries/profiles/incoming-dtag-requests.md",version:"current",lastUpdatedAt:1649768137,formattedLastUpdatedAt:"4/12/2022",frontMatter:{id:"incoming-dtag-requests",title:"Query incoming DTag requests",sidebar_label:"Incoming DTag requests",slug:"incoming-dtag-requests"},sidebar:"docs",previous:{title:"Profile",permalink:"/next/developers/queries/profiles/profile"},next:{title:"Chain links",permalink:"/next/developers/queries/profiles/chain-links"}},l=[{value:"Query incoming DTag requests",id:"query-incoming-dtag-requests",children:[]}],p={toc:l};function d(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"query-incoming-dtag-requests"},"Query incoming DTag requests"),(0,o.kt)("p",null,"This query allows you to retrieve all the DTag incoming transfer requests with an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles incoming-dtag-transfer-requests [[receiver]] [flags]\n\n# Examples\n# desmos query profiles incoming-dtag-transfer-requests\n# desmos query profiles incoming-dtag-transfer-requests desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n# desmos query profiles incoming-dtag-transfer-requests desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100\n")))}d.isMDXComponent=!0}}]);
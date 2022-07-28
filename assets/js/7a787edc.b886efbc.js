"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[87103],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87419:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=t(87462),s=t(63366),o=(t(67294),t(3905)),i=["components"],a={id:"incoming-dtag-requests",title:"Query incoming DTag requests",sidebar_label:"Incoming DTag requests",slug:"incoming-dtag-requests"},u=void 0,c={unversionedId:"developers/queries/profiles/incoming-dtag-requests",id:"version-2.3/developers/queries/profiles/incoming-dtag-requests",title:"Query incoming DTag requests",description:"Query incoming DTag requests",source:"@site/versioned_docs/version-2.3/02-developers/04-queries/profiles/incoming-dtag-requests.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/incoming-dtag-requests",permalink:"/2.3/developers/queries/profiles/incoming-dtag-requests",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/04-queries/profiles/incoming-dtag-requests.md",tags:[],version:"2.3",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"incoming-dtag-requests",title:"Query incoming DTag requests",sidebar_label:"Incoming DTag requests",slug:"incoming-dtag-requests"},sidebar:"version-2.3/docs",previous:{title:"Profile",permalink:"/2.3/developers/queries/profiles/profile"},next:{title:"Relationships",permalink:"/2.3/developers/queries/profiles/relationships"}},l={},p=[{value:"Query incoming DTag requests",id:"query-incoming-dtag-requests",level:2}],d={toc:p};function m(e){var r=e.components,t=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"query-incoming-dtag-requests"},"Query incoming DTag requests"),(0,o.kt)("p",null,"This query allows you to retrieve the DTag requests with the optional user ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles incoming-dtag-transfer-requests [[address]]\n\n# Example\n# desmos query profiles incoming-dtag-transfer-requests\n# desmos query profiles incoming-dtag-transfer-requests desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}m.isMDXComponent=!0}}]);
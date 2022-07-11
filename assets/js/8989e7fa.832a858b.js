"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[14681],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return r?t.createElement(m,s(s({ref:n},u),{},{components:r})):t.createElement(m,s({ref:n},u))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4344:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),s=["components"],l={id:"chain-links",title:"Query chain links",sidebar_label:"Chain links",slug:"chain-links"},a=void 0,c={unversionedId:"developers/queries/profiles/chain-links",id:"version-2.3/developers/queries/profiles/chain-links",title:"Query chain links",description:"Query chain links",source:"@site/versioned_docs/version-2.3/02-developers/04-queries/profiles/chain-links.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/chain-links",permalink:"/2.3/developers/queries/profiles/chain-links",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/04-queries/profiles/chain-links.md",tags:[],version:"2.3",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"chain-links",title:"Query chain links",sidebar_label:"Chain links",slug:"chain-links"},sidebar:"version-2.3/docs",previous:{title:"Blocked users",permalink:"/2.3/developers/queries/profiles/blocked-users"},next:{title:"Application links",permalink:"/2.3/developers/queries/profiles/application-link"}},u={},p=[{value:"Query chain links",id:"query-chain-links",level:2}],d={toc:p};function f(e){var n=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"query-chain-links"},"Query chain links"),(0,o.kt)("p",null,"This query allows you to retrieve the chain links with the optional user ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles chain-links [[address]]\n\n# Example\n# desmos query chain-links\n# desmos query chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[23241],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=p(r),d=s,v=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(v,l(l({ref:t},m),{},{components:r})):n.createElement(v,l({ref:t},m))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,l=new Array(o);l[0]=c;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},99005:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),l=["components"],a={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},i="x/relationships",p={unversionedId:"developers/modules/relationships/overview",id:"version-4.1.0/developers/modules/relationships/overview",title:"Overview",description:"This document specifies the Relationships module of Desmos.",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/relationships/01-overview.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/overview",permalink:"/4.1.0/developers/modules/relationships/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/relationships/01-overview.md",tags:[],version:"4.1.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/4.1.0/developers/modules/profiles/client"},next:{title:"Concepts",permalink:"/4.1.0/developers/modules/relationships/concepts"}},m={},u=[{value:"Contents",id:"contents",level:2}],c={toc:u};function d(e){var t=e.components,r=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xrelationships"},(0,o.kt)("inlineCode",{parentName:"h1"},"x/relationships")),(0,o.kt)("p",null,"This document specifies the Relationships module of Desmos. "),(0,o.kt)("p",null,"The module allows Desmos users to establish relationships between them, and also to block misbehaving users from harassing them in the future.  "),(0,o.kt)("h2",{id:"contents"},"Contents"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/relationships/concepts"},"Concepts")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/concepts#relationship"},"Relationship")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/concepts#user-block"},"User Block")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/relationships/state"},"State")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/state#relationships"},"Relationship")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/state#user-blocks"},"User Blocks")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/relationships/messages"},"Msg Server")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/messages#msgcreaterelationship"},"Msg/CreateRelationship")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/messages#msgdeleterelationship"},"Msg/DeleteRelationship")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/messages#msgblockuser"},"Msg/BlockUser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/messages#msgunblockuser"},"Msg/UnblockUser")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/relationships/events"},"Events")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/events#handlers"},"Handlers")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/relationships/client"},"Client")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/client#cli"},"CLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/client#grpc"},"gRPC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/relationships/client#rest"},"REST"))))))}d.isMDXComponent=!0}}]);
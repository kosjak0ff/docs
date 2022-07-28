"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[59025],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,c=d["".concat(i,".").concat(f)]||d[f]||u[f]||l;return r?a.createElement(c,s(s({ref:t},m),{},{components:r})):a.createElement(c,s({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93642:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),s=["components"],o={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},i="x/profiles",p={unversionedId:"developers/modules/profiles/overview",id:"developers/modules/profiles/overview",title:"Overview",description:"Abstract",source:"@site/docs/02-developers/02-modules/profiles/01-overview.md",sourceDirName:"02-developers/02-modules/profiles",slug:"/developers/modules/profiles/overview",permalink:"/next/developers/modules/profiles/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/profiles/01-overview.md",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Overview",permalink:"/next/developers/overview"},next:{title:"Concepts",permalink:"/next/developers/modules/profiles/concepts"}},m={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"xprofiles"},(0,l.kt)("inlineCode",{parentName:"h1"},"x/profiles")),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"This document specifies the profiles module of Desmos.  "),(0,l.kt)("p",null,"This module allows the creation and management of an on-chain social profile that can be connected to external chains and services."),(0,l.kt)("h2",{id:"contents"},"Contents"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/next/developers/modules/profiles/concepts"},"Concepts")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/concepts#profile"},"Profile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/concepts#dtag-transfer-request"},"DTag Transfer Request")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/concepts#chain-link"},"Chain Link")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/concepts#default-external-address"},"Default External Address")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/concepts#application-link"},"Application Link")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/next/developers/modules/profiles/state"},"State")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/state#profile"},"Profile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/state#dtag-transfer-request"},"DTag Transfer Request")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/state#chain-link"},"Chain Link")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/state#default-external-address"},"Default External Address")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/state#application-link"},"Application Link")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/state#ibc-port"},"IBC Port")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/next/developers/modules/profiles/messages"},"Msg Service")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msgsaveprofile"},"Msg/SaveProfile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msgdeleteprofile"},"Msg/DeleteProfile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msgrequestdtagtransfer"},"Msg/RequestDTagTransfer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msgcanceldtagtransferrequest"},"Msg/CancelDTagTransferRequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msgacceptdtagtransferrequest"},"Msg/AcceptDTagTransferRequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msgrefusedtagtransferrequest"},"Msg/RefuseDTagTransferRequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msglinkchainaccount"},"Msg/LinkChainAccount")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msgunlinkchainaccount"},"Msg/UnlinkChainAccount")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msgsetdefaultexternaladdress"},"Msg/SetDefaultExternalAddress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msglinkapplication"},"Msg/LinkApplication")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/messages#msgunlinkapplication"},"Msg/UnlinkApplication")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/next/developers/modules/profiles/events"},"Events")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/events#handlers"},"Handlers")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/events#keeper"},"Keeper")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/next/developers/modules/profiles/params"},"Parameters"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/next/developers/modules/profiles/client"},"Client")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/client#cli"},"CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/client#grpc"},"gRPC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/developers/modules/profiles/client#rest"},"REST"))))))}f.isMDXComponent=!0}}]);
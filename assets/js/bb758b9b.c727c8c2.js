"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[51416],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),i=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=i(e.components);return s.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=i(r),c=n,v=d["".concat(p,".").concat(c)]||d[c]||u[c]||a;return r?s.createElement(v,o(o({ref:t},m),{},{components:r})):s.createElement(v,o({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38797:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var s=r(87462),n=r(63366),a=(r(67294),r(3905)),o=["components"],l={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},p="x/posts",i={unversionedId:"developers/modules/posts/overview",id:"developers/modules/posts/overview",title:"Overview",description:"Abstract",source:"@site/docs/02-developers/02-modules/posts/01-overview.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/overview",permalink:"/next/developers/modules/posts/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/posts/01-overview.md",tags:[],version:"current",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/next/developers/modules/subspaces/client"},next:{title:"Concepts",permalink:"/next/developers/modules/posts/concepts"}},m={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],d={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xposts"},(0,a.kt)("inlineCode",{parentName:"h1"},"x/posts")),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This document specifies the posts module of Desmos.  "),(0,a.kt)("p",null,"This module allows the creation and management of on-chain contents in the form of posts that can be enriched with different\nkind of data."),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/concepts"},"Concepts")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/concepts#post"},"Post")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/concepts#attachment"},"Attchment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/concepts#media"},"Media")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/concepts#poll"},"Poll")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/state"},"State")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#next-post-id"},"Next Post ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#post"},"Post")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#post-section"},"Next Attachment ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#attachment"},"Attachment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#user-answer"},"User Answer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#active-poll-queue"},"Active Poll Queue")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/messages"},"Msg Service")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgcreatepost"},"Msg/CreatePost")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgeditpost"},"Msg/EditPost")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgdeletepost"},"Msg/DeletePost")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgaddpostattachment"},"Msg/AddPostAttachment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgremovepostattachment"},"Msg/RemovePostAttachment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msganswerpoll"},"Msg/AnswerPoll")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/events"},"Events")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/events#handlers"},"Handlers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/events#keeper"},"Keeper")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/permissions"},"Permissions"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/params"},"Parameters"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/client"},"Client")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/client#cli"},"CLI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/client#grpc"},"gRPC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/client#rest"},"REST"))))))}c.isMDXComponent=!0}}]);
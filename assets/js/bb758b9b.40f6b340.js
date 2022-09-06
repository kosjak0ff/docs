"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[51416],{3905:(e,t,s)=>{s.d(t,{Zo:()=>m,kt:()=>c});var r=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,r,a=function(e,t){if(null==e)return{};var s,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},m=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var s=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=i(s),c=a,v=u["".concat(p,".").concat(c)]||u[c]||d[c]||n;return s?r.createElement(v,o(o({ref:t},m),{},{components:s})):r.createElement(v,o({ref:t},m))}));function c(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=s.length,o=new Array(n);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<n;i++)o[i]=s[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,s)}u.displayName="MDXCreateElement"},38797:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var r=s(87462),a=(s(67294),s(3905));const n={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},o="x/posts",l={unversionedId:"developers/modules/posts/overview",id:"developers/modules/posts/overview",title:"Overview",description:"Abstract",source:"@site/docs/02-developers/02-modules/posts/01-overview.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/overview",permalink:"/next/developers/modules/posts/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/posts/01-overview.md",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/next/developers/modules/subspaces/client"},next:{title:"Concepts",permalink:"/next/developers/modules/posts/concepts"}},p={},i=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],m={toc:i};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xposts"},(0,a.kt)("inlineCode",{parentName:"h1"},"x/posts")),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This document specifies the posts module of Desmos.  "),(0,a.kt)("p",null,"This module allows the creation and management of on-chain contents in the form of posts that can be enriched with different\nkind of data."),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/concepts"},"Concepts")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/concepts#post"},"Post")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/concepts#attachment"},"Attchment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/concepts#media"},"Media")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/concepts#poll"},"Poll")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/state"},"State")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#next-post-id"},"Next Post ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#post"},"Post")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#post-section"},"Next Attachment ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#attachment"},"Attachment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#user-answer"},"User Answer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/state#active-poll-queue"},"Active Poll Queue")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/messages"},"Msg Service")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgcreatepost"},"Msg/CreatePost")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgeditpost"},"Msg/EditPost")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgdeletepost"},"Msg/DeletePost")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgaddpostattachment"},"Msg/AddPostAttachment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msgremovepostattachment"},"Msg/RemovePostAttachment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/messages#msganswerpoll"},"Msg/AnswerPoll")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/events"},"Events")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/events#handlers"},"Handlers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/events#keeper"},"Keeper")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/permissions"},"Permissions"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/params"},"Parameters"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/next/developers/modules/posts/client"},"Client")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/client#cli"},"CLI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/client#grpc"},"gRPC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/developers/modules/posts/client#rest"},"REST"))))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90683],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62488:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],o={id:"state",title:"State",sidebar_label:"State",slug:"state"},l="State",c={unversionedId:"developers/modules/reactions/state",id:"version-4.1.0/developers/modules/reactions/state",title:"State",description:"Next Registered Reaction ID",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/reactions/03-state.md",sourceDirName:"02-developers/02-modules/reactions",slug:"/developers/modules/reactions/state",permalink:"/developers/modules/reactions/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/reactions/03-state.md",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/developers/modules/reactions/concepts"},next:{title:"Messages",permalink:"/developers/modules/reactions/messages"}},u={},p=[{value:"Next Registered Reaction ID",id:"next-registered-reaction-id",level:2},{value:"Registered Reaction",id:"registered-reaction",level:2},{value:"Next Reaction ID",id:"next-reaction-id",level:2},{value:"Reaction",id:"reaction",level:2},{value:"Reactions Subspace Params",id:"reactions-subspace-params",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state"},"State"),(0,i.kt)("h2",{id:"next-registered-reaction-id"},"Next Registered Reaction ID"),(0,i.kt)("p",null,"The next registered reaction id is stored using the associated subspace id as the key:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x01 | Subspace ID | -> bytes(NextRegisteredReactionID)"))),(0,i.kt)("h2",{id:"registered-reaction"},"Registered Reaction"),(0,i.kt)("p",null,"A registered reaction is stored using the associated subspace id and its id as the key. This allows to easily\nquery:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"all the registered reactions of a subspace;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a specific registered reaction.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"0x02 | Subspace ID | Reaction ID | -> ProtocolBuffer(RegisteredReaction)")))),(0,i.kt)("h2",{id:"next-reaction-id"},"Next Reaction ID"),(0,i.kt)("p",null,"The next reaction id is stored using the associated subspace id as the key:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x10 | Subspace ID | -> bytes(NextReactionID)"))),(0,i.kt)("h2",{id:"reaction"},"Reaction"),(0,i.kt)("p",null,"A post reaction is stored using the subspace id, the associated post id and its id combined as the key. This allows to easily query:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"all the reactions of a subspace;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"all the reactions of a post;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a specific post's reaction.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"0x11 | Subspace ID | Post ID | Reaction ID | -> ProtocolBuffer(Reaction)")))),(0,i.kt)("h2",{id:"reactions-subspace-params"},"Reactions Subspace Params"),(0,i.kt)("p",null,"The reactions' subspace params are stored using the associated subspace id as the key:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x20 | Subspace ID | -> ProtocolBuffer(SubspaceReactionsParams)"))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[4965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},a="Concepts",i={unversionedId:"developers/modules/relationships/concepts",id:"developers/modules/relationships/concepts",title:"Concepts",description:"Relationship",source:"@site/docs/02-developers/02-modules/relationships/02-concepts.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/concepts",permalink:"/next/developers/modules/relationships/concepts",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/relationships/02-concepts.md",tags:[],version:"current",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:2,frontMatter:{id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/next/developers/modules/relationships/overview"},next:{title:"State",permalink:"/next/developers/modules/relationships/state"}},l={},p=[{value:"Relationship",id:"relationship",level:2},{value:"User Block",id:"user-block",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concepts"},"Concepts"),(0,o.kt)("h2",{id:"relationship"},"Relationship"),(0,o.kt)("p",null,"A relationships between two users is a ",(0,o.kt)("strong",{parentName:"p"},"mono-directional")," link between a ",(0,o.kt)("em",{parentName:"p"},"creator")," and a ",(0,o.kt)("em",{parentName:"p"},"recipient"),'. This is equivalent to the concept of "follow" that is present on traditional social networks (i.e. Twitter). '),(0,o.kt)("p",null,"When a user A creates a relationships towards a user B, it means that they are interested in being notified about what user B does. "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Friendship")," can be represented by a mutual relationship, which consists of two mono-directional relationships. If user A creates a relationships towards user B (",(0,o.kt)("inlineCode",{parentName:"p"},"A -> B"),"), and user B creates a relationship towards user A (",(0,o.kt)("inlineCode",{parentName:"p"},"B -> A"),"), then user A and B can be considered to be ",(0,o.kt)("em",{parentName:"p"},"friends")," since a mutual relationship (",(0,o.kt)("inlineCode",{parentName:"p"},"A <-> B"),") exists."),(0,o.kt)("h2",{id:"user-block"},"User Block"),(0,o.kt)("p",null,"A user block from one user (",(0,o.kt)("em",{parentName:"p"},"blocker"),") to another (",(0,o.kt)("em",{parentName:"p"},"blocked"),") represents the willingness of the first to block any future interaction that the latter might have with them. This concept is used to allow users to block misbehaving users from future harassment or unwanted interactions. "),(0,o.kt)("p",null,"When a user A creates a user block towards a user B, they can specify inside which subspace they want to block the user. If no particular subspace is provided, this means the B will not be allowed to have Desmos-level interactions with A in the future (e.g. requesting A to exchange their DTag). Blocking a user on subspace with id ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," (default value) ",(0,o.kt)("strong",{parentName:"p"},"will not")," block such user from interacting inside other subspaces."))}u.isMDXComponent=!0}}]);
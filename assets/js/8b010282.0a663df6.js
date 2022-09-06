"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[18382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),h=i,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={id:"relationship",title:"Relationship",sidebar_label:"Relationship",slug:"relationship"},s="Relationship",a={unversionedId:"developers/types/profiles/relationship",id:"version-2.3/developers/types/profiles/relationship",title:"Relationship",description:"Inside Desmos, users can create relationships with other users.",source:"@site/versioned_docs/version-2.3/02-developers/02-types/profiles/relationship.md",sourceDirName:"02-developers/02-types/profiles",slug:"/developers/types/profiles/relationship",permalink:"/2.3/developers/types/profiles/relationship",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/02-types/profiles/relationship.md",tags:[],version:"2.3",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"relationship",title:"Relationship",sidebar_label:"Relationship",slug:"relationship"},sidebar:"version-2.3/docs",previous:{title:"DTag transfer request",permalink:"/2.3/developers/types/profiles/dtag-transfer-request"},next:{title:"User block",permalink:"/2.3/developers/types/profiles/user-block"}},l={},p=[{value:"Contained data",id:"contained-data",level:2},{value:"<code>Recipient</code> (<code>string</code>)",id:"recipient-string",level:3},{value:"<code>Subspace</code> (<code>string</code>)",id:"subspace-string",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"relationship"},"Relationship"),(0,i.kt)("p",null,"Inside Desmos, users can create relationships with other users.",(0,i.kt)("br",{parentName:"p"}),"\n",'A relationship inside Desmos is the equivalent of the "follow" concept of traditional social networks.'),(0,i.kt)("h2",{id:"contained-data"},"Contained data"),(0,i.kt)("p",null,"Each relationship contains the data that allows identifying the dApp where the users created such relationship."),(0,i.kt)("h3",{id:"recipient-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"Recipient")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,i.kt)("p",null,"The user with which create the relationship."),(0,i.kt)("h3",{id:"subspace-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"Subspace")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Subspace")," field identifies the application inside which the user creates the relationship. It must be a valid SHA256 string."))}d.isMDXComponent=!0}}]);
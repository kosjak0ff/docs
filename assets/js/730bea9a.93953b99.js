"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[55643],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<s;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var o=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],a={id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},i="Concepts",p={unversionedId:"developers/modules/supply/concepts",id:"version-4.1.0/developers/modules/supply/concepts",title:"Concepts",description:"Total Supply",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/supply/02-concepts.md",sourceDirName:"02-developers/02-modules/supply",slug:"/developers/modules/supply/concepts",permalink:"/4.1.0/developers/modules/supply/concepts",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/supply/02-concepts.md",tags:[],version:"4.1.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:2,frontMatter:{id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/4.1.0/developers/modules/supply/overview"},next:{title:"Client",permalink:"/4.1.0/developers/modules/supply/client"}},c={},u=[{value:"Total Supply",id:"total-supply",level:2},{value:"Circulating Supply",id:"circulating-supply",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"concepts"},"Concepts"),(0,s.kt)("h2",{id:"total-supply"},"Total Supply"),(0,s.kt)("p",null,"The total supply of a token is defined as ",(0,s.kt)("em",{parentName:"p"},"the overall number of tokens having a given denomination that currently exists inside a chain"),". "),(0,s.kt)("p",null,"The total supply of a token is fetched directly from the ",(0,s.kt)("inlineCode",{parentName:"p"},"bank")," module, which properly tracks such amount each time a new token is created (due to inflation or other) or burned. "),(0,s.kt)("h2",{id:"circulating-supply"},"Circulating Supply"),(0,s.kt)("p",null,"The circulating supply of a token is defined as ",(0,s.kt)("em",{parentName:"p"},"the number of tokens having a given denomination that can be transferred freely from one user to another"),"."),(0,s.kt)("p",null,"Based on this definition, the circulating supply of a token is computed using the following formula: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"circulating_supply = total_supply - community_pool - sum(vested_amount)\n")),(0,s.kt)("p",null,"This is due to the fact that the following amounts are considered as non circulating: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the amount of a token inside the ",(0,s.kt)("em",{parentName:"li"},"community pool"),", since such tokens can be transferred to a user only after a ",(0,s.kt)("inlineCode",{parentName:"li"},"CommunitySpendPropsal")," passes. As soon as some tokens are transferred from the community pool to a user, they become immediately part of the circulating supply;"),(0,s.kt)("li",{parentName:"ul"},"the amount of vested tokens, since those are subject to a lock period. As soon as such period ends, they become immediately part of the circulating supply.")))}m.isMDXComponent=!0}}]);
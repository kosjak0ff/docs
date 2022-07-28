"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[35860],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16565:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},l="Concepts",c={unversionedId:"developers/modules/fees/concepts",id:"developers/modules/fees/concepts",title:"Concepts",description:"Minimum fees",source:"@site/docs/02-developers/02-modules/fees/02-concepts.md",sourceDirName:"02-developers/02-modules/fees",slug:"/developers/modules/fees/concepts",permalink:"/next/developers/modules/fees/concepts",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/fees/02-concepts.md",tags:[],version:"current",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:2,frontMatter:{id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/next/developers/modules/fees/overview"},next:{title:"State",permalink:"/next/developers/modules/fees/state"}},m={},p=[{value:"Minimum fees",id:"minimum-fees",level:2}],u={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concepts"},"Concepts"),(0,a.kt)("h2",{id:"minimum-fees"},"Minimum fees"),(0,a.kt)("p",null,"A minimum fee represents the minimum amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Coins")," that must be present inside the transaction fees when broadcasting a message of a given type. Setting a minimum fee of ",(0,a.kt)("inlineCode",{parentName:"p"},"100token")," for a message types means that users will need to pay at least ",(0,a.kt)("inlineCode",{parentName:"p"},"100token")," for each message of that type they broadcast. Trying to broadcast a transaction with multiple message of such types will require the user to pay ",(0,a.kt)("inlineCode",{parentName:"p"},"n * min_fee")," fees or above. "),(0,a.kt)("p",null,"For each message type, there can only be a single minimum fee amount that needs to be paid at any given time. "),(0,a.kt)("p",null,"A single minimum fee amount can be made of multiple coin amounts, so that if a minimum fee amount is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"100tokenA,50tokenB")," this means that for each message of such type the user will have to pay at least 100 ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenA")," ",(0,a.kt)("strong",{parentName:"p"},"and")," 50 ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenB")," to make sure the transaction is valid. "),(0,a.kt)("p",null,"If a transaction contains multiple messages of different kinds, each one having a custom minimum fee amount, the overall transaction fee must be greater or equal to the sum of all the minimum fee amounts. So that if a transaction contains one message which minimum fee amount is ",(0,a.kt)("inlineCode",{parentName:"p"},"100tokenA")," and other one which minimum fee is ",(0,a.kt)("inlineCode",{parentName:"p"},"100tokenB"),", the overall transaction fee will have to be ",(0,a.kt)("inlineCode",{parentName:"p"},"100tokenA + 100tokenB")," or greater."),(0,a.kt)("p",null,"Failing to provide a transaction fee amount that is not enough to satisfy all the minimum fee requirements will lead to an invalid transaction."))}f.isMDXComponent=!0}}]);
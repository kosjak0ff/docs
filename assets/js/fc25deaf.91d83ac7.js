"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[31810],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"params",title:"Parameters",sidebar_label:"Parameters",slug:"params"},l="Parameters",p={unversionedId:"developers/modules/fees/params",id:"version-4.1.0/developers/modules/fees/params",title:"Parameters",description:"The fees module contains the following parameters:",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/fees/05-params.md",sourceDirName:"02-developers/02-modules/fees",slug:"/developers/modules/fees/params",permalink:"/developers/modules/fees/params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/fees/05-params.md",tags:[],version:"4.1.0",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:5,frontMatter:{id:"params",title:"Parameters",sidebar_label:"Parameters",slug:"params"},sidebar:"docs",previous:{title:"Ante Handlers",permalink:"/developers/modules/fees/ante-handlers"},next:{title:"Client",permalink:"/developers/modules/fees/client"}},m={},u=[{value:"MinFees",id:"minfees",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"The fees module contains the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MinFees"),(0,o.kt)("td",{parentName:"tr",align:null},"[]MinFee"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'[{ "message_type": "/desmos.profiles.v2.SaveProfile", "amount": [ { "amount": "100", "denom": "tokenA" } ] }]'))))),(0,o.kt)("h2",{id:"minfees"},"MinFees"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MinFees")," is an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"MinFee")," object, each one made of two different fields: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MessageType")," (string), representing the type url of the message which the min fees refer to "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Amount")," (",(0,o.kt)("inlineCode",{parentName:"li"},"[]Coin"),"), representing the amount of min fees associated with the message")),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"MinFees"),", there can only be a single entry for each ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageType"),"."))}c.isMDXComponent=!0}}]);
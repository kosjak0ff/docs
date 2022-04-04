"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[8828],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8039:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"overview",title:"Overview",sidebar_position:1},p="Developers Overview",l={unversionedId:"developers/overview",id:"version-2.3/developers/overview",isDocsHomePage:!1,title:"Overview",description:"Introduction",source:"@site/versioned_docs/version-2.3/02-developers/01-overview.md",sourceDirName:"02-developers",slug:"/developers/overview",permalink:"/developers/overview",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/01-overview.md",version:"2.3",lastUpdatedAt:1649069758,formattedLastUpdatedAt:"4/4/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"version-2.3/docs",previous:{title:"Introduction",permalink:"/"},next:{title:"Profile",permalink:"/developers/types/profiles/profile"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Glossary",id:"glossary",children:[]},{value:"Performing transactions",id:"performing-transactions",children:[]},{value:"Querying data",id:"querying-data",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developers-overview"},"Developers Overview"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/"},"Desmos")," aims to provide developers a platform on which they will be able to create decentralized and\ncensorship-resistant social network applications.\nTo do so, we've implemented a set of transactions that are useful to perform the most common operations related to this world.\nIf you want to know more about the base concepts of a blockchain and understand some key points, please take a look a the ",(0,a.kt)("a",{parentName:"p",href:"/developers/faq"},"FAQ page"),". "),(0,a.kt)("h2",{id:"glossary"},"Glossary"),(0,a.kt)("p",null,"Before digging into the available transactions, let's clarify the meaning of some terms that we will be using a lot."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"profile")," contains a series of (personal) data associated to an account that a user can create on the chain;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"post")," is a public message that everyone can read on the chain.",(0,a.kt)("br",{parentName:"p"}),"\n","When creating it you can also specify if it allows\nto be commented on or not;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"comment")," is a post that has been linked to a parent post;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"reaction")," is the way that allows users to express a feeling on a specific post;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"subspace"),' is a "zone" where a specific app or more apps can live on and share contents;'))),(0,a.kt)("p",null,"If you want to know more about how we store the data on-chain and all the chain types, please refer to\nthe ",(0,a.kt)("strong",{parentName:"p"},'"Types" section'),"."),(0,a.kt)("h2",{id:"performing-transactions"},"Performing transactions"),(0,a.kt)("p",null,"If you want to know more about performing transactions to change the current chain state, please go to the ",(0,a.kt)("strong",{parentName:"p"},'"Transactions" section'),"."),(0,a.kt)("h2",{id:"querying-data"},"Querying data"),(0,a.kt)("p",null,"If you want to know all the GRPC endpoints and CLI commands available to query the existing chain state and the\nsaved data, please go to the ",(0,a.kt)("strong",{parentName:"p"},'"Queries" section'),"."))}d.isMDXComponent=!0}}]);
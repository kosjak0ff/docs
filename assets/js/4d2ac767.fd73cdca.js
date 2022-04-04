"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[593],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"overview",title:"Overview",sidebar_position:1},l="Testnets Overview",c={unversionedId:"testnets/overview",id:"testnets/overview",isDocsHomePage:!1,title:"Overview",description:"Testnets (from the words test- and nets-, networks) are the way we at Desmos use to test all the features our blockchain should have before launching it publicly.",source:"@site/docs/05-testnets/01-overview.md",sourceDirName:"05-testnets",slug:"/testnets/overview",permalink:"/next/testnets/overview",editUrl:"https://github.com/desmos-labs/docs/master/docs/05-testnets/01-overview.md",version:"current",lastUpdatedAt:1649069758,formattedLastUpdatedAt:"4/4/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"docs",previous:{title:"F.A.Q",permalink:"/next/validators/faq"},next:{title:"Create a local testnet",permalink:"/next/testnets/create-local"}},u=[{value:"Public testnets",id:"public-testnets",children:[]},{value:"Local testnets",id:"local-testnets",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testnets-overview"},"Testnets Overview"),(0,o.kt)("p",null,"Testnets (from the words ",(0,o.kt)("em",{parentName:"p"},"test-")," and ",(0,o.kt)("em",{parentName:"p"},"nets-"),", networks) are the way we at Desmos use to test all the features our blockchain should have before launching it publicly. "),(0,o.kt)("p",null,"In other words, they are the playground that you can use to start learning about Desmos, its features and how you can use them to create your own decentralized social networks. "),(0,o.kt)("p",null,"There are two different types of testnets: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Public testnets"),(0,o.kt)("li",{parentName:"ul"},"Local testnets")),(0,o.kt)("h2",{id:"public-testnets"},"Public testnets"),(0,o.kt)("p",null,"Public testnets existing only one at a time, and are a preview of what the Desmos mainnet will actually be. "),(0,o.kt)("p",null,"Testnet's ",(0,o.kt)("a",{parentName:"p",href:"/next/validators/overview"},"validators")," are publicly known and developers from all the world can write and read transactions from them. "),(0,o.kt)("p",null,"Public testnets are, in short, the real playground on which you can test the integration of your app (or your validator's setup) without worrying too much about security, but being sure to always be up to date with the latest stable changes."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Joining the public testnet  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to know more about how to join the currently running public testnet, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/next/testnets/join-public/setup"},(0,o.kt)("em",{parentName:"a"},"Join the public testnet"))," page.  "))),(0,o.kt)("h2",{id:"local-testnets"},"Local testnets"),(0,o.kt)("p",null,"Local testnets exist only on the machine that is used to running it. This means that none, except you, can actually access the data you store. "),(0,o.kt)("p",null,"Local testnets are perfect if you want to quickly setup a Desmos blockchain instance without worrying too much about setting up a public validator machine. "),(0,o.kt)("p",null,"They also might be particularly useful to developers that do not want to write on the public net but want first to try out their app's integration locally to make sure everything works properly. "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Creating a local testnet  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to know more about how creating a local testnet, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/next/testnets/create-local"},(0,o.kt)("em",{parentName:"a"},"Create a local testnet"))," page.  "))))}d.isMDXComponent=!0}}]);
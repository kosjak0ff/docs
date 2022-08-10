"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[70731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,u=f["".concat(d,".").concat(m)]||f[m]||p[m]||s;return n?r.createElement(u,a(a({ref:t},c),{},{components:n})):r.createElement(u,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},a="Seed nodes",i={unversionedId:"mainnet/seeds",id:"version-2.3/mainnet/seeds",title:"Seeds",description:"The following seed nodes are to be used when configuring a full node for the mainnet. If you are looking for testnet seed nodes, please refer to this instead.",source:"@site/versioned_docs/version-2.3/06-mainnet/seeds.md",sourceDirName:"06-mainnet",slug:"/mainnet/seeds",permalink:"/2.3/mainnet/seeds",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/06-mainnet/seeds.md",tags:[],version:"2.3",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},sidebar:"version-2.3/docs",previous:{title:"Genesis File",permalink:"/2.3/mainnet/genesis-file"},next:{title:"State Sync",permalink:"/2.3/mainnet/state-sync"}},d={},l=[],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seed-nodes"},"Seed nodes"),(0,o.kt)("admonition",{title:"Mainnet only   ",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The following seed nodes are to be used when configuring a full node for the ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),". If you are looking for testnet seed nodes, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/2.3/testnets/join-public/seeds"},"this")," instead.  ")),(0,o.kt)("p",null,"Add these seeds here to the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'seeds = "9bde6ab4e0e00f721cc3f5b4b35f3a0e8979fab5@seed-1.mainnet.desmos.network:26656,5c86915026093f9a2f81e5910107cf14676b48fc@seed-2.mainnet.desmos.network:26656,45105c7241068904bdf5a32c86ee45979794637f@seed-3.mainnet.desmos.network:26656"\n')))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[83152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"reset-data",title:"Reset Data",sidebar_label:"Reset Data",slug:"reset-data"},s="Reset the data",i={unversionedId:"fullnode/reset-data",id:"fullnode/reset-data",title:"Reset Data",description:"In case something goes wrong and your node can't be recovered, you can reset it and sync it again.",source:"@site/docs/03-fullnode/05-reset-data.md",sourceDirName:"03-fullnode",slug:"/fullnode/reset-data",permalink:"/next/fullnode/reset-data",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/03-fullnode/05-reset-data.md",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:5,frontMatter:{id:"reset-data",title:"Reset Data",sidebar_label:"Reset Data",slug:"reset-data"},sidebar:"docs",previous:{title:"Update",permalink:"/next/fullnode/update"},next:{title:"Use RocksDB",permalink:"/next/fullnode/rocksdb-installation"}},l={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reset-the-data"},"Reset the data"),(0,a.kt)("p",null,"In case something goes wrong and your node can't be recovered, you can reset it and sync it again."),(0,a.kt)("p",null,"Reset the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm $HOME/.desmos/config/addrbook.json $HOME/.desmos/config/genesis.json\ndesmos unsafe-reset-all\n")),(0,a.kt)("p",null,"Your node is now in a pristine state while keeping the original ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml"),". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Make sure that every node has a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator.json"),". Do not copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," from an old node to multiple new nodes. Running two nodes with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," will cause you to ",(0,a.kt)("strong",{parentName:"p"},"double sign"),".  ")),(0,a.kt)("p",null,"After the reset, you can sync back your node with state-sync, check how depending you are doing this on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/testnet/join-public/state-sync"},"Testnet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/mainnet/state-sync"},"Mainnet"))))}p.isMDXComponent=!0}}]);
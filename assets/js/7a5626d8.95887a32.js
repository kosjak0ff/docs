"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[52950],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87247:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),s=["components"],a={id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},l="Genesis file",c={unversionedId:"mainnet/genesis-file",id:"version-3/mainnet/genesis-file",title:"Genesis File",description:"The following seed nodes are to be used when configuring a full node for the mainnet. If you are looking for testnet seed nodes, please refer to this instead.",source:"@site/versioned_docs/version-3/06-mainnet/genesis-file.md",sourceDirName:"06-mainnet",slug:"/mainnet/genesis-file",permalink:"/3/mainnet/genesis-file",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/06-mainnet/genesis-file.md",tags:[],version:"3",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},sidebar:"version-3/docs",previous:{title:"Full Sync",permalink:"/3/testnets/join-public/full-sync"},next:{title:"Seeds",permalink:"/3/mainnet/seeds"}},d={},u=[{value:"1. Download",id:"1-download",level:2},{value:"2. Check",id:"2-check",level:2}],p={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"genesis-file"},"Genesis file"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Mainnet only   ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following seed nodes are to be used when configuring a full node for the ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),". If you are looking for testnet seed nodes, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/3/testnets/join-public/genesis-file"},"this")," instead.  "))),(0,o.kt)("p",null,"To connect to the ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos-mainnet"),", you will need the corresponding genesis file."),(0,o.kt)("h2",{id:"1-download"},"1. Download"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/mainnet"},"mainnet repo")," and\ndownload the correct genesis file by running the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the existing genesis file for the mainnet\n# Replace <chain-id> with the id of the testnet you would like to join\ncurl https://raw.githubusercontent.com/desmos-labs/mainnet/main/genesis.json > ~/.desmos/config/genesis.json\n")),(0,o.kt)("h2",{id:"2-check"},"2. Check"),(0,o.kt)("p",null,"After the download, ensure it's the correct one by checking that it has the same hashsum below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jq -S -c -M '' /root/.desmos/config/genesis.json | shasum -a 256\n619c9462ccd9045522300c5ce9e7f4662cac096eed02ef0535cca2a6826074c4  -\n")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[8895],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=c(n),m=r,u=k["".concat(p,".").concat(m)]||k[m]||s[m]||i;return n?a.createElement(u,l(l({ref:e},d),{},{components:n})):a.createElement(u,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6780:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"link-chain-account",title:"Link chain account",sidebar_label:"Link chain account",slug:"link-chain-account"},p="MsgLinkChainAccount",c={unversionedId:"developers/transactions/profiles/link-chain-account",id:"developers/transactions/profiles/link-chain-account",title:"Link chain account",description:"This message allows you to link an external chain address",source:"@site/docs/02-developers/03-transactions/profiles/link-chain-account.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/link-chain-account",permalink:"/next/developers/transactions/profiles/link-chain-account",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-transactions/profiles/link-chain-account.md",tags:[],version:"current",lastUpdatedAt:1657096651,formattedLastUpdatedAt:"7/6/2022",frontMatter:{id:"link-chain-account",title:"Link chain account",sidebar_label:"Link chain account",slug:"link-chain-account"},sidebar:"docs",previous:{title:"Unlink application",permalink:"/next/developers/transactions/profiles/unlink-application"},next:{title:"Unlink chain account",permalink:"/next/developers/transactions/profiles/unlink-chain-account"}},d={},s=[{value:"Attributes",id:"attributes",level:3},{value:"ChainAddress attributes",id:"chainaddress-attributes",level:4},{value:"ChainConfig attributes",id:"chainconfig-attributes",level:4},{value:"Proof attributes",id:"proof-attributes",level:4},{value:"PubKey attributes",id:"pubkey-attributes",level:4},{value:"Signature attributes",id:"signature-attributes",level:4},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],k={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"msglinkchainaccount"},(0,i.kt)("inlineCode",{parentName:"h1"},"MsgLinkChainAccount")),(0,i.kt)("p",null,"This message allows you to link an external chain address\nand add the ",(0,i.kt)("a",{parentName:"p",href:"/next/developers/types/profiles/chain-link"},"chain link")," of it to your Desmos profile."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"chain_address")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"/next/developers/types/profiles/chain-link#Contained-data"},"AddressData")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Address data of the external chain account"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"chain_config")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"/next/developers/types/profiles/chain-link#Contained-data"},"ChainConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Details of the target external chain"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"proof")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"/next/developers/types/profiles/chain-link#Contained-data"},"Proof")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data proving the ownership of the external chain account"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"signer")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the profile with which the link will be associated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("h4",{id:"chainaddress-attributes"},"ChainAddress attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"prefix")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Bech 32 prefix of the account"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Address of the external chain account"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("h4",{id:"chainconfig-attributes"},"ChainConfig attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the external chain to which make the link"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("h4",{id:"proof-attributes"},"Proof attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"pub_key")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The public key associated with the address to link"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"signature")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The hex-encoded signature that proves the ownership of the address to link"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"plain_text")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The hex-encoded value signed in order to produce the ",(0,i.kt)("inlineCode",{parentName:"td"},"signature")),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("h4",{id:"pubkey-attributes"},"PubKey attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Base 64 encoded publick key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("h4",{id:"signature-attributes"},"Signature attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"mode")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The way with which the signature is performed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"signature")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Hex encoded signature created with private key associated to the given public key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v2.MsgLinkChainAccount",\n  "chain_address": {\n    "@type": "/desmos.profiles.v2.Bech32Address",\n    "value": "cosmos18xnmlzqrqr6zt526pnczxe65zk3f4xgmndpxn2",\n    "prefix": "cosmos"\n  },\n  "proof": {\n    "pub_key": {\n      "@type": "/cosmos.crypto.secp256k1.PubKey",\n      "key": "AyRUhKXAY6zOCjjFkPN78Q29sBKHjUx4VSZQ4HXh66IM"\n    },\n    "signature": {\n      "@type": "/desmos.profiles.v2.SingleSignatureData",\n      "mode": "SIGN_MODE_DIRECT",\n      "signature": "C7xppu4C4S3dgeC9TVqhyGN1hbMnMbnmWgXQI2WE8t0oHIHhDTqXyZgzhNNYiBO7ulno3G8EXO3Ep5KMFngyFg=="\n    },\n    "plain_text": "636f736d6f733138786e6d6c7a71727172367a74353236706e637a786536357a6b33663478676d6e6470786e32"\n  },\n  "chain_config": {\n    "name": "cosmos"\n  },\n  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"\n}\n')),(0,i.kt)("h2",{id:"message-action"},"Message action"),(0,i.kt)("p",null,"The action associated to this message is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"link_chain_account\n")))}m.isMDXComponent=!0}}]);
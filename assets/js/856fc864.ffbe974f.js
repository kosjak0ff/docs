"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[5382],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"link-chain-account",title:"Link chain account",sidebar_label:"Link chain account",slug:"link-chain-account"},s="MsgLinkChainAccount",l={unversionedId:"developers/transactions/profiles/link-chain-account",id:"version-2.3/developers/transactions/profiles/link-chain-account",title:"Link chain account",description:"This message allows you to link an external chain address",source:"@site/versioned_docs/version-2.3/02-developers/03-transactions/profiles/link-chain-account.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/link-chain-account",permalink:"/2.3/developers/transactions/profiles/link-chain-account",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/03-transactions/profiles/link-chain-account.md",tags:[],version:"2.3",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"link-chain-account",title:"Link chain account",sidebar_label:"Link chain account",slug:"link-chain-account"},sidebar:"version-2.3/docs",previous:{title:"Unlink application",permalink:"/2.3/developers/transactions/profiles/unlink-application"},next:{title:"Unlink chain account",permalink:"/2.3/developers/transactions/profiles/unlink-chain-account"}},p={},d=[{value:"Structure",id:"structure",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"msglinkchainaccount"},(0,i.kt)("inlineCode",{parentName:"h1"},"MsgLinkChainAccount")),(0,i.kt)("p",null,"This message allows you to link an external chain address\nand add the ",(0,i.kt)("a",{parentName:"p",href:"/2.3/developers/types/profiles/chain-link"},"chain link")," of it to your Desmos profile."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@type":"desmos/MsgLinkChainAccount",\n    "chain_address": {\n        "@type": "/desmos.profiles.v1beta1.Bech32Address",\n        "prefix": "<Bech32 prefix of the external chain account>",\n        "value": "<Address of the external chain account>"\n    },\n    "chain_config": {\n        "name": "<Name of the target external chain>"\n    },\n    "proof": {\n        "pub_key": {\n            "@type": "/cosmos.crypto.secp256k1.PubKey",\n            "value": "<Base64 encoded public key>"\n        },\n        "signature": "<Hex encoded signature created with private key associated to the given public key>",\n        "plain_text": "<Text signed with private key>"\n    },\n    "signer": "<Desmos address of the profile linking the chain account>"\n}\n')),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"chain_address")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"/2.3/developers/types/profiles/chain-link#Contained-data"},"AddressData")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Address data of the external chain account"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"chain_config")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"/2.3/developers/types/profiles/chain-link#Contained-data"},"ChainConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Details of the target external chain"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"proof")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"/2.3/developers/types/profiles/chain-link#Contained-data"},"Proof")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data proving the ownership of the external chain account"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"signer")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the profile with which the link will be associated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@type": "desmos/MsgLinkChainAccount",\n    "chain_address": {\n        "@type": "/desmos.profiles.v1beta1.Bech32Address",\n        "prefix": "cosmos",\n        "value": "cosmos13j7p6faa9jr8ty6lvqv0prldprr6m5xenmafnt"\n    },\n    "chain_config":{\n        "name": "cosmos"\n    },\n    "proof": {\n         "pub_key": {\n            "@type": "/cosmos.crypto.secp256k1.PubKey",\n            "key": "AjUIjuahImftpkEAKHBsTsGSsc4Eopje+NrRwUYlcBLr"\n        },\n        "plain_text": "cosmos13j7p6faa9jr8ty6lvqv0prldprr6m5xenmafnt",\n        "signature": "c3bd014b2178d63d94b9c28e628bfcf56736de28f352841b0bb27d6fff2968d62c13a10aeddd1ebfe3b13f3f8e61f79a2c63ae6ff5cb78cb0d64e6b0a70fae57",\n    },\n    "signer": "desmos1qchdngxk8zkl4c4mheqdlpgcegkdrtucmwllpx"\n}\n')),(0,i.kt)("h2",{id:"message-action"},"Message action"),(0,i.kt)("p",null,"The action associated to this message is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"link_chain_account\n")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[7130],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4885:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],l={id:"unblock-user",title:"Unblock user",sidebar_label:"Unblock User",slug:"unblock-user"},c="MsgUnblockUser",i={unversionedId:"developers/transactions/profiles/unblock-user",id:"developers/transactions/profiles/unblock-user",isDocsHomePage:!1,title:"Unblock user",description:"This message allows you to unblock a previously blocked user.",source:"@site/docs/02-developers/03-transactions/profiles/unblock-user.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/unblock-user",permalink:"/next/developers/transactions/profiles/unblock-user",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-transactions/profiles/unblock-user.md",version:"current",lastUpdatedAt:1630076961,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"unblock-user",title:"Unblock user",sidebar_label:"Unblock User",slug:"unblock-user"},sidebar:"docs",previous:{title:"Block user",permalink:"/next/developers/transactions/profiles/block-user"},next:{title:"Link application",permalink:"/next/developers/transactions/profiles/link-application"}},u=[{value:"Structure",id:"structure",children:[]},{value:"Example",id:"example",children:[]},{value:"Message action",id:"message-action",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"msgunblockuser"},(0,o.kt)("inlineCode",{parentName:"h1"},"MsgUnblockUser")),(0,o.kt)("p",null,"This message allows you to unblock a previously blocked user."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgUnblockUser",\n  "blocker": "<Desmos address of the user that is unblocking another user>",\n  "blocked": "<Desmos address of the unblocked user>",\n  "subspace": "<Subspace of the block>"\n}   \n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"blocker")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is blocking someone else"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"blocked")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the unblocked user"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"subspace")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String that identifies the app for which the block was valid"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgUnblockUser",\n  "blocker": "desmos1j83hlf5yn5839wgpege3z669r8j3lh2ggmtf5u",\n  "blocked": "desmos15ux5mc98jlhsg30dzwwv06ftjs82uy4g3t99ru",\n  "subspace": "4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e"\n}   \n')),(0,o.kt)("h2",{id:"message-action"},"Message action"),(0,o.kt)("p",null,"The action associated to this message is the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unblock_user\n")))}d.isMDXComponent=!0}}]);
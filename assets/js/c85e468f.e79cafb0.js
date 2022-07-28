"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[68704],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=p(a),u=n,f=k["".concat(o,".").concat(u)]||k[u]||m[u]||l;return a?r.createElement(f,s(s({ref:e},d),{},{components:a})):r.createElement(f,s({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},65818:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),s=["components"],i={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},o="Events",p={unversionedId:"developers/modules/relationships/events",id:"version-4.1.0/developers/modules/relationships/events",title:"Events",description:"The relationships module emits the following events:",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/relationships/05-events.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/events",permalink:"/developers/modules/relationships/events",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/relationships/05-events.md",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/developers/modules/relationships/messages"},next:{title:"Client",permalink:"/developers/modules/relationships/client"}},d={},m=[{value:"Handlers",id:"handlers",level:2},{value:"MsgCreateRelationship",id:"msgcreaterelationship",level:3},{value:"MsgDeleteRelationship",id:"msgdeleterelationship",level:3},{value:"MsgBlockUser",id:"msgblockuser",level:3},{value:"MsgUnblockUser",id:"msgunblockuser",level:3}],k={toc:m};function u(t){var e=t.components,a=(0,n.Z)(t,s);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"events"},"Events"),(0,l.kt)("p",null,"The relationships module emits the following events: "),(0,l.kt)("h2",{id:"handlers"},"Handlers"),(0,l.kt)("h3",{id:"msgcreaterelationship"},"MsgCreateRelationship"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Attribute Key"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Attribute Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_relationship"),(0,l.kt)("td",{parentName:"tr",align:"left"},"creator"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_relationship"),(0,l.kt)("td",{parentName:"tr",align:"left"},"counterparty"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{counterpartyAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_relationship"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"relationships")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"/desmos.relationships.v1.MsgCreateRelationship")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgdeleterelationship"},"MsgDeleteRelationship"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Attribute Key"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Attribute Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_relationship"),(0,l.kt)("td",{parentName:"tr",align:"left"},"creator"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_relationship"),(0,l.kt)("td",{parentName:"tr",align:"left"},"counterparty"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{counterpartyAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_relationship"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"relationships")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"/desmos.relationships.v1.MsgDeleteRelationship")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgblockuser"},"MsgBlockUser"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Attribute Key"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Attribute Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"block_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"blocker"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{blockerAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"block_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"blocked"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{blockedAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"block_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"relationships")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"/desmos.relationships.v1.MsgBlockUser")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgunblockuser"},"MsgUnblockUser"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Attribute Key"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Attribute Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unblock_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"blocker"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{blockerAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unblock_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"blocked"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{blockedAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unblock_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"relationships")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"/desmos.relationships.v1.MsgUnblockUser")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))))}u.isMDXComponent=!0}}]);
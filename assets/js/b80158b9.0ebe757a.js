"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[89786],{3905:function(e,t,s){s.d(t,{Zo:function(){return c},kt:function(){return g}});var n=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(s),g=r,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||a;return s?n.createElement(m,l(l({ref:t},c),{},{components:s})):n.createElement(m,l({ref:t},c))}));function g(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,l=new Array(a);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=s[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},9068:function(e,t,s){s.r(t),s.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=s(87462),r=s(63366),a=(s(67294),s(3905)),l=["components"],o={id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},i="Msg Service",p={unversionedId:"developers/modules/profiles/messages",id:"version-4.2.0/developers/modules/profiles/messages",title:"Messages",description:"Msg/SaveProfile",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/profiles/04-messages.md",sourceDirName:"02-developers/02-modules/profiles",slug:"/developers/modules/profiles/messages",permalink:"/developers/modules/profiles/messages",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/profiles/04-messages.md",tags:[],version:"4.2.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:4,frontMatter:{id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},sidebar:"docs",previous:{title:"State",permalink:"/developers/modules/profiles/state"},next:{title:"Events",permalink:"/developers/modules/profiles/events"}},c={},u=[{value:"Msg/SaveProfile",id:"msgsaveprofile",level:2},{value:"Msg/DeleteProfile",id:"msgdeleteprofile",level:2},{value:"Msg/RequestDTagTransfer",id:"msgrequestdtagtransfer",level:2},{value:"Msg/CancelDTagTransferRequest",id:"msgcanceldtagtransferrequest",level:2},{value:"Msg/AcceptDTagTransferRequest",id:"msgacceptdtagtransferrequest",level:2},{value:"Msg/RefuseDTagTransferRequest",id:"msgrefusedtagtransferrequest",level:2},{value:"Msg/LinkChainAccount",id:"msglinkchainaccount",level:2},{value:"Msg/UnlinkChainAccount",id:"msgunlinkchainaccount",level:2},{value:"Msg/SetDefaultExternalAddress",id:"msgsetdefaultexternaladdress",level:2},{value:"Msg/LinkApplication",id:"msglinkapplication",level:2},{value:"Msg/UnlinkApplication",id:"msgunlinkapplication",level:2}],d={toc:u};function g(e){var t=e.components,s=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"msg-service"},"Msg Service"),(0,a.kt)("h2",{id:"msgsaveprofile"},"Msg/SaveProfile"),(0,a.kt)("p",null,"A profile can be created or edited with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSaveProfile"),", which allows to specify a DTag, a nickname, a bio and the profile and cover pictures. "),(0,a.kt)("p",null,"If a profile already exists, and you want to edit only a subset of the fields, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"[do-not-modify]")," to specify the fields which values should not be changed (i.e. setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"DTag")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"[do-not-modify]")," will preserve the current value of the DTag)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_profile.proto#L12-L32\n")),(0,a.kt)("p",null,"It's expected to fail if a profile with the same DTag exists."),(0,a.kt)("h2",{id:"msgdeleteprofile"},"Msg/DeleteProfile"),(0,a.kt)("p",null,"A profile can be deleted using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgDeleteProfile"),". This will remove all the profile information from the store, but ",(0,a.kt)("strong",{parentName:"p"},"will not")," delete the on-chain account associated to such profile. "),(0,a.kt)("p",null,"Beware that using this message you will lose the ownership of your DTag and you will delete everything that is related to your profile (i.e. incoming DTag transfer requests). "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_profile.proto#L39-L45\n")),(0,a.kt)("p",null,"It's expected to fail if the signer does not have a profile. "),(0,a.kt)("h2",{id:"msgrequestdtagtransfer"},"Msg/RequestDTagTransfer"),(0,a.kt)("p",null,"A DTag transfer request can be created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRequestDTagTransfer"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_dtag_requests.proto#L12-L25\n")),(0,a.kt)("p",null,"It's expected to fail if the recipient of the request has no profile."),(0,a.kt)("h2",{id:"msgcanceldtagtransferrequest"},"Msg/CancelDTagTransferRequest"),(0,a.kt)("p",null,"An outgoing DTag transfer request can be canceled using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgCancelDTagTransferRequest"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_dtag_requests.proto#L33-L44\n")),(0,a.kt)("p",null,"It's expected to fail if the request does not exist."),(0,a.kt)("h2",{id:"msgacceptdtagtransferrequest"},"Msg/AcceptDTagTransferRequest"),(0,a.kt)("p",null,"An incoming DTag transfer request can be accepted using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAcceptDTagTransferRequest"),". When accepting a DTag transfer request, the user accepting it ",(0,a.kt)("strong",{parentName:"p"},"must")," specify a new DTag that they want after their old one gets transferred to the request sender."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_dtag_requests.proto#L52-L70\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the request does not exist."),(0,a.kt)("li",{parentName:"ul"},"the specified new DTag is already used by someone else.")),(0,a.kt)("h2",{id:"msgrefusedtagtransferrequest"},"Msg/RefuseDTagTransferRequest"),(0,a.kt)("p",null,"An incoming DTag transfer request can be refused using ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRefuseDTagTransferRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_dtag_requests.proto#L78-L89\n")),(0,a.kt)("p",null,"It's expected to fail if the request does not exist."),(0,a.kt)("h2",{id:"msglinkchainaccount"},"Msg/LinkChainAccount"),(0,a.kt)("p",null,"A new chain link can be created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgLinkChainAccount")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_chain_links.proto#L11-L35\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the signer does not have a profile."),(0,a.kt)("li",{parentName:"ul"},"the chain link signature is not valid.")),(0,a.kt)("h2",{id:"msgunlinkchainaccount"},"Msg/UnlinkChainAccount"),(0,a.kt)("p",null,"An existing chain link can be deleted using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgUnlinkChainAccount")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_chain_links.proto#L42-L54\n")),(0,a.kt)("p",null,"It's expected to fail if the chain link does not exist."),(0,a.kt)("h2",{id:"msgsetdefaultexternaladdress"},"Msg/SetDefaultExternalAddress"),(0,a.kt)("p",null,"A new default external address can be set using ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSetDefaultExternalAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_chain_links.proto#L63-L72\n")),(0,a.kt)("p",null,"It's expected to fail if the chain link does not exist."),(0,a.kt)("h2",{id:"msglinkapplication"},"Msg/LinkApplication"),(0,a.kt)("p",null,"A new application link can be created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgLinkApplication")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_app_links.proto#L11-L48\n")),(0,a.kt)("p",null,"It's expected to fail if the signer does not have a profile."),(0,a.kt)("h2",{id:"msgunlinkapplication"},"Msg/UnlinkApplication"),(0,a.kt)("p",null,"An existing application link can be deleted using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgUnlinkApplication")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/profiles/v3/msgs_app_links.proto#L56-L71\n")),(0,a.kt)("p",null,"It's expected to fail if the application link does not exist."))}g.isMDXComponent=!0}}]);
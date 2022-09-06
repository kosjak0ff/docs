"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[16322],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),o=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),k=o(a),g=n,N=k["".concat(d,".").concat(g)]||k[g]||i[g]||l;return a?r.createElement(N,p(p({ref:e},m),{},{components:a})):r.createElement(N,p({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=k;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s.mdxType="string"==typeof t?t:n,p[1]=s;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},76290:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>i,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},p="Events",s={unversionedId:"developers/modules/reports/events",id:"version-4.2.0/developers/modules/reports/events",title:"Events",description:"The reports module emits the following events:",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/reports/05-events.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/events",permalink:"/developers/modules/reports/events",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/reports/05-events.md",tags:[],version:"4.2.0",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/developers/modules/reports/messages"},next:{title:"Permissions",permalink:"/developers/modules/reports/permissions"}},d={},o=[{value:"Handlers",id:"handlers",level:2},{value:"MsgCreateReport",id:"msgcreatereport",level:3},{value:"<code>Post Target</code>",id:"post-target",level:4},{value:"<code>User Target</code>",id:"user-target",level:4},{value:"MsgDeleteReport",id:"msgdeletereport",level:3},{value:"MsgSupportStandardReason",id:"msgsupportstandardreason",level:3},{value:"MsgAddReason",id:"msgaddreason",level:3},{value:"MsgRemoveReason",id:"msgremovereason",level:3}],m={toc:o};function i(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"events"},"Events"),(0,n.kt)("p",null,"The reports module emits the following events:"),(0,n.kt)("h2",{id:"handlers"},"Handlers"),(0,n.kt)("h3",{id:"msgcreatereport"},"MsgCreateReport"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_report"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_report"),(0,n.kt)("td",{parentName:"tr",align:"left"},"report_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{reportID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_report"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reporter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_report"),(0,n.kt)("td",{parentName:"tr",align:"left"},"creation_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{creationTime}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgCreateReport")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reporter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("p",null,"Other events attributes depending on the type of the report target are attached."),(0,n.kt)("h4",{id:"post-target"},(0,n.kt)("inlineCode",{parentName:"h4"},"Post Target")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"report_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"report_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{reportID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"report_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reporter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h4",{id:"user-target"},(0,n.kt)("inlineCode",{parentName:"h4"},"User Target")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"report_user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"report_user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"report_user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reporter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgdeletereport"},"MsgDeleteReport"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delete_report"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delete_report"),(0,n.kt)("td",{parentName:"tr",align:"left"},"report_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{reportID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgDeleteReport")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"signer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgsupportstandardreason"},"MsgSupportStandardReason"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"support_standard_reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"support_standard_reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"standard_reason_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{reasonID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"support_standard_reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reason_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{reasonID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgSupportStandardReason")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"signer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgaddreason"},"MsgAddReason"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reason_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{reasonID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgAddReason")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"signer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgremovereason"},"MsgRemoveReason"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reason_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{reasonID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reports.v1.MsgRemoveReason")))))}i.isMDXComponent=!0}}]);
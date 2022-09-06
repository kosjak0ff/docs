"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[80602],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>m});var r=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(s),m=n,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return s?r.createElement(b,i(i({ref:t},p),{},{components:s})):r.createElement(b,i({ref:t},p))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=s.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=s[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,s)}d.displayName="MDXCreateElement"},16770:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=s(87462),n=(s(67294),s(3905));const a={id:"state",title:"State",sidebar_label:"State",slug:"state"},i="State",o={unversionedId:"developers/modules/subspaces/state",id:"developers/modules/subspaces/state",title:"State",description:"Next Subspace ID",source:"@site/docs/02-developers/02-modules/subspaces/03-state.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/state",permalink:"/next/developers/modules/subspaces/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/subspaces/03-state.md",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/next/developers/modules/subspaces/concepts"},next:{title:"Messages",permalink:"/next/developers/modules/subspaces/messages"}},l={},u=[{value:"Next Subspace ID",id:"next-subspace-id",level:2},{value:"Subspace",id:"subspace",level:2},{value:"Next Section ID",id:"next-section-id",level:2},{value:"Section",id:"section",level:2},{value:"Next Group ID",id:"next-group-id",level:2},{value:"User Group",id:"user-group",level:2},{value:"User Group Member",id:"user-group-member",level:2},{value:"User Permission",id:"user-permission",level:2}],p={toc:u};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"state"},"State"),(0,n.kt)("h2",{id:"next-subspace-id"},"Next Subspace ID"),(0,n.kt)("p",null,"The next subspace id is stored on the chain as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x00 | -> bytes(NextSubspaceID)"))),(0,n.kt)("h2",{id:"subspace"},"Subspace"),(0,n.kt)("p",null,"A subspace is stored on the chain by using its unique id as the key:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Subspace: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x01 | Subspace ID | -> ProtocolBuffer(Subspace)"))),(0,n.kt)("h2",{id:"next-section-id"},"Next Section ID"),(0,n.kt)("p",null,"The Next Section ID is stored on the chain using its associated subspace ID as key."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Next Section ID: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x06 | Subspace ID | -> bytes(NextSectionID)"))),(0,n.kt)("h2",{id:"section"},"Section"),(0,n.kt)("p",null,"The Section is stored using both the Subspace ID and its ID as keys. This make it easier to query:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All the subspace related sections;"),(0,n.kt)("li",{parentName:"ul"},"A specific section inside a given subspace.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Section: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x07 | Subspace ID | Section ID | -> ProtocolBuffer(Section)"))),(0,n.kt)("h2",{id:"next-group-id"},"Next Group ID"),(0,n.kt)("p",null,"The next group id is stored using the subspace id to which it is associated as the key:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Next Group ID: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x02 | Subspace ID | -> bytes(NextUserGroupID)"))),(0,n.kt)("h2",{id:"user-group"},"User Group"),(0,n.kt)("p",null,"A user group is stored on the chain with a combination of subspace id, section id and user group id as key. This make it easier to query:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"all the user groups of a subspace;"),(0,n.kt)("li",{parentName:"ul"},"all the user groups of a section;"),(0,n.kt)("li",{parentName:"ul"},"a specific user group.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User Group: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x03 | Subspace ID | Section ID | User Group ID -> ProtocolBuffer(UserGroup)"))),(0,n.kt)("h2",{id:"user-group-member"},"User Group Member"),(0,n.kt)("p",null,"A user group member is stored on the chain with a combination of subspace id and user group id as key:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User Group Member: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x04 | Subspace ID | User Group ID | Address | -> 0x01"))),(0,n.kt)("h2",{id:"user-permission"},"User Permission"),(0,n.kt)("p",null,"A user permission is stored on the chain with a combination of subspace id, section id and user address as key. This make it easy to query:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"all the user permissions set within a subspace;"),(0,n.kt)("li",{parentName:"ul"},"all the user permissions set within a a section;"),(0,n.kt)("li",{parentName:"ul"},"all the permissions set to an address.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User Permission: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x05 | Subspace ID | Section ID | Address | -> ProtocolBuffer(UserPermission)"))))}c.isMDXComponent=!0}}]);
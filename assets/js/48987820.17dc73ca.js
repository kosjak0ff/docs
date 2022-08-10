"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[43232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),u=o,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||s;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},a="Permissions",i={unversionedId:"developers/modules/reports/permissions",id:"version-4.2.0/developers/modules/reports/permissions",title:"Permissions",description:"Based on which x/reports related action your users want to perform, they need to be granted with one or more",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/reports/06-permissions.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/permissions",permalink:"/developers/modules/reports/permissions",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/reports/06-permissions.md",tags:[],version:"4.2.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:6,frontMatter:{id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},sidebar:"docs",previous:{title:"Events",permalink:"/developers/modules/reports/events"},next:{title:"Parameters",permalink:"/developers/modules/reports/params"}},l={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Based on which ",(0,o.kt)("inlineCode",{parentName:"p"},"x/reports")," related action your users want to perform, they need to be granted with one or more\nof the following permissions."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Permission Value")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Permission Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"REPORT_CONTENT")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to report contents")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"DELETE_OWN_REPORTS")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to delete own reports")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"MANAGE_REPORTS")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to manage other users' reports")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"MANAGE_REASONS")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to manage reporting reasons")))))}d.isMDXComponent=!0}}]);
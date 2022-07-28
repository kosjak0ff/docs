"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[24757],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),u=o,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},725:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},l="Permissions",p={unversionedId:"developers/modules/posts/permissions",id:"version-4.1.0/developers/modules/posts/permissions",title:"Permissions",description:"Based on which x/posts related action your users want to perform, they need to be granted with one or more",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/posts/06-permissions.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/permissions",permalink:"/developers/modules/posts/permissions",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/posts/06-permissions.md",tags:[],version:"4.1.0",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:6,frontMatter:{id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},sidebar:"docs",previous:{title:"Events",permalink:"/developers/modules/posts/events"},next:{title:"Parameters",permalink:"/developers/modules/posts/params"}},d={},m=[],c={toc:m};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"permissions"},"Permissions"),(0,s.kt)("p",null,"Based on which ",(0,s.kt)("inlineCode",{parentName:"p"},"x/posts")," related action your users want to perform, they need to be granted with one or more\nof the following permissions."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"th"},"Permission Value")),(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"th"},"Permission Description")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"WRITE_CONTENT")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to create contents")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"INTERACT_WITH_CONTENT")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to interact with contents (e.g. polls)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"EDIT_OWN_CONTENT")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to edit the owned contents")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"MODERATE_CONTENT")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to moderate users' contents")))))}u.isMDXComponent=!0}}]);
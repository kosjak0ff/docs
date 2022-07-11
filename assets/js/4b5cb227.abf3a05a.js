"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[37824],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=s,b=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84435:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),o=["components"],i={},p="Subspace",c={unversionedId:"developers/types/subspaces/subspace",id:"version-3/developers/types/subspaces/subspace",title:"Subspace",description:"Inside Desmos, subspaces are zones where applications live separated one from another with their own term of services, users and contents.",source:"@site/versioned_docs/version-3/02-developers/02-types/subspaces/subspace.md",sourceDirName:"02-developers/02-types/subspaces",slug:"/developers/types/subspaces/subspace",permalink:"/3/developers/types/subspaces/subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/02-types/subspaces/subspace.md",tags:[],version:"3",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",frontMatter:{},sidebar:"version-3/docs",previous:{title:"User block",permalink:"/3/developers/types/relationships/user-block"},next:{title:"User group",permalink:"/3/developers/types/subspaces/user-group"}},u={},l=[{value:"Attributes",id:"attributes",level:2},{value:"<code>ID</code>",id:"id",level:2},{value:"<code>Name</code>",id:"name",level:2},{value:"<code>Description</code>",id:"description",level:2},{value:"<code>Treasury</code>",id:"treasury",level:2},{value:"<code>Owner</code>",id:"owner",level:2},{value:"<code>Creator</code>",id:"creator",level:2},{value:"<code>CreationTime</code>",id:"creationtime",level:2}],d={toc:l};function m(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subspace"},"Subspace"),(0,a.kt)("p",null,"Inside Desmos, subspaces are zones where applications live separated one from another with their own term of services, users and contents.\nInside subspaces users can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Set permissions"),":",(0,a.kt)("br",{parentName:"li"}),"If a user is the subspace owner or an admin it can set permissions for other users to allow them to perform actions like\ncreate contents, manage groups, moderate other users, etc..."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Create groups"),":",(0,a.kt)("br",{parentName:"li"}),"Groups contain users and have their own set of permissions.")),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("p",null,"Following you can find the subspace attributes."),(0,a.kt)("h2",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h2"},"ID")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," uniquely identifies each subspace. It's a sequential ",(0,a.kt)("inlineCode",{parentName:"p"},"uint64")," assigned by Desmos each time a new subspace is created."),(0,a.kt)("h2",{id:"name"},(0,a.kt)("inlineCode",{parentName:"h2"},"Name")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," is the human-readable name of the subspace. It must be non-empty nor blank."),(0,a.kt)("h2",{id:"description"},(0,a.kt)("inlineCode",{parentName:"h2"},"Description")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Description")," contains a brief summary of what the subspace is about."),(0,a.kt)("h2",{id:"treasury"},(0,a.kt)("inlineCode",{parentName:"h2"},"Treasury")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Treasury")," is a Desmos address that can be used to connect external applications to verify it."),(0,a.kt)("h2",{id:"owner"},(0,a.kt)("inlineCode",{parentName:"h2"},"Owner")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Owner")," is the Desmos address of the user that owns the subspace."),(0,a.kt)("h2",{id:"creator"},(0,a.kt)("inlineCode",{parentName:"h2"},"Creator")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Creator")," identifies the Desmos address of user that has created the subspace."),(0,a.kt)("h2",{id:"creationtime"},(0,a.kt)("inlineCode",{parentName:"h2"},"CreationTime")),(0,a.kt)("p",null,"The time when the subspace has been created. This will be automatically be assigned by Desmos during the creation process of the subspace, it should not be provided when creating a subspace."))}m.isMDXComponent=!0}}]);
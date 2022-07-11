"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[18818],{3905:function(e,t,s){s.d(t,{Zo:function(){return u},kt:function(){return h}});var n=s(67294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(s),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return s?n.createElement(m,a(a({ref:t},u),{},{components:s})):n.createElement(m,a({ref:t},u))}));function h(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=s.length,a=new Array(r);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<r;p++)a[p]=s[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},3112:function(e,t,s){s.r(t),s.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=s(87462),i=s(63366),r=(s(67294),s(3905)),a=["components"],o={id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},l="Concepts",p={unversionedId:"developers/modules/subspaces/concepts",id:"version-4.1.0/developers/modules/subspaces/concepts",title:"Concepts",description:"Subspace",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/subspaces/02-concepts.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/concepts",permalink:"/developers/modules/subspaces/concepts",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/subspaces/02-concepts.md",tags:[],version:"4.1.0",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:2,frontMatter:{id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/developers/modules/subspaces/overview"},next:{title:"State",permalink:"/developers/modules/subspaces/state"}},u={},c=[{value:"Subspace",id:"subspace",level:2},{value:"ID",id:"id",level:3},{value:"Name",id:"name",level:3},{value:"Description (Optional)",id:"description-optional",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Owner",id:"owner",level:3},{value:"Creator",id:"creator",level:3},{value:"Creation time",id:"creation-time",level:3},{value:"Section",id:"section",level:2},{value:"Subspace ID",id:"subspace-id",level:3},{value:"ID",id:"id-1",level:3},{value:"Parent ID (Optional)",id:"parent-id-optional",level:3},{value:"Name",id:"name-1",level:3},{value:"Description (Optional)",id:"description-optional-1",level:3},{value:"User Group",id:"user-group",level:2},{value:"Subspace ID",id:"subspace-id-1",level:3},{value:"Section ID",id:"section-id",level:3},{value:"ID",id:"id-2",level:3},{value:"Name",id:"name-2",level:3},{value:"Description (Optional)",id:"description-optional-2",level:3},{value:"Permissions",id:"permissions",level:3},{value:"User Permission",id:"user-permission",level:2},{value:"Subspace ID",id:"subspace-id-2",level:3},{value:"Section ID",id:"section-id-1",level:3},{value:"User",id:"user",level:3},{value:"Permissions",id:"permissions-1",level:3}],d={toc:c};function h(e){var t=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"concepts"},"Concepts"),(0,r.kt)("h2",{id:"subspace"},"Subspace"),(0,r.kt)("p",null,"A subspace is a structure representing a specific dApp within the Desmos ecosystem where content can be created.\nEach subspace can have its own ",(0,r.kt)("a",{parentName:"p",href:"#section"},"sections"),", ",(0,r.kt)("a",{parentName:"p",href:"#user-group"},"user groups")," and ",(0,r.kt)("a",{parentName:"p",href:"#user-permission"},"permissions"),"."),(0,r.kt)("h3",{id:"id"},"ID"),(0,r.kt)("p",null,"The most important part of a subspace it's its own id. This represents the ",(0,r.kt)("strong",{parentName:"p"},"unique identifier")," that is assigned to the subspace during its creation. "),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"The subspace name allows the subspace creator and owner to set a human-readable name so that users and developers can easily understand what a subspace is used for. In most cases, when you create a subspace you want to set its name to the same name of the application that will later store its content there. "),(0,r.kt)("h3",{id:"description-optional"},"Description (Optional)"),(0,r.kt)("p",null,"An optional description of what the subspace is about."),(0,r.kt)("h3",{id:"treasury"},"Treasury"),(0,r.kt)("p",null,"The treasury address represents the wallet of the subspace itself. This can be used for different reasons such as verifying a subspace with external applications (to prove its authenticity), or paying for fees when executing some smart contracts. "),(0,r.kt)("h3",{id:"owner"},"Owner"),(0,r.kt)("p",null,"The subspace owner represents the wallet that owns the subspace. As the owner, this wallet will have the ",(0,r.kt)("inlineCode",{parentName:"p"},"EVERYTHING")," permission always set, which allows it to perform any kind of operation within this subspace."),(0,r.kt)("h3",{id:"creator"},"Creator"),(0,r.kt)("p",null,"This address represents the creator of the subspace. Note that, once a subspace is created, the creator address can never change. However, if you want to transfer the ownership to another user you can use the ",(0,r.kt)("a",{parentName:"p",href:"#owner"},"owner")," field. "),(0,r.kt)("h3",{id:"creation-time"},"Creation time"),(0,r.kt)("p",null,"The creation time of a subspace represents the block time at which the subspace was created. Note that this cannot be set externally nor edited, and is assigned automatically when a ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgCreateSubspace")," is handled."),(0,r.kt)("h2",{id:"section"},"Section"),(0,r.kt)("p",null,"A section can be seen as a folder within a subspace. It can be useful to represent a category or a topic, or to build\nforum-like social networks, allowing a better way to manage and categorize contents. Just like folders, you can also create nested sections.\nBy default, each subspace has a root section with id ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"subspace-id"},"Subspace ID"),(0,r.kt)("p",null,"The ID of the subspace where the section exists."),(0,r.kt)("h3",{id:"id-1"},"ID"),(0,r.kt)("p",null,"A section id represents the unique id within the subspace that the section has. This is used everywhere else along with the subspace id to uniquely identify this section."),(0,r.kt)("h3",{id:"parent-id-optional"},"Parent ID (Optional)"),(0,r.kt)("p",null,"The ID that identifies the parent of a section. This is set by default to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", which represents the root section of a subspace, but it can set to any other section's id to create a tree-like sections structure."),(0,r.kt)("h3",{id:"name-1"},"Name"),(0,r.kt)("p",null,"A section name represents the human-readable name of a section. This can be useful for developers to quickly see what sections are about, so that they can easily understand where to put a content if there are multiple ones."),(0,r.kt)("h3",{id:"description-optional-1"},"Description (Optional)"),(0,r.kt)("p",null,"A section description allows to describe more in detail what a section is about. This can be useful to expand on the topic or motivation of a section."),(0,r.kt)("h2",{id:"user-group"},"User Group"),(0,r.kt)("p",null,"A User group is a set of users who share the same permissions inside a particular subspace or subspace section."),(0,r.kt)("h3",{id:"subspace-id-1"},"Subspace ID"),(0,r.kt)("p",null,"The ID of the subspace where the group exists."),(0,r.kt)("h3",{id:"section-id"},"Section ID"),(0,r.kt)("p",null,"The ID of the section where the group exists."),(0,r.kt)("h3",{id:"id-2"},"ID"),(0,r.kt)("p",null,"A user group id uniquely identifies this group within the subspace itself. This, along with the subspace id itself, is used to uniquely reference this group within Desmos."),(0,r.kt)("h3",{id:"name-2"},"Name"),(0,r.kt)("p",null,"The user group name represents the human-readable name of the group. In most cases, this is going to be a short name that makes it possible to easily understand who the users within the group are (e.g. ",(0,r.kt)("strong",{parentName:"p"},"admins"),", ",(0,r.kt)("strong",{parentName:"p"},"moderators"),", etc)."),(0,r.kt)("h3",{id:"description-optional-2"},"Description (Optional)"),(0,r.kt)("p",null,"An optional description of the group."),(0,r.kt)("h3",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"A user group permissions represent the set of permissions that are granted to all the users that are part of the group itself."),(0,r.kt)("h2",{id:"user-permission"},"User Permission"),(0,r.kt)("p",null,"A user permission can be used to set an individual user's permission withing a subspace or subspace section. This is particularly useful when you want to set some kind of permission to a single wallet without having to create a user group to do so (e.g. you have a smart contract that needs to have a custom permission set). "),(0,r.kt)("h3",{id:"subspace-id-2"},"Subspace ID"),(0,r.kt)("p",null,"The ID of the subspace where the permission has been set."),(0,r.kt)("h3",{id:"section-id-1"},"Section ID"),(0,r.kt)("p",null,"The ID of the section where the permission has been set. Note that permissions set within parent sections are automatically applied to children sections as well. This means that if you set a user to have a specific permission inside the root section, such permission will be valid throught the entire subspace."),(0,r.kt)("h3",{id:"user"},"User"),(0,r.kt)("p",null,"The address of the user to which the permissions have been set."),(0,r.kt)("h3",{id:"permissions-1"},"Permissions"),(0,r.kt)("p",null,"The array of permissions granted to the user."))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[45013],{3905:(e,r,a)=>{a.d(r,{Zo:()=>l,kt:()=>c});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function g(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=t.createContext({}),_=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},l=function(e){var r=_(e.components);return t.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=g(e,["components","mdxType","originalType","parentName"]),s=_(a),c=n,u=s["".concat(d,".").concat(c)]||s[c]||p[c]||o;return a?t.createElement(u,i(i({ref:r},l),{},{components:a})):t.createElement(u,i({ref:r},l))}));function c(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=s;var g={};for(var d in r)hasOwnProperty.call(r,d)&&(g[d]=r[d]);g.originalType=e,g.mdxType="string"==typeof e?e:n,i[1]=g;for(var _=2;_<o;_++)i[_]=a[_];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},41911:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>g,toc:()=>_});var t=a(87462),n=(a(67294),a(3905));const o={id:"profile-order-by",title:"profile_order_by",hide_table_of_contents:!1},i=void 0,g={unversionedId:"graphql/inputs/profile-order-by",id:"graphql/inputs/profile-order-by",title:"profile_order_by",description:'Ordering options when selecting data from "profile".',source:"@site/docs/07-graphql/inputs/profile-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/profile-order-by",permalink:"/next/graphql/inputs/profile-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/profile-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"profile-order-by",title:"profile_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_on_conflict",permalink:"/next/graphql/inputs/profile-on-conflict"},next:{title:"profile_pk_columns_input",permalink:"/next/graphql/inputs/profile-pk-columns-input"}},d={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>address</code> (<code>order_by</code>)",id:"address-order_by",level:4},{value:"<code>application_links_aggregate</code> (<code>application_link_aggregate_order_by</code>)",id:"application_links_aggregate-application_link_aggregate_order_by",level:4},{value:"<code>bio</code> (<code>order_by</code>)",id:"bio-order_by",level:4},{value:"<code>blocked_users_aggregate</code> (<code>user_block_aggregate_order_by</code>)",id:"blocked_users_aggregate-user_block_aggregate_order_by",level:4},{value:"<code>chain_links_aggregate</code> (<code>chain_link_aggregate_order_by</code>)",id:"chain_links_aggregate-chain_link_aggregate_order_by",level:4},{value:"<code>cover_pic</code> (<code>order_by</code>)",id:"cover_pic-order_by",level:4},{value:"<code>creation_time</code> (<code>order_by</code>)",id:"creation_time-order_by",level:4},{value:"<code>dtag</code> (<code>order_by</code>)",id:"dtag-order_by",level:4},{value:"<code>followage_aggregate</code> (<code>user_relationship_aggregate_order_by</code>)",id:"followage_aggregate-user_relationship_aggregate_order_by",level:4},{value:"<code>following_aggregate</code> (<code>user_relationship_aggregate_order_by</code>)",id:"following_aggregate-user_relationship_aggregate_order_by",level:4},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>incoming_dtag_transfer_requests_aggregate</code> (<code>dtag_transfer_requests_aggregate_order_by</code>)",id:"incoming_dtag_transfer_requests_aggregate-dtag_transfer_requests_aggregate_order_by",level:4},{value:"<code>nickname</code> (<code>order_by</code>)",id:"nickname-order_by",level:4},{value:"<code>outgoing_dtag_transfer_requests_aggregate</code> (<code>dtag_transfer_requests_aggregate_order_by</code>)",id:"outgoing_dtag_transfer_requests_aggregate-dtag_transfer_requests_aggregate_order_by",level:4},{value:"<code>profile_pic</code> (<code>order_by</code>)",id:"profile_pic-order_by",level:4}],l={toc:_};function p(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},l,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "profile".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input profile_order_by {\n  address: order_by\n  application_links_aggregate: application_link_aggregate_order_by\n  bio: order_by\n  blocked_users_aggregate: user_block_aggregate_order_by\n  chain_links_aggregate: chain_link_aggregate_order_by\n  cover_pic: order_by\n  creation_time: order_by\n  dtag: order_by\n  followage_aggregate: user_relationship_aggregate_order_by\n  following_aggregate: user_relationship_aggregate_order_by\n  height: order_by\n  incoming_dtag_transfer_requests_aggregate: dtag_transfer_requests_aggregate_order_by\n  nickname: order_by\n  outgoing_dtag_transfer_requests_aggregate: dtag_transfer_requests_aggregate_order_by\n  profile_pic: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"application_links_aggregate-application_link_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"application_links_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/application-link-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"application_link_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"bio-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"bio"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"blocked_users_aggregate-user_block_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"blocked_users_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-block-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_block_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"chain_links_aggregate-chain_link_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"chain_links_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/chain-link-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"chain_link_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"cover_pic-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"cover_pic"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"creation_time-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"dtag-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"dtag"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"followage_aggregate-user_relationship_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"followage_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"following_aggregate-user_relationship_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"following_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"user_relationship_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"height-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"incoming_dtag_transfer_requests_aggregate-dtag_transfer_requests_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"incoming_dtag_transfer_requests_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"nickname-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"nickname"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"outgoing_dtag_transfer_requests_aggregate-dtag_transfer_requests_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"outgoing_dtag_transfer_requests_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"profile_pic-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_pic"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}p.isMDXComponent=!0}}]);
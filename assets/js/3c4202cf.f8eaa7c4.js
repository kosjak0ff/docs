"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[87186],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return b}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),c=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},s=function(e){var r=c(e.components);return o.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),b=n,f=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return t?o.createElement(f,d(d({ref:r},s),{},{components:t})):o.createElement(f,d({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,d=new Array(a);d[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,d[1]=l;for(var c=2;c<a;c++)d[c]=t[c];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52198:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),d=["components"],l={id:"user-block-order-by",title:"user_block_order_by",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/user-block-order-by",id:"graphql/inputs/user-block-order-by",title:"user_block_order_by",description:'Ordering options when selecting data from "user_block".',source:"@site/docs/07-graphql/inputs/user-block-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-order-by",permalink:"/next/graphql/inputs/user-block-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/user-block-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"user-block-order-by",title:"user_block_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_min_order_by",permalink:"/next/graphql/inputs/user-block-min-order-by"},next:{title:"application_link_oracle_request",permalink:"/next/graphql/objects/application-link-oracle-request"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>blocked</code> (<code>profile_order_by</code>)",id:"blocked-profile_order_by",level:4},{value:"<code>blocked_user_address</code> (<code>order_by</code>)",id:"blocked_user_address-order_by",level:4},{value:"<code>blocker</code> (<code>profile_order_by</code>)",id:"blocker-profile_order_by",level:4},{value:"<code>blocker_address</code> (<code>order_by</code>)",id:"blocker_address-order_by",level:4},{value:"<code>reason</code> (<code>order_by</code>)",id:"reason-order_by",level:4},{value:"<code>subspace</code> (<code>order_by</code>)",id:"subspace-order_by",level:4}],u={toc:p};function b(e){var r=e.components,t=(0,n.Z)(e,d);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "user_block".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_order_by {\n  blocked: profile_order_by\n  blocked_user_address: order_by\n  blocker: profile_order_by\n  blocker_address: order_by\n  reason: order_by\n  subspace: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"blocked-profile_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocked"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,a.kt)("h4",{id:"blocked_user_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocked_user_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"blocker-profile_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocker"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,a.kt)("h4",{id:"blocker_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocker_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"reason-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"subspace-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}b.isMDXComponent=!0}}]);
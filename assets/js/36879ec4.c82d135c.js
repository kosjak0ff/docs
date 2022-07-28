"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[26654],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,y=u["".concat(i,".").concat(f)]||u[f]||c[f]||a;return t?n.createElement(y,d(d({ref:r},l),{},{components:t})):n.createElement(y,d({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,d=new Array(a);d[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,d[1]=s;for(var p=2;p<a;p++)d[p]=t[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53925:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),d=["components"],s={id:"dtag-transfer-requests-order-by",title:"dtag_transfer_requests_order_by",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/inputs/dtag-transfer-requests-order-by",id:"version-4.2.0/graphql/inputs/dtag-transfer-requests-order-by",title:"dtag_transfer_requests_order_by",description:'Ordering options when selecting data from "dtagtransferrequests".',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/dtag-transfer-requests-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-order-by",permalink:"/graphql/inputs/dtag-transfer-requests-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/dtag-transfer-requests-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"dtag-transfer-requests-order-by",title:"dtag_transfer_requests_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_min_order_by",permalink:"/graphql/inputs/dtag-transfer-requests-min-order-by"},next:{title:"_int8_comparison_exp",permalink:"/graphql/inputs/int-8-comparison-exp"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>profile</code> (<code>profile_order_by</code>)",id:"profile-profile_order_by",level:4},{value:"<code>profileBySenderAddress</code> (<code>profile_order_by</code>)",id:"profilebysenderaddress-profile_order_by",level:4},{value:"<code>receiver_address</code> (<code>order_by</code>)",id:"receiver_address-order_by",level:4},{value:"<code>sender_address</code> (<code>order_by</code>)",id:"sender_address-order_by",level:4}],u={toc:c};function f(e){var r=e.components,t=(0,o.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "dtag_transfer_requests".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_order_by {\n  profile: profile_order_by\n  profileBySenderAddress: profile_order_by\n  receiver_address: order_by\n  sender_address: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"profile-profile_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,a.kt)("h4",{id:"profilebysenderaddress-profile_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profileBySenderAddress"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,a.kt)("h4",{id:"receiver_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"sender_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}f.isMDXComponent=!0}}]);
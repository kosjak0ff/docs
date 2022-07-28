"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[68135],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},_={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=d(t),f=o,u=c["".concat(p,".").concat(f)]||c[f]||_[f]||a;return t?n.createElement(u,s(s({ref:r},l),{},{components:t})):n.createElement(u,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=c;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},20927:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return _}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={id:"dtag-transfer-requests-bool-exp",title:"dtag_transfer_requests_bool_exp",hide_table_of_contents:!1},p=void 0,d={unversionedId:"graphql/inputs/dtag-transfer-requests-bool-exp",id:"version-4.1.0/graphql/inputs/dtag-transfer-requests-bool-exp",title:"dtag_transfer_requests_bool_exp",description:"Boolean expression to filter rows from the table \"dtagtransferrequests\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/dtag-transfer-requests-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-bool-exp",permalink:"/graphql/inputs/dtag-transfer-requests-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/dtag-transfer-requests-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"dtag-transfer-requests-bool-exp",title:"dtag_transfer_requests_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_aggregate_order_by",permalink:"/graphql/inputs/dtag-transfer-requests-aggregate-order-by"},next:{title:"dtag_transfer_requests_max_order_by",permalink:"/graphql/inputs/dtag-transfer-requests-max-order-by"}},l={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[dtag_transfer_requests_bool_exp!]</code>)",id:"_and-dtag_transfer_requests_bool_exp",level:4},{value:"<code>_not</code> (<code>dtag_transfer_requests_bool_exp</code>)",id:"_not-dtag_transfer_requests_bool_exp",level:4},{value:"<code>_or</code> (<code>[dtag_transfer_requests_bool_exp!]</code>)",id:"_or-dtag_transfer_requests_bool_exp",level:4},{value:"<code>profile</code> (<code>profile_bool_exp</code>)",id:"profile-profile_bool_exp",level:4},{value:"<code>profileBySenderAddress</code> (<code>profile_bool_exp</code>)",id:"profilebysenderaddress-profile_bool_exp",level:4},{value:"<code>receiver_address</code> (<code>String_comparison_exp</code>)",id:"receiver_address-string_comparison_exp",level:4},{value:"<code>sender_address</code> (<code>String_comparison_exp</code>)",id:"sender_address-string_comparison_exp",level:4}],c={toc:_};function f(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"dtag_transfer_requests\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_bool_exp {\n  _and: [dtag_transfer_requests_bool_exp!]\n  _not: dtag_transfer_requests_bool_exp\n  _or: [dtag_transfer_requests_bool_exp!]\n  profile: profile_bool_exp\n  profileBySenderAddress: profile_bool_exp\n  receiver_address: String_comparison_exp\n  sender_address: String_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_bool_exp!]")),")"),(0,a.kt)("h4",{id:"profile-profile_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,a.kt)("h4",{id:"profilebysenderaddress-profile_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profileBySenderAddress"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,a.kt)("h4",{id:"receiver_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"sender_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[40750],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return b}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),d=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},i=function(e){var r=d(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=d(t),b=o,m=l["".concat(u,".").concat(b)]||l[b]||c[b]||s;return t?n.createElement(m,a(a({ref:r},i),{},{components:t})):n.createElement(m,a({ref:r},i))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=l;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var d=2;d<s;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},20853:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],p={id:"subspace-user-group-stddev-samp-order-by",title:"subspace_user_group_stddev_samp_order_by",hide_table_of_contents:!1},u=void 0,d={unversionedId:"graphql/inputs/subspace-user-group-stddev-samp-order-by",id:"version-4.1.0/graphql/inputs/subspace-user-group-stddev-samp-order-by",title:"subspace_user_group_stddev_samp_order_by",description:'order by stddevsamp() on columns of table "subspaceuser_group"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-stddev-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-stddev-samp-order-by",permalink:"/4.1.0/graphql/inputs/subspace-user-group-stddev-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-stddev-samp-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-user-group-stddev-samp-order-by",title:"subspace_user_group_stddev_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_stddev_pop_order_by",permalink:"/4.1.0/graphql/inputs/subspace-user-group-stddev-pop-order-by"},next:{title:"subspace_user_group_sum_order_by",permalink:"/4.1.0/graphql/inputs/subspace-user-group-sum-order-by"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],l={toc:c};function b(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'order by stddev_samp() on columns of table "subspace_user_group"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_stddev_samp_order_by {\n  id: order_by\n  subspace_id: order_by\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"id-order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,s.kt)("h4",{id:"subspace_id-order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}b.isMDXComponent=!0}}]);
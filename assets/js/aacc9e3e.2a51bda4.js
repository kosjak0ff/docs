"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90044],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(n),m=s,b=l["".concat(p,".").concat(m)]||l[m]||d[m]||o;return n?t.createElement(b,i(i({ref:r},u),{},{components:n})):t.createElement(b,i({ref:r},u))}));function m(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=l;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},38700:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var t=n(87462),s=n(63366),o=(n(67294),n(3905)),i=["components"],a={id:"subspace-user-permission-order-by",title:"subspace_user_permission_order_by",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/inputs/subspace-user-permission-order-by",id:"version-4.1.0/graphql/inputs/subspace-user-permission-order-by",title:"subspace_user_permission_order_by",description:'Ordering options when selecting data from "subspaceuserpermission".',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-permission-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-permission-order-by",permalink:"/graphql/inputs/subspace-user-permission-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-permission-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-user-permission-order-by",title:"subspace_user_permission_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission_min_order_by",permalink:"/graphql/inputs/subspace-user-permission-min-order-by"},next:{title:"_text_comparison_exp",permalink:"/graphql/inputs/text-comparison-exp"}},u={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>permissions</code> (<code>order_by</code>)",id:"permissions-order_by",level:4},{value:"<code>section</code> (<code>subspace_section_order_by</code>)",id:"section-subspace_section_order_by",level:4},{value:"<code>user_address</code> (<code>order_by</code>)",id:"user_address-order_by",level:4}],l={toc:d};function m(e){var r=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "subspace_user_permission".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_permission_order_by {\n  permissions: order_by\n  section: subspace_section_order_by\n  user_address: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"permissions-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"permissions"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"section-subspace_section_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_section_order_by")),")"),(0,o.kt)("h4",{id:"user_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}m.isMDXComponent=!0}}]);
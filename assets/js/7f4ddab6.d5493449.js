"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[79312],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(67294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=t.createContext({}),p=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=p(n),m=s,b=l["".concat(u,".").concat(m)]||l[m]||d[m]||o;return n?t.createElement(b,i(i({ref:r},c),{},{components:n})):t.createElement(b,i({ref:r},c))}));function m(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=l;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},49830:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var t=n(87462),s=n(63366),o=(n(67294),n(3905)),i=["components"],a={id:"subspace-user-permission-min-order-by",title:"subspace_user_permission_min_order_by",hide_table_of_contents:!1},u=void 0,p={unversionedId:"graphql/inputs/subspace-user-permission-min-order-by",id:"graphql/inputs/subspace-user-permission-min-order-by",title:"subspace_user_permission_min_order_by",description:'order by min() on columns of table "subspaceuserpermission"',source:"@site/docs/07-graphql/inputs/subspace-user-permission-min-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-permission-min-order-by",permalink:"/next/graphql/inputs/subspace-user-permission-min-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-permission-min-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-user-permission-min-order-by",title:"subspace_user_permission_min_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission_max_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-max-order-by"},next:{title:"subspace_user_permission_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-order-by"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>user_address</code> (<code>order_by</code>)",id:"user_address-order_by",level:4}],l={toc:d};function m(e){var r=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by min() on columns of table "subspace_user_permission"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_permission_min_order_by {\n  user_address: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"user_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[89124],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return g}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),p=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},_=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),_=p(t),g=n,b=_["".concat(d,".").concat(g)]||_[g]||u[g]||o;return t?a.createElement(b,s(s({ref:r},c),{},{components:t})):a.createElement(b,s({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=_;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},37037:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),s=["components"],i={id:"subspace-section-order-by",title:"subspace_section_order_by",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/inputs/subspace-section-order-by",id:"version-4.1.0/graphql/inputs/subspace-section-order-by",title:"subspace_section_order_by",description:'Ordering options when selecting data from "subspace_section".',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-section-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-section-order-by",permalink:"/graphql/inputs/subspace-section-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-section-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-section-order-by",title:"subspace_section_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_section_min_order_by",permalink:"/graphql/inputs/subspace-section-min-order-by"},next:{title:"subspace_section_stddev_order_by",permalink:"/graphql/inputs/subspace-section-stddev-order-by"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>children_aggregate</code> (<code>subspace_section_aggregate_order_by</code>)",id:"children_aggregate-subspace_section_aggregate_order_by",level:4},{value:"<code>description</code> (<code>order_by</code>)",id:"description-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>name</code> (<code>order_by</code>)",id:"name-order_by",level:4},{value:"<code>parent</code> (<code>subspace_section_order_by</code>)",id:"parent-subspace_section_order_by",level:4},{value:"<code>posts_aggregate</code> (<code>post_aggregate_order_by</code>)",id:"posts_aggregate-post_aggregate_order_by",level:4},{value:"<code>subspace</code> (<code>subspace_order_by</code>)",id:"subspace-subspace_order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4},{value:"<code>user_groups_aggregate</code> (<code>subspace_user_group_aggregate_order_by</code>)",id:"user_groups_aggregate-subspace_user_group_aggregate_order_by",level:4},{value:"<code>user_permissions_aggregate</code> (<code>subspace_user_permission_aggregate_order_by</code>)",id:"user_permissions_aggregate-subspace_user_permission_aggregate_order_by",level:4}],_={toc:u};function g(e){var r=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "subspace_section".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_section_order_by {\n  children_aggregate: subspace_section_aggregate_order_by\n  description: order_by\n  id: order_by\n  name: order_by\n  parent: subspace_section_order_by\n  posts_aggregate: post_aggregate_order_by\n  subspace: subspace_order_by\n  subspace_id: order_by\n  user_groups_aggregate: subspace_user_group_aggregate_order_by\n  user_permissions_aggregate: subspace_user_permission_aggregate_order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"children_aggregate-subspace_section_aggregate_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"children_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-aggregate-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_section_aggregate_order_by")),")"),(0,o.kt)("h4",{id:"description-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"name-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"parent-subspace_section_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"parent"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_section_order_by")),")"),(0,o.kt)("h4",{id:"posts_aggregate-post_aggregate_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"posts_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-aggregate-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_aggregate_order_by")),")"),(0,o.kt)("h4",{id:"subspace-subspace_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_order_by")),")"),(0,o.kt)("h4",{id:"subspace_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"user_groups_aggregate-subspace_user_group_aggregate_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_groups_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-aggregate-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_aggregate_order_by")),")"),(0,o.kt)("h4",{id:"user_permissions_aggregate-subspace_user_permission_aggregate_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_permissions_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-aggregate-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_aggregate_order_by")),")"))}g.isMDXComponent=!0}}]);
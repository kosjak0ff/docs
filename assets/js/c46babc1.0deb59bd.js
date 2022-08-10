"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[89124],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>u});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=t.createContext({}),p=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},c=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},_={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(a),u=n,b=g["".concat(d,".").concat(u)]||g[u]||_[u]||s;return a?t.createElement(b,o(o({ref:r},c),{},{components:a})):t.createElement(b,o({ref:r},c))}));function u(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=g;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},37037:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>_,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=a(87462),n=(a(67294),a(3905));const s={id:"subspace-section-order-by",title:"subspace_section_order_by",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/inputs/subspace-section-order-by",id:"version-4.1.0/graphql/inputs/subspace-section-order-by",title:"subspace_section_order_by",description:'Ordering options when selecting data from "subspace_section".',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-section-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-section-order-by",permalink:"/4.1.0/graphql/inputs/subspace-section-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-section-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-section-order-by",title:"subspace_section_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_section_min_order_by",permalink:"/4.1.0/graphql/inputs/subspace-section-min-order-by"},next:{title:"subspace_section_stddev_order_by",permalink:"/4.1.0/graphql/inputs/subspace-section-stddev-order-by"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>children_aggregate</code> (<code>subspace_section_aggregate_order_by</code>)",id:"children_aggregate-subspace_section_aggregate_order_by",level:4},{value:"<code>description</code> (<code>order_by</code>)",id:"description-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>name</code> (<code>order_by</code>)",id:"name-order_by",level:4},{value:"<code>parent</code> (<code>subspace_section_order_by</code>)",id:"parent-subspace_section_order_by",level:4},{value:"<code>posts_aggregate</code> (<code>post_aggregate_order_by</code>)",id:"posts_aggregate-post_aggregate_order_by",level:4},{value:"<code>subspace</code> (<code>subspace_order_by</code>)",id:"subspace-subspace_order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4},{value:"<code>user_groups_aggregate</code> (<code>subspace_user_group_aggregate_order_by</code>)",id:"user_groups_aggregate-subspace_user_group_aggregate_order_by",level:4},{value:"<code>user_permissions_aggregate</code> (<code>subspace_user_permission_aggregate_order_by</code>)",id:"user_permissions_aggregate-subspace_user_permission_aggregate_order_by",level:4}],c={toc:p};function _(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "subspace_section".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_section_order_by {\n  children_aggregate: subspace_section_aggregate_order_by\n  description: order_by\n  id: order_by\n  name: order_by\n  parent: subspace_section_order_by\n  posts_aggregate: post_aggregate_order_by\n  subspace: subspace_order_by\n  subspace_id: order_by\n  user_groups_aggregate: subspace_user_group_aggregate_order_by\n  user_permissions_aggregate: subspace_user_permission_aggregate_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"children_aggregate-subspace_section_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"children_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_section_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"description-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"name-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"parent-subspace_section_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"parent"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_section_order_by")),")"),(0,n.kt)("h4",{id:"posts_aggregate-post_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"posts_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"subspace-subspace_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_order_by")),")"),(0,n.kt)("h4",{id:"subspace_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"user_groups_aggregate-subspace_user_group_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"user_groups_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_group_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"user_permissions_aggregate-subspace_user_permission_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"user_permissions_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_aggregate_order_by")),")"))}_.isMDXComponent=!0}}]);
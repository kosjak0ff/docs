"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[3783],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return g}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},l=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=c(t),g=n,_=l["".concat(p,".").concat(g)]||l[g]||m[g]||o;return t?a.createElement(_,s(s({ref:r},i),{},{components:t})):a.createElement(_,s({ref:r},i))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=l;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},77979:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),s=["components"],u={id:"subspace-user-group-member-aggregate",title:"subspace_user_group_member_aggregate",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/queries/subspace-user-group-member-aggregate",id:"version-4.1.0/graphql/queries/subspace-user-group-member-aggregate",title:"subspace_user_group_member_aggregate",description:'fetch aggregated fields from the table: "subspaceusergroup_member"',source:"@site/versioned_docs/version-4.1.0/07-graphql/queries/subspace-user-group-member-aggregate.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-user-group-member-aggregate",permalink:"/4.1.0/graphql/queries/subspace-user-group-member-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/queries/subspace-user-group-member-aggregate.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-user-group-member-aggregate",title:"subspace_user_group_member_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_aggregate",permalink:"/4.1.0/graphql/queries/subspace-user-group-aggregate"},next:{title:"subspace_user_group_member",permalink:"/4.1.0/graphql/queries/subspace-user-group-member"}},i={},m=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_user_group_member_select_column!]</code>)",id:"distinct_on-subspace_user_group_member_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_user_group_member_order_by!]</code>)",id:"order_by-subspace_user_group_member_order_by",level:4},{value:"<code>where</code> (<code>subspace_user_group_member_bool_exp</code>)",id:"where-subspace_user_group_member_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_group_member_aggregate</code>",id:"subspace_user_group_member_aggregate",level:4}],l={toc:m};function g(e){var r=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch aggregated fields from the table: "subspace_user_group_member"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_user_group_member_aggregate(\n  distinct_on: [subspace_user_group_member_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_member_order_by!]\n  where: subspace_user_group_member_bool_exp\n): subspace_user_group_member_aggregate!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-subspace_user_group_member_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/subspace-user-group-member-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-subspace_user_group_member_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-subspace_user_group_member_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"subspace_user_group_member_aggregate"},(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member-aggregate"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_aggregate"))),(0,o.kt)("p",null,'aggregated selection of "subspace_user_group_member"'))}g.isMDXComponent=!0}}]);
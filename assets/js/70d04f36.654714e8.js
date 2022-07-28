"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[26892],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return b}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),l=c(t),b=o,_=l["".concat(p,".").concat(b)]||l[b]||m[b]||s;return t?n.createElement(_,u(u({ref:r},i),{},{components:t})):n.createElement(_,u({ref:r},i))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,u=new Array(s);u[0]=l;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<s;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},1043:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return m}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),u=["components"],a={id:"subspace-user-group-member",title:"subspace_user_group_member",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/queries/subspace-user-group-member",id:"version-4.2.0/graphql/queries/subspace-user-group-member",title:"subspace_user_group_member",description:'fetch data from the table: "subspaceusergroup_member"',source:"@site/versioned_docs/version-4.2.0/07-graphql/queries/subspace-user-group-member.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-user-group-member",permalink:"/graphql/queries/subspace-user-group-member",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/queries/subspace-user-group-member.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-user-group-member",title:"subspace_user_group_member",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_aggregate",permalink:"/graphql/queries/subspace-user-group-member-aggregate"},next:{title:"subspace_user_group",permalink:"/graphql/queries/subspace-user-group"}},i={},m=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_user_group_member_select_column!]</code>)",id:"distinct_on-subspace_user_group_member_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_user_group_member_order_by!]</code>)",id:"order_by-subspace_user_group_member_order_by",level:4},{value:"<code>where</code> (<code>subspace_user_group_member_bool_exp</code>)",id:"where-subspace_user_group_member_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_group_member</code>",id:"subspace_user_group_member",level:4}],l={toc:m};function b(e){var r=e.components,t=(0,o.Z)(e,u);return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch data from the table: "subspace_user_group_member"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_user_group_member(\n  distinct_on: [subspace_user_group_member_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_member_order_by!]\n  where: subspace_user_group_member_bool_exp\n): [subspace_user_group_member!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_user_group_member_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-user-group-member-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_user_group_member_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_user_group_member_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_user_group_member"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member"))),(0,s.kt)("p",null,'columns and relationships of "subspace_user_group_member"'))}b.isMDXComponent=!0}}]);
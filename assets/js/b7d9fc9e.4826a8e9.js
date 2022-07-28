"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[46228],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,_=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(_,i(i({ref:t},u),{},{components:r})):a.createElement(_,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},23578:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"subspace",title:"subspace",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/objects/subspace",id:"version-4.1.0/graphql/objects/subspace",title:"subspace",description:'columns and relationships of "subspace"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/subspace.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace",permalink:"/graphql/objects/subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/subspace.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace",title:"subspace",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission",permalink:"/graphql/objects/subspace-user-permission"},next:{title:"user_block_aggregate_fields",permalink:"/graphql/objects/user-block-aggregate-fields"}},u={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>creation_time</code> (<code>timestamp!</code>)",id:"creation_time-timestamp",level:4},{value:"<code>creator_address</code> (<code>String!</code>)",id:"creator_address-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>free_text_reactions_params</code> (<code>subspace_free_text_params!</code>)",id:"free_text_reactions_params-subspace_free_text_params",level:4},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"<code>name</code> (<code>String!</code>)",id:"name-string",level:4},{value:"<code>owner_address</code> (<code>String!</code>)",id:"owner_address-string",level:4},{value:"<code>posts</code> (<code>[post!]!</code>)",id:"posts-post",level:4},{value:"<code>posts_aggregate</code> (<code>post_aggregate!</code>)",id:"posts_aggregate-post_aggregate",level:4},{value:"<code>registered_reactions</code> (<code>[subspace_registered_reaction!]!</code>)",id:"registered_reactions-subspace_registered_reaction",level:4},{value:"<code>registered_reactions_params</code> (<code>subspace_registered_reaction_params</code>)",id:"registered_reactions_params-subspace_registered_reaction_params",level:4},{value:"<code>report_reasons</code> (<code>[subspace_report_reason!]!</code>)",id:"report_reasons-subspace_report_reason",level:4},{value:"<code>reports</code> (<code>[report!]!</code>)",id:"reports-report",level:4},{value:"<code>reports_aggregate</code> (<code>report_aggregate!</code>)",id:"reports_aggregate-report_aggregate",level:4},{value:"<code>sections</code> (<code>[subspace_section!]!</code>)",id:"sections-subspace_section",level:4},{value:"<code>treasury_address</code> (<code>String</code>)",id:"treasury_address-string",level:4},{value:"<code>user_groups</code> (<code>[subspace_user_group!]!</code>)",id:"user_groups-subspace_user_group",level:4},{value:"<code>user_groups_aggregate</code> (<code>subspace_user_group_aggregate!</code>)",id:"user_groups_aggregate-subspace_user_group_aggregate",level:4}],c={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'columns and relationships of "subspace"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace {\n  creation_time: timestamp!\n  creator_address: String!\n  description: String\n  free_text_reactions_params: subspace_free_text_params!\n  id: bigint!\n  name: String!\n  owner_address: String!\n  posts(\n  distinct_on: [post_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_order_by!]\n  where: post_bool_exp\n): [post!]!\n  posts_aggregate(\n  distinct_on: [post_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_order_by!]\n  where: post_bool_exp\n): post_aggregate!\n  registered_reactions(\n  distinct_on: [subspace_registered_reaction_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_registered_reaction_order_by!]\n  where: subspace_registered_reaction_bool_exp\n): [subspace_registered_reaction!]!\n  registered_reactions_params: subspace_registered_reaction_params\n  report_reasons(\n  distinct_on: [subspace_report_reason_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_report_reason_order_by!]\n  where: subspace_report_reason_bool_exp\n): [subspace_report_reason!]!\n  reports(\n  distinct_on: [report_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [report_order_by!]\n  where: report_bool_exp\n): [report!]!\n  reports_aggregate(\n  distinct_on: [report_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [report_order_by!]\n  where: report_bool_exp\n): report_aggregate!\n  sections(\n  distinct_on: [subspace_section_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_section_order_by!]\n  where: subspace_section_bool_exp\n): [subspace_section!]!\n  treasury_address: String\n  user_groups(\n  distinct_on: [subspace_user_group_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_order_by!]\n  where: subspace_user_group_bool_exp\n): [subspace_user_group!]!\n  user_groups_aggregate(\n  distinct_on: [subspace_user_group_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_order_by!]\n  where: subspace_user_group_bool_exp\n): subspace_user_group_aggregate!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"creation_time-timestamp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,o.kt)("inlineCode",{parentName:"a"},"timestamp!")),")"),(0,o.kt)("h4",{id:"creator_address-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"creator_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"description-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"free_text_reactions_params-subspace_free_text_params"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"free_text_reactions_params"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-free-text-params"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params!")),")"),(0,o.kt)("p",null,"An object relationship"),(0,o.kt)("h4",{id:"id-bigint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,o.kt)("h4",{id:"name-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"owner_address-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"owner_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"posts-post"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post"},(0,o.kt)("inlineCode",{parentName:"a"},"[post!]!")),")"),(0,o.kt)("p",null,"An array relationship"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct_on-post_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/post-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_select_column!]")),")"))),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"limit-int"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"offset-int"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"order_by-post_order_by"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/post-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_order_by!]")),")"))),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"where-post_bool_exp"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/post-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"))),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h4",{id:"posts_aggregate-post_aggregate"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"posts_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-aggregate"},(0,o.kt)("inlineCode",{parentName:"a"},"post_aggregate!")),")"),(0,o.kt)("p",null,"An aggregate relationship"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct_on-post_select_column-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/post-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_select_column!]")),")"))),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"limit-int-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"offset-int-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"order_by-post_order_by-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/post-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_order_by!]")),")"))),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"where-post_bool_exp-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/post-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"))),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h4",{id:"registered_reactions-subspace_registered_reaction"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"registered_reactions"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction!]!")),")"),(0,o.kt)("p",null,"An array relationship"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct_on-subspace_registered_reaction_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/subspace-registered-reaction-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_select_column!]")),")"))),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"limit-int-2"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"offset-int-2"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"order_by-subspace_registered_reaction_order_by"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-registered-reaction-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_order_by!]")),")"))),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"where-subspace_registered_reaction_bool_exp"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_bool_exp")),")"))),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h4",{id:"registered_reactions_params-subspace_registered_reaction_params"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"registered_reactions_params"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction-params"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params")),")"),(0,o.kt)("p",null,"An object relationship"),(0,o.kt)("h4",{id:"report_reasons-subspace_report_reason"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"report_reasons"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-report-reason"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason!]!")),")"),(0,o.kt)("p",null,"An array relationship"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct_on-subspace_report_reason_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/subspace-report-reason-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason_select_column!]")),")"))),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"limit-int-3"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"offset-int-3"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"order_by-subspace_report_reason_order_by"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-report-reason-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason_order_by!]")),")"))),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"where-subspace_report_reason_bool_exp"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-report-reason-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_bool_exp")),")"))),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h4",{id:"reports-report"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reports"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report"},(0,o.kt)("inlineCode",{parentName:"a"},"[report!]!")),")"),(0,o.kt)("p",null,"An array relationship"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct_on-report_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/report-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[report_select_column!]")),")"))),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"limit-int-4"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"offset-int-4"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"order_by-report_order_by"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/report-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[report_order_by!]")),")"))),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"where-report_bool_exp"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/report-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"report_bool_exp")),")"))),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h4",{id:"reports_aggregate-report_aggregate"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reports_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-aggregate"},(0,o.kt)("inlineCode",{parentName:"a"},"report_aggregate!")),")"),(0,o.kt)("p",null,"An aggregate relationship"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct_on-report_select_column-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/report-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[report_select_column!]")),")"))),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"limit-int-5"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"offset-int-5"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"order_by-report_order_by-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/report-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[report_order_by!]")),")"))),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"where-report_bool_exp-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/report-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"report_bool_exp")),")"))),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h4",{id:"sections-subspace_section"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sections"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-section"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_section!]!")),")"),(0,o.kt)("p",null,"An array relationship"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct_on-subspace_section_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/subspace-section-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_section_select_column!]")),")"))),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"limit-int-6"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"offset-int-6"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"order_by-subspace_section_order_by"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-section-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_section_order_by!]")),")"))),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"where-subspace_section_bool_exp"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-section-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"))),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h4",{id:"treasury_address-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"treasury_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"user_groups-subspace_user_group"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_groups"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group!]!")),")"),(0,o.kt)("p",null,"An array relationship"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct_on-subspace_user_group_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/subspace-user-group-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_select_column!]")),")"))),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"limit-int-7"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"offset-int-7"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"order_by-subspace_user_group_order_by"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_order_by!]")),")"))),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"where-subspace_user_group_bool_exp"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"))),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h4",{id:"user_groups_aggregate-subspace_user_group_aggregate"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_groups_aggregate"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-aggregate"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_aggregate!")),")"),(0,o.kt)("p",null,"An aggregate relationship"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct_on-subspace_user_group_select_column-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/subspace-user-group-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_select_column!]")),")"))),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"limit-int-8"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"offset-int-8"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"order_by-subspace_user_group_order_by-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_order_by!]")),")"))),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"where-subspace_user_group_bool_exp-1"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"))),(0,o.kt)("p",null,"filter the rows returned"))}d.isMDXComponent=!0}}]);
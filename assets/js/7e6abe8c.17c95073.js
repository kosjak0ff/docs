"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[69767],{3905:function(e,r,a){a.d(r,{Zo:function(){return p},kt:function(){return u}});var t=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function d(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var _=t.createContext({}),i=function(e){var r=t.useContext(_),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},p=function(e){var r=i(e.components);return t.createElement(_.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,_=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=i(a),u=o,b=c["".concat(_,".").concat(u)]||c[u]||g[u]||n;return a?t.createElement(b,s(s({ref:r},p),{},{components:a})):t.createElement(b,s({ref:r},p))}));function u(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=c;var d={};for(var _ in r)hasOwnProperty.call(r,_)&&(d[_]=r[_]);d.originalType=e,d.mdxType="string"==typeof e?e:o,s[1]=d;for(var i=2;i<n;i++)s[i]=a[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78267:function(e,r,a){a.r(r),a.d(r,{assets:function(){return p},contentTitle:function(){return _},default:function(){return u},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return g}});var t=a(87462),o=a(63366),n=(a(67294),a(3905)),s=["components"],d={id:"subspace-order-by",title:"subspace_order_by",hide_table_of_contents:!1},_=void 0,i={unversionedId:"graphql/inputs/subspace-order-by",id:"graphql/inputs/subspace-order-by",title:"subspace_order_by",description:'Ordering options when selecting data from "subspace".',source:"@site/docs/07-graphql/inputs/subspace-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-order-by",permalink:"/next/graphql/inputs/subspace-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-order-by",title:"subspace_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_free_text_params_order_by",permalink:"/next/graphql/inputs/subspace-free-text-params-order-by"},next:{title:"subspace_registered_reaction_aggregate_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-aggregate-order-by"}},p={},g=[{value:"Fields",id:"fields",level:3},{value:"<code>creation_time</code> (<code>order_by</code>)",id:"creation_time-order_by",level:4},{value:"<code>creator_address</code> (<code>order_by</code>)",id:"creator_address-order_by",level:4},{value:"<code>description</code> (<code>order_by</code>)",id:"description-order_by",level:4},{value:"<code>free_text_reactions_params</code> (<code>subspace_free_text_params_order_by</code>)",id:"free_text_reactions_params-subspace_free_text_params_order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>name</code> (<code>order_by</code>)",id:"name-order_by",level:4},{value:"<code>owner_address</code> (<code>order_by</code>)",id:"owner_address-order_by",level:4},{value:"<code>posts_aggregate</code> (<code>post_aggregate_order_by</code>)",id:"posts_aggregate-post_aggregate_order_by",level:4},{value:"<code>registered_reactions_aggregate</code> (<code>subspace_registered_reaction_aggregate_order_by</code>)",id:"registered_reactions_aggregate-subspace_registered_reaction_aggregate_order_by",level:4},{value:"<code>registered_reactions_params</code> (<code>subspace_registered_reaction_params_order_by</code>)",id:"registered_reactions_params-subspace_registered_reaction_params_order_by",level:4},{value:"<code>report_reasons_aggregate</code> (<code>subspace_report_reason_aggregate_order_by</code>)",id:"report_reasons_aggregate-subspace_report_reason_aggregate_order_by",level:4},{value:"<code>reports_aggregate</code> (<code>report_aggregate_order_by</code>)",id:"reports_aggregate-report_aggregate_order_by",level:4},{value:"<code>sections_aggregate</code> (<code>subspace_section_aggregate_order_by</code>)",id:"sections_aggregate-subspace_section_aggregate_order_by",level:4},{value:"<code>treasury_address</code> (<code>order_by</code>)",id:"treasury_address-order_by",level:4},{value:"<code>user_groups_aggregate</code> (<code>subspace_user_group_aggregate_order_by</code>)",id:"user_groups_aggregate-subspace_user_group_aggregate_order_by",level:4}],c={toc:g};function u(e){var r=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "subspace".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_order_by {\n  creation_time: order_by\n  creator_address: order_by\n  description: order_by\n  free_text_reactions_params: subspace_free_text_params_order_by\n  id: order_by\n  name: order_by\n  owner_address: order_by\n  posts_aggregate: post_aggregate_order_by\n  registered_reactions_aggregate: subspace_registered_reaction_aggregate_order_by\n  registered_reactions_params: subspace_registered_reaction_params_order_by\n  report_reasons_aggregate: subspace_report_reason_aggregate_order_by\n  reports_aggregate: report_aggregate_order_by\n  sections_aggregate: subspace_section_aggregate_order_by\n  treasury_address: order_by\n  user_groups_aggregate: subspace_user_group_aggregate_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"creation_time-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"creator_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creator_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"description-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"free_text_reactions_params-subspace_free_text_params_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"free_text_reactions_params"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_order_by")),")"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"name-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"owner_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"owner_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"posts_aggregate-post_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"posts_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"registered_reactions_aggregate-subspace_registered_reaction_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"registered_reactions_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"registered_reactions_params-subspace_registered_reaction_params_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"registered_reactions_params"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_order_by")),")"),(0,n.kt)("h4",{id:"report_reasons_aggregate-subspace_report_reason_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"report_reasons_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"reports_aggregate-report_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reports_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/report-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"report_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"sections_aggregate-subspace_section_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sections_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_section_aggregate_order_by")),")"),(0,n.kt)("h4",{id:"treasury_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"treasury_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"user_groups_aggregate-subspace_user_group_aggregate_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"user_groups_aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-aggregate-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_group_aggregate_order_by")),")"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39716],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>c});var s=a(67294);function _(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function p(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?p(Object(a),!0).forEach((function(r){_(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function t(e,r){if(null==e)return{};var a,s,_=function(e,r){if(null==e)return{};var a,s,_={},p=Object.keys(e);for(s=0;s<p.length;s++)a=p[s],r.indexOf(a)>=0||(_[a]=e[a]);return _}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(s=0;s<p.length;s++)a=p[s],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(_[a]=e[a])}return _}var u=s.createContext({}),m=function(e){var r=s.useContext(u),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},d=function(e){var r=m(e.components);return s.createElement(u.Provider,{value:r},e.children)},n={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},b=s.forwardRef((function(e,r){var a=e.components,_=e.mdxType,p=e.originalType,u=e.parentName,d=t(e,["components","mdxType","originalType","parentName"]),b=m(a),c=_,i=b["".concat(u,".").concat(c)]||b[c]||n[c]||p;return a?s.createElement(i,o(o({ref:r},d),{},{components:a})):s.createElement(i,o({ref:r},d))}));function c(e,r){var a=arguments,_=r&&r.mdxType;if("string"==typeof e||_){var p=a.length,o=new Array(p);o[0]=b;var t={};for(var u in r)hasOwnProperty.call(r,u)&&(t[u]=r[u]);t.originalType=e,t.mdxType="string"==typeof e?e:_,o[1]=t;for(var m=2;m<p;m++)o[m]=a[m];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}b.displayName="MDXCreateElement"},97344:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>n,frontMatter:()=>p,metadata:()=>t,toc:()=>m});var s=a(87462),_=(a(67294),a(3905));const p={id:"subspace-user-group-member-aggregate-order-by",title:"subspace_user_group_member_aggregate_order_by",hide_table_of_contents:!1},o=void 0,t={unversionedId:"graphql/inputs/subspace-user-group-member-aggregate-order-by",id:"graphql/inputs/subspace-user-group-member-aggregate-order-by",title:"subspace_user_group_member_aggregate_order_by",description:'order by aggregate values of table "subspaceusergroup_member"',source:"@site/docs/07-graphql/inputs/subspace-user-group-member-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-aggregate-order-by",permalink:"/next/graphql/inputs/subspace-user-group-member-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-group-member-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-group-member-aggregate-order-by",title:"subspace_user_group_member_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_max_order_by",permalink:"/next/graphql/inputs/subspace-user-group-max-order-by"},next:{title:"subspace_user_group_member_arr_rel_insert_input",permalink:"/next/graphql/inputs/subspace-user-group-member-arr-rel-insert-input"}},u={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_user_group_member_avg_order_by</code>)",id:"avg-subspace_user_group_member_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_user_group_member_max_order_by</code>)",id:"max-subspace_user_group_member_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_user_group_member_min_order_by</code>)",id:"min-subspace_user_group_member_min_order_by",level:4},{value:"<code>stddev</code> (<code>subspace_user_group_member_stddev_order_by</code>)",id:"stddev-subspace_user_group_member_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>subspace_user_group_member_stddev_pop_order_by</code>)",id:"stddev_pop-subspace_user_group_member_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>subspace_user_group_member_stddev_samp_order_by</code>)",id:"stddev_samp-subspace_user_group_member_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>subspace_user_group_member_sum_order_by</code>)",id:"sum-subspace_user_group_member_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>subspace_user_group_member_var_pop_order_by</code>)",id:"var_pop-subspace_user_group_member_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>subspace_user_group_member_var_samp_order_by</code>)",id:"var_samp-subspace_user_group_member_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>subspace_user_group_member_variance_order_by</code>)",id:"variance-subspace_user_group_member_variance_order_by",level:4}],d={toc:m};function n(e){let{components:r,...a}=e;return(0,_.kt)("wrapper",(0,s.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,_.kt)("p",null,'order by aggregate values of table "subspace_user_group_member"'),(0,_.kt)("pre",null,(0,_.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_member_aggregate_order_by {\n  avg: subspace_user_group_member_avg_order_by\n  count: order_by\n  max: subspace_user_group_member_max_order_by\n  min: subspace_user_group_member_min_order_by\n  stddev: subspace_user_group_member_stddev_order_by\n  stddev_pop: subspace_user_group_member_stddev_pop_order_by\n  stddev_samp: subspace_user_group_member_stddev_samp_order_by\n  sum: subspace_user_group_member_sum_order_by\n  var_pop: subspace_user_group_member_var_pop_order_by\n  var_samp: subspace_user_group_member_var_samp_order_by\n  variance: subspace_user_group_member_variance_order_by\n}\n")),(0,_.kt)("h3",{id:"fields"},"Fields"),(0,_.kt)("h4",{id:"avg-subspace_user_group_member_avg_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-avg-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_avg_order_by")),")"),(0,_.kt)("h4",{id:"count-order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,_.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,_.kt)("h4",{id:"max-subspace_user_group_member_max_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-max-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_max_order_by")),")"),(0,_.kt)("h4",{id:"min-subspace_user_group_member_min_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-min-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_min_order_by")),")"),(0,_.kt)("h4",{id:"stddev-subspace_user_group_member_stddev_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-stddev-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_stddev_order_by")),")"),(0,_.kt)("h4",{id:"stddev_pop-subspace_user_group_member_stddev_pop_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-stddev-pop-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_stddev_pop_order_by")),")"),(0,_.kt)("h4",{id:"stddev_samp-subspace_user_group_member_stddev_samp_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-stddev-samp-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_stddev_samp_order_by")),")"),(0,_.kt)("h4",{id:"sum-subspace_user_group_member_sum_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-sum-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_sum_order_by")),")"),(0,_.kt)("h4",{id:"var_pop-subspace_user_group_member_var_pop_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-var-pop-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_var_pop_order_by")),")"),(0,_.kt)("h4",{id:"var_samp-subspace_user_group_member_var_samp_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-var-samp-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_var_samp_order_by")),")"),(0,_.kt)("h4",{id:"variance-subspace_user_group_member_variance_order_by"},(0,_.kt)("a",{parentName:"h4",href:"#"},(0,_.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,_.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-variance-order-by"},(0,_.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_variance_order_by")),")"))}n.isMDXComponent=!0}}]);
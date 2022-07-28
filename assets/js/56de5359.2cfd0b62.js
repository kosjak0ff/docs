"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13022],{3905:function(e,r,a){a.d(r,{Zo:function(){return d},kt:function(){return b}});var s=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,s)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function u(e,r){if(null==e)return{};var a,s,o=function(e,r){if(null==e)return{};var a,s,o={},t=Object.keys(e);for(s=0;s<t.length;s++)a=t[s],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)a=t[s],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var _=s.createContext({}),n=function(e){var r=s.useContext(_),a=r;return e&&(a="function"==typeof e?e(r):p(p({},r),e)),a},d=function(e){var r=n(e.components);return s.createElement(_.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},i=s.forwardRef((function(e,r){var a=e.components,o=e.mdxType,t=e.originalType,_=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),i=n(a),b=o,g=i["".concat(_,".").concat(b)]||i[b]||c[b]||t;return a?s.createElement(g,p(p({ref:r},d),{},{components:a})):s.createElement(g,p({ref:r},d))}));function b(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=a.length,p=new Array(t);p[0]=i;var u={};for(var _ in r)hasOwnProperty.call(r,_)&&(u[_]=r[_]);u.originalType=e,u.mdxType="string"==typeof e?e:o,p[1]=u;for(var n=2;n<t;n++)p[n]=a[n];return s.createElement.apply(null,p)}return s.createElement.apply(null,a)}i.displayName="MDXCreateElement"},314:function(e,r,a){a.r(r),a.d(r,{assets:function(){return d},contentTitle:function(){return _},default:function(){return b},frontMatter:function(){return u},metadata:function(){return n},toc:function(){return c}});var s=a(87462),o=a(63366),t=(a(67294),a(3905)),p=["components"],u={id:"subspace-user-group-aggregate-order-by",title:"subspace_user_group_aggregate_order_by",hide_table_of_contents:!1},_=void 0,n={unversionedId:"graphql/inputs/subspace-user-group-aggregate-order-by",id:"version-4.1.0/graphql/inputs/subspace-user-group-aggregate-order-by",title:"subspace_user_group_aggregate_order_by",description:'order by aggregate values of table "subspaceusergroup"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-aggregate-order-by",permalink:"/graphql/inputs/subspace-user-group-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-aggregate-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-user-group-aggregate-order-by",title:"subspace_user_group_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_section_variance_order_by",permalink:"/graphql/inputs/subspace-section-variance-order-by"},next:{title:"subspace_user_group_avg_order_by",permalink:"/graphql/inputs/subspace-user-group-avg-order-by"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>subspace_user_group_avg_order_by</code>)",id:"avg-subspace_user_group_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_user_group_max_order_by</code>)",id:"max-subspace_user_group_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_user_group_min_order_by</code>)",id:"min-subspace_user_group_min_order_by",level:4},{value:"<code>stddev</code> (<code>subspace_user_group_stddev_order_by</code>)",id:"stddev-subspace_user_group_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>subspace_user_group_stddev_pop_order_by</code>)",id:"stddev_pop-subspace_user_group_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>subspace_user_group_stddev_samp_order_by</code>)",id:"stddev_samp-subspace_user_group_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>subspace_user_group_sum_order_by</code>)",id:"sum-subspace_user_group_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>subspace_user_group_var_pop_order_by</code>)",id:"var_pop-subspace_user_group_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>subspace_user_group_var_samp_order_by</code>)",id:"var_samp-subspace_user_group_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>subspace_user_group_variance_order_by</code>)",id:"variance-subspace_user_group_variance_order_by",level:4}],i={toc:c};function b(e){var r=e.components,a=(0,o.Z)(e,p);return(0,t.kt)("wrapper",(0,s.Z)({},i,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,'order by aggregate values of table "subspace_user_group"'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_aggregate_order_by {\n  avg: subspace_user_group_avg_order_by\n  count: order_by\n  max: subspace_user_group_max_order_by\n  min: subspace_user_group_min_order_by\n  stddev: subspace_user_group_stddev_order_by\n  stddev_pop: subspace_user_group_stddev_pop_order_by\n  stddev_samp: subspace_user_group_stddev_samp_order_by\n  sum: subspace_user_group_sum_order_by\n  var_pop: subspace_user_group_var_pop_order_by\n  var_samp: subspace_user_group_var_samp_order_by\n  variance: subspace_user_group_variance_order_by\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"avg-subspace_user_group_avg_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-avg-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_avg_order_by")),")"),(0,t.kt)("h4",{id:"count-order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,t.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,t.kt)("h4",{id:"max-subspace_user_group_max_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-max-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_max_order_by")),")"),(0,t.kt)("h4",{id:"min-subspace_user_group_min_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-min-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_min_order_by")),")"),(0,t.kt)("h4",{id:"stddev-subspace_user_group_stddev_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-stddev-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_stddev_order_by")),")"),(0,t.kt)("h4",{id:"stddev_pop-subspace_user_group_stddev_pop_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-stddev-pop-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_stddev_pop_order_by")),")"),(0,t.kt)("h4",{id:"stddev_samp-subspace_user_group_stddev_samp_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-stddev-samp-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_stddev_samp_order_by")),")"),(0,t.kt)("h4",{id:"sum-subspace_user_group_sum_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-sum-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_sum_order_by")),")"),(0,t.kt)("h4",{id:"var_pop-subspace_user_group_var_pop_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-var-pop-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_var_pop_order_by")),")"),(0,t.kt)("h4",{id:"var_samp-subspace_user_group_var_samp_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-var-samp-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_var_samp_order_by")),")"),(0,t.kt)("h4",{id:"variance-subspace_user_group_variance_order_by"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-variance-order-by"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_variance_order_by")),")"))}b.isMDXComponent=!0}}]);
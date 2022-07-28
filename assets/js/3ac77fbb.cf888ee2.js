"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[53048],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return c}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),_=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=_(e.components);return r.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,h=d(e,["components","mdxType","originalType","parentName"]),g=_(a),c=o,l=g["".concat(p,".").concat(c)]||g[c]||i[c]||n;return a?r.createElement(l,s(s({ref:t},h),{},{components:a})):r.createElement(l,s({ref:t},h))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=g;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,s[1]=d;for(var _=2;_<n;_++)s[_]=a[_];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9393:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return d},metadata:function(){return _},toc:function(){return i}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),s=["components"],d={id:"post-hashtag-aggregate-order-by",title:"post_hashtag_aggregate_order_by",hide_table_of_contents:!1},p=void 0,_={unversionedId:"graphql/inputs/post-hashtag-aggregate-order-by",id:"graphql/inputs/post-hashtag-aggregate-order-by",title:"post_hashtag_aggregate_order_by",description:'order by aggregate values of table "post_hashtag"',source:"@site/docs/07-graphql/inputs/post-hashtag-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-hashtag-aggregate-order-by",permalink:"/next/graphql/inputs/post-hashtag-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-hashtag-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-hashtag-aggregate-order-by",title:"post_hashtag_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_bool_exp",permalink:"/next/graphql/inputs/post-bool-exp"},next:{title:"post_hashtag_avg_order_by",permalink:"/next/graphql/inputs/post-hashtag-avg-order-by"}},h={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_hashtag_avg_order_by</code>)",id:"avg-post_hashtag_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>post_hashtag_max_order_by</code>)",id:"max-post_hashtag_max_order_by",level:4},{value:"<code>min</code> (<code>post_hashtag_min_order_by</code>)",id:"min-post_hashtag_min_order_by",level:4},{value:"<code>stddev</code> (<code>post_hashtag_stddev_order_by</code>)",id:"stddev-post_hashtag_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>post_hashtag_stddev_pop_order_by</code>)",id:"stddev_pop-post_hashtag_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>post_hashtag_stddev_samp_order_by</code>)",id:"stddev_samp-post_hashtag_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>post_hashtag_sum_order_by</code>)",id:"sum-post_hashtag_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>post_hashtag_var_pop_order_by</code>)",id:"var_pop-post_hashtag_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>post_hashtag_var_samp_order_by</code>)",id:"var_samp-post_hashtag_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>post_hashtag_variance_order_by</code>)",id:"variance-post_hashtag_variance_order_by",level:4}],g={toc:i};function c(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by aggregate values of table "post_hashtag"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_hashtag_aggregate_order_by {\n  avg: post_hashtag_avg_order_by\n  count: order_by\n  max: post_hashtag_max_order_by\n  min: post_hashtag_min_order_by\n  stddev: post_hashtag_stddev_order_by\n  stddev_pop: post_hashtag_stddev_pop_order_by\n  stddev_samp: post_hashtag_stddev_samp_order_by\n  sum: post_hashtag_sum_order_by\n  var_pop: post_hashtag_var_pop_order_by\n  var_samp: post_hashtag_var_samp_order_by\n  variance: post_hashtag_variance_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"avg-post_hashtag_avg_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-avg-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_avg_order_by")),")"),(0,n.kt)("h4",{id:"count-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"max-post_hashtag_max_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-max-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_max_order_by")),")"),(0,n.kt)("h4",{id:"min-post_hashtag_min_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-min-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_min_order_by")),")"),(0,n.kt)("h4",{id:"stddev-post_hashtag_stddev_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-stddev-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_stddev_order_by")),")"),(0,n.kt)("h4",{id:"stddev_pop-post_hashtag_stddev_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-stddev-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_stddev_pop_order_by")),")"),(0,n.kt)("h4",{id:"stddev_samp-post_hashtag_stddev_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-stddev-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_stddev_samp_order_by")),")"),(0,n.kt)("h4",{id:"sum-post_hashtag_sum_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-sum-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_sum_order_by")),")"),(0,n.kt)("h4",{id:"var_pop-post_hashtag_var_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-var-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_var_pop_order_by")),")"),(0,n.kt)("h4",{id:"var_samp-post_hashtag_var_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-var-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_var_samp_order_by")),")"),(0,n.kt)("h4",{id:"variance-post_hashtag_variance_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-variance-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_variance_order_by")),")"))}c.isMDXComponent=!0}}]);
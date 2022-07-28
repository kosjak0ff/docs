"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[87342],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return m}});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),_=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},i=function(e){var r=_(e.components);return o.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},l=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=_(t),m=a,v=l["".concat(s,".").concat(m)]||l[m]||c[m]||n;return t?o.createElement(v,d(d({ref:r},i),{},{components:t})):o.createElement(v,d({ref:r},i))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,d=new Array(n);d[0]=l;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,d[1]=p;for(var _=2;_<n;_++)d[_]=t[_];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},71988:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return _},toc:function(){return c}});var o=t(87462),a=t(63366),n=(t(67294),t(3905)),d=["components"],p={id:"post-aggregate-order-by",title:"post_aggregate_order_by",hide_table_of_contents:!1},s=void 0,_={unversionedId:"graphql/inputs/post-aggregate-order-by",id:"version-4.2.0/graphql/inputs/post-aggregate-order-by",title:"post_aggregate_order_by",description:'order by aggregate values of table "post"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/post-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-aggregate-order-by",permalink:"/graphql/inputs/post-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/post-aggregate-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-aggregate-order-by",title:"post_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"poll_answer_order_by",permalink:"/graphql/inputs/poll-answer-order-by"},next:{title:"post_attachment_aggregate_order_by",permalink:"/graphql/inputs/post-attachment-aggregate-order-by"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_avg_order_by</code>)",id:"avg-post_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>post_max_order_by</code>)",id:"max-post_max_order_by",level:4},{value:"<code>min</code> (<code>post_min_order_by</code>)",id:"min-post_min_order_by",level:4},{value:"<code>stddev</code> (<code>post_stddev_order_by</code>)",id:"stddev-post_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>post_stddev_pop_order_by</code>)",id:"stddev_pop-post_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>post_stddev_samp_order_by</code>)",id:"stddev_samp-post_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>post_sum_order_by</code>)",id:"sum-post_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>post_var_pop_order_by</code>)",id:"var_pop-post_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>post_var_samp_order_by</code>)",id:"var_samp-post_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>post_variance_order_by</code>)",id:"variance-post_variance_order_by",level:4}],l={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,d);return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by aggregate values of table "post"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_aggregate_order_by {\n  avg: post_avg_order_by\n  count: order_by\n  max: post_max_order_by\n  min: post_min_order_by\n  stddev: post_stddev_order_by\n  stddev_pop: post_stddev_pop_order_by\n  stddev_samp: post_stddev_samp_order_by\n  sum: post_sum_order_by\n  var_pop: post_var_pop_order_by\n  var_samp: post_var_samp_order_by\n  variance: post_variance_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"avg-post_avg_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-avg-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_avg_order_by")),")"),(0,n.kt)("h4",{id:"count-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"max-post_max_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-max-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_max_order_by")),")"),(0,n.kt)("h4",{id:"min-post_min_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-min-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_min_order_by")),")"),(0,n.kt)("h4",{id:"stddev-post_stddev_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-stddev-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_stddev_order_by")),")"),(0,n.kt)("h4",{id:"stddev_pop-post_stddev_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-stddev-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_stddev_pop_order_by")),")"),(0,n.kt)("h4",{id:"stddev_samp-post_stddev_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-stddev-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_stddev_samp_order_by")),")"),(0,n.kt)("h4",{id:"sum-post_sum_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-sum-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_sum_order_by")),")"),(0,n.kt)("h4",{id:"var_pop-post_var_pop_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-var-pop-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_var_pop_order_by")),")"),(0,n.kt)("h4",{id:"var_samp-post_var_samp_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-var-samp-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_var_samp_order_by")),")"),(0,n.kt)("h4",{id:"variance-post_variance_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-variance-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_variance_order_by")),")"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[77393],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return l}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var _=n.createContext({}),s=function(e){var r=n.useContext(_),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(_.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,_=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(t),l=o,m=f["".concat(_,".").concat(l)]||f[l]||i[l]||a;return t?n.createElement(m,d(d({ref:r},c),{},{components:t})):n.createElement(m,d({ref:r},c))}));function l(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,d=new Array(a);d[0]=f;var p={};for(var _ in r)hasOwnProperty.call(r,_)&&(p[_]=r[_]);p.originalType=e,p.mdxType="string"==typeof e?e:o,d[1]=p;for(var s=2;s<a;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},792:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return _},default:function(){return l},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),d=["components"],p={id:"post-reference-aggregate-order-by",title:"post_reference_aggregate_order_by",hide_table_of_contents:!1},_=void 0,s={unversionedId:"graphql/inputs/post-reference-aggregate-order-by",id:"graphql/inputs/post-reference-aggregate-order-by",title:"post_reference_aggregate_order_by",description:'order by aggregate values of table "post_reference"',source:"@site/docs/07-graphql/inputs/post-reference-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-aggregate-order-by",permalink:"/next/graphql/inputs/post-reference-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-reference-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-reference-aggregate-order-by",title:"post_reference_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_order_by",permalink:"/next/graphql/inputs/post-order-by"},next:{title:"post_reference_avg_order_by",permalink:"/next/graphql/inputs/post-reference-avg-order-by"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_reference_avg_order_by</code>)",id:"avg-post_reference_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>post_reference_max_order_by</code>)",id:"max-post_reference_max_order_by",level:4},{value:"<code>min</code> (<code>post_reference_min_order_by</code>)",id:"min-post_reference_min_order_by",level:4},{value:"<code>stddev</code> (<code>post_reference_stddev_order_by</code>)",id:"stddev-post_reference_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>post_reference_stddev_pop_order_by</code>)",id:"stddev_pop-post_reference_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>post_reference_stddev_samp_order_by</code>)",id:"stddev_samp-post_reference_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>post_reference_sum_order_by</code>)",id:"sum-post_reference_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>post_reference_var_pop_order_by</code>)",id:"var_pop-post_reference_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>post_reference_var_samp_order_by</code>)",id:"var_samp-post_reference_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>post_reference_variance_order_by</code>)",id:"variance-post_reference_variance_order_by",level:4}],f={toc:i};function l(e){var r=e.components,t=(0,o.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by aggregate values of table "post_reference"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_aggregate_order_by {\n  avg: post_reference_avg_order_by\n  count: order_by\n  max: post_reference_max_order_by\n  min: post_reference_min_order_by\n  stddev: post_reference_stddev_order_by\n  stddev_pop: post_reference_stddev_pop_order_by\n  stddev_samp: post_reference_stddev_samp_order_by\n  sum: post_reference_sum_order_by\n  var_pop: post_reference_var_pop_order_by\n  var_samp: post_reference_var_samp_order_by\n  variance: post_reference_variance_order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"avg-post_reference_avg_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-avg-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_avg_order_by")),")"),(0,a.kt)("h4",{id:"count-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"max-post_reference_max_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-max-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_max_order_by")),")"),(0,a.kt)("h4",{id:"min-post_reference_min_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-min-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_min_order_by")),")"),(0,a.kt)("h4",{id:"stddev-post_reference_stddev_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-stddev-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_stddev_order_by")),")"),(0,a.kt)("h4",{id:"stddev_pop-post_reference_stddev_pop_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-stddev-pop-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_stddev_pop_order_by")),")"),(0,a.kt)("h4",{id:"stddev_samp-post_reference_stddev_samp_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-stddev-samp-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_stddev_samp_order_by")),")"),(0,a.kt)("h4",{id:"sum-post_reference_sum_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-sum-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_sum_order_by")),")"),(0,a.kt)("h4",{id:"var_pop-post_reference_var_pop_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-var-pop-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_var_pop_order_by")),")"),(0,a.kt)("h4",{id:"var_samp-post_reference_var_samp_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-var-samp-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_var_samp_order_by")),")"),(0,a.kt)("h4",{id:"variance-post_reference_variance_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-variance-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_variance_order_by")),")"))}l.isMDXComponent=!0}}]);
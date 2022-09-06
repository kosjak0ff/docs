"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[86986],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var _=r.createContext({}),s=function(e){var t=r.useContext(_),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(_.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,_=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),i=s(a),h=o,l=i["".concat(_,".").concat(h)]||i[h]||c[h]||n;return a?r.createElement(l,d(d({ref:t},m),{},{components:a})):r.createElement(l,d({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,d=new Array(n);d[0]=i;var p={};for(var _ in t)hasOwnProperty.call(t,_)&&(p[_]=t[_]);p.originalType=e,p.mdxType="string"==typeof e?e:o,d[1]=p;for(var s=2;s<n;s++)d[s]=a[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}i.displayName="MDXCreateElement"},58969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const n={id:"post-attachment-aggregate-order-by",title:"post_attachment_aggregate_order_by",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/inputs/post-attachment-aggregate-order-by",id:"version-4.2.0/graphql/inputs/post-attachment-aggregate-order-by",title:"post_attachment_aggregate_order_by",description:'order by aggregate values of table "post_attachment"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/post-attachment-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-attachment-aggregate-order-by",permalink:"/graphql/inputs/post-attachment-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/post-attachment-aggregate-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-attachment-aggregate-order-by",title:"post_attachment_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_aggregate_order_by",permalink:"/graphql/inputs/post-aggregate-order-by"},next:{title:"post_attachment_avg_order_by",permalink:"/graphql/inputs/post-attachment-avg-order-by"}},_={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_attachment_avg_order_by</code>)",id:"avg-post_attachment_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>post_attachment_max_order_by</code>)",id:"max-post_attachment_max_order_by",level:4},{value:"<code>min</code> (<code>post_attachment_min_order_by</code>)",id:"min-post_attachment_min_order_by",level:4},{value:"<code>stddev</code> (<code>post_attachment_stddev_order_by</code>)",id:"stddev-post_attachment_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>post_attachment_stddev_pop_order_by</code>)",id:"stddev_pop-post_attachment_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>post_attachment_stddev_samp_order_by</code>)",id:"stddev_samp-post_attachment_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>post_attachment_sum_order_by</code>)",id:"sum-post_attachment_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>post_attachment_var_pop_order_by</code>)",id:"var_pop-post_attachment_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>post_attachment_var_samp_order_by</code>)",id:"var_samp-post_attachment_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>post_attachment_variance_order_by</code>)",id:"variance-post_attachment_variance_order_by",level:4}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by aggregate values of table "post_attachment"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_attachment_aggregate_order_by {\n  avg: post_attachment_avg_order_by\n  count: order_by\n  max: post_attachment_max_order_by\n  min: post_attachment_min_order_by\n  stddev: post_attachment_stddev_order_by\n  stddev_pop: post_attachment_stddev_pop_order_by\n  stddev_samp: post_attachment_stddev_samp_order_by\n  sum: post_attachment_sum_order_by\n  var_pop: post_attachment_var_pop_order_by\n  var_samp: post_attachment_var_samp_order_by\n  variance: post_attachment_variance_order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"avg-post_attachment_avg_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-avg-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_avg_order_by")),")"),(0,o.kt)("h4",{id:"count-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"max-post_attachment_max_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-max-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_max_order_by")),")"),(0,o.kt)("h4",{id:"min-post_attachment_min_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-min-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_min_order_by")),")"),(0,o.kt)("h4",{id:"stddev-post_attachment_stddev_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-stddev-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_stddev_order_by")),")"),(0,o.kt)("h4",{id:"stddev_pop-post_attachment_stddev_pop_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-stddev-pop-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_stddev_pop_order_by")),")"),(0,o.kt)("h4",{id:"stddev_samp-post_attachment_stddev_samp_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-stddev-samp-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_stddev_samp_order_by")),")"),(0,o.kt)("h4",{id:"sum-post_attachment_sum_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-sum-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_sum_order_by")),")"),(0,o.kt)("h4",{id:"var_pop-post_attachment_var_pop_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-var-pop-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_var_pop_order_by")),")"),(0,o.kt)("h4",{id:"var_samp-post_attachment_var_samp_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-var-samp-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_var_samp_order_by")),")"),(0,o.kt)("h4",{id:"variance-post_attachment_variance_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-variance-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_variance_order_by")),")"))}c.isMDXComponent=!0}}]);
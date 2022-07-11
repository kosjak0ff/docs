"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[31554],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),_=i(a),m=o,f=_["".concat(p,".").concat(m)]||_[m]||c[m]||s;return a?n.createElement(f,r(r({ref:t},l),{},{components:a})):n.createElement(f,r({ref:t},l))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=_;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var i=2;i<s;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},64621:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return c}});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),r=["components"],d={id:"post-aggregate-fields",title:"post_aggregate_fields",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/objects/post-aggregate-fields",id:"version-4.1.0/graphql/objects/post-aggregate-fields",title:"post_aggregate_fields",description:'aggregate fields of "post"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/post-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-aggregate-fields",permalink:"/graphql/objects/post-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/post-aggregate-fields.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"post-aggregate-fields",title:"post_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"poll_answer",permalink:"/graphql/objects/poll-answer"},next:{title:"post_aggregate",permalink:"/graphql/objects/post-aggregate"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_avg_fields</code>)",id:"avg-post_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>post_max_fields</code>)",id:"max-post_max_fields",level:4},{value:"<code>min</code> (<code>post_min_fields</code>)",id:"min-post_min_fields",level:4},{value:"<code>stddev</code> (<code>post_stddev_fields</code>)",id:"stddev-post_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>post_stddev_pop_fields</code>)",id:"stddev_pop-post_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>post_stddev_samp_fields</code>)",id:"stddev_samp-post_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>post_sum_fields</code>)",id:"sum-post_sum_fields",level:4},{value:"<code>var_pop</code> (<code>post_var_pop_fields</code>)",id:"var_pop-post_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>post_var_samp_fields</code>)",id:"var_samp-post_var_samp_fields",level:4},{value:"<code>variance</code> (<code>post_variance_fields</code>)",id:"variance-post_variance_fields",level:4}],_={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'aggregate fields of "post"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_aggregate_fields {\n  avg: post_avg_fields\n  count(\n  columns: [post_select_column!]\n  distinct: Boolean\n): Int!\n  max: post_max_fields\n  min: post_min_fields\n  stddev: post_stddev_fields\n  stddev_pop: post_stddev_pop_fields\n  stddev_samp: post_stddev_samp_fields\n  sum: post_sum_fields\n  var_pop: post_var_pop_fields\n  var_samp: post_var_samp_fields\n  variance: post_variance_fields\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"avg-post_avg_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-avg-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_avg_fields")),")"),(0,s.kt)("h4",{id:"count-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"columns-post_select_column"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,s.kt)("a",{parentName:"h5",href:"../enums/post-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[post_select_column!]")),")"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,s.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,s.kt)("h4",{id:"max-post_max_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-max-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_max_fields")),")"),(0,s.kt)("h4",{id:"min-post_min_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-min-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_min_fields")),")"),(0,s.kt)("h4",{id:"stddev-post_stddev_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-stddev-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_stddev_fields")),")"),(0,s.kt)("h4",{id:"stddev_pop-post_stddev_pop_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-stddev-pop-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_stddev_pop_fields")),")"),(0,s.kt)("h4",{id:"stddev_samp-post_stddev_samp_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-stddev-samp-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_stddev_samp_fields")),")"),(0,s.kt)("h4",{id:"sum-post_sum_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-sum-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_sum_fields")),")"),(0,s.kt)("h4",{id:"var_pop-post_var_pop_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-var-pop-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_var_pop_fields")),")"),(0,s.kt)("h4",{id:"var_samp-post_var_samp_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-var-samp-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_var_samp_fields")),")"),(0,s.kt)("h4",{id:"variance-post_variance_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/post-variance-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"post_variance_fields")),")"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88696],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>c});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,d=e.parentName,i=n(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,m=u["".concat(d,".").concat(c)]||u[c]||_[c]||s;return a?r.createElement(m,o(o({ref:t},i),{},{components:a})):r.createElement(m,o({ref:t},i))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,o=new Array(s);o[0]=u;var n={};for(var d in t)hasOwnProperty.call(t,d)&&(n[d]=t[d]);n.originalType=e,n.mdxType="string"==typeof e?e:l,o[1]=n;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>_,frontMatter:()=>s,metadata:()=>n,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const s={id:"post-url-aggregate-fields",title:"post_url_aggregate_fields",hide_table_of_contents:!1},o=void 0,n={unversionedId:"graphql/objects/post-url-aggregate-fields",id:"graphql/objects/post-url-aggregate-fields",title:"post_url_aggregate_fields",description:'aggregate fields of "post_url"',source:"@site/docs/07-graphql/objects/post-url-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-url-aggregate-fields",permalink:"/next/graphql/objects/post-url-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-url-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-url-aggregate-fields",title:"post_url_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_tag",permalink:"/next/graphql/objects/post-tag"},next:{title:"post_url_aggregate",permalink:"/next/graphql/objects/post-url-aggregate"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_url_avg_fields</code>)",id:"avg-post_url_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>post_url_max_fields</code>)",id:"max-post_url_max_fields",level:4},{value:"<code>min</code> (<code>post_url_min_fields</code>)",id:"min-post_url_min_fields",level:4},{value:"<code>stddev</code> (<code>post_url_stddev_fields</code>)",id:"stddev-post_url_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>post_url_stddev_pop_fields</code>)",id:"stddev_pop-post_url_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>post_url_stddev_samp_fields</code>)",id:"stddev_samp-post_url_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>post_url_sum_fields</code>)",id:"sum-post_url_sum_fields",level:4},{value:"<code>var_pop</code> (<code>post_url_var_pop_fields</code>)",id:"var_pop-post_url_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>post_url_var_samp_fields</code>)",id:"var_samp-post_url_var_samp_fields",level:4},{value:"<code>variance</code> (<code>post_url_variance_fields</code>)",id:"variance-post_url_variance_fields",level:4}],i={toc:p};function _(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'aggregate fields of "post_url"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_url_aggregate_fields {\n  avg: post_url_avg_fields\n  count(columns: [post_url_select_column!], distinct: Boolean): Int!\n  max: post_url_max_fields\n  min: post_url_min_fields\n  stddev: post_url_stddev_fields\n  stddev_pop: post_url_stddev_pop_fields\n  stddev_samp: post_url_stddev_samp_fields\n  sum: post_url_sum_fields\n  var_pop: post_url_var_pop_fields\n  var_samp: post_url_var_samp_fields\n  variance: post_url_variance_fields\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"avg-post_url_avg_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-avg-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_avg_fields")),")"),(0,l.kt)("h4",{id:"count-int"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,l.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"columns-post_url_select_column"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,l.kt)("a",{parentName:"h5",href:"../enums/post-url-select-column"},(0,l.kt)("inlineCode",{parentName:"a"},"[post_url_select_column!]")),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,l.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,l.kt)("h4",{id:"max-post_url_max_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-max-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_max_fields")),")"),(0,l.kt)("h4",{id:"min-post_url_min_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-min-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_min_fields")),")"),(0,l.kt)("h4",{id:"stddev-post_url_stddev_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-stddev-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_stddev_fields")),")"),(0,l.kt)("h4",{id:"stddev_pop-post_url_stddev_pop_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-stddev-pop-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_stddev_pop_fields")),")"),(0,l.kt)("h4",{id:"stddev_samp-post_url_stddev_samp_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-stddev-samp-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_stddev_samp_fields")),")"),(0,l.kt)("h4",{id:"sum-post_url_sum_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-sum-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_sum_fields")),")"),(0,l.kt)("h4",{id:"var_pop-post_url_var_pop_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-var-pop-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_var_pop_fields")),")"),(0,l.kt)("h4",{id:"var_samp-post_url_var_samp_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-var-samp-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_var_samp_fields")),")"),(0,l.kt)("h4",{id:"variance-post_url_variance_fields"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,l.kt)("a",{parentName:"h4",href:"../objects/post-url-variance-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"post_url_variance_fields")),")"))}_.isMDXComponent=!0}}]);
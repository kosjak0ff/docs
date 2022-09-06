"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[75384],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},_=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),_=l(t),m=r,f=_["".concat(c,".").concat(m)]||_[m]||p[m]||i;return t?n.createElement(f,o(o({ref:a},s),{},{components:t})):n.createElement(f,o({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=_;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},79313:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const i={id:"reaction-aggregate-fields",title:"reaction_aggregate_fields",hide_table_of_contents:!1},o=void 0,d={unversionedId:"graphql/objects/reaction-aggregate-fields",id:"version-4.2.0/graphql/objects/reaction-aggregate-fields",title:"reaction_aggregate_fields",description:'aggregate fields of "reaction"',source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/reaction-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/reaction-aggregate-fields",permalink:"/graphql/objects/reaction-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/objects/reaction-aggregate-fields.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"reaction-aggregate-fields",title:"reaction_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"query_root",permalink:"/graphql/objects/query-root"},next:{title:"reaction_aggregate",permalink:"/graphql/objects/reaction-aggregate"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>reaction_avg_fields</code>)",id:"avg-reaction_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>reaction_max_fields</code>)",id:"max-reaction_max_fields",level:4},{value:"<code>min</code> (<code>reaction_min_fields</code>)",id:"min-reaction_min_fields",level:4},{value:"<code>stddev</code> (<code>reaction_stddev_fields</code>)",id:"stddev-reaction_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>reaction_stddev_pop_fields</code>)",id:"stddev_pop-reaction_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>reaction_stddev_samp_fields</code>)",id:"stddev_samp-reaction_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>reaction_sum_fields</code>)",id:"sum-reaction_sum_fields",level:4},{value:"<code>var_pop</code> (<code>reaction_var_pop_fields</code>)",id:"var_pop-reaction_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>reaction_var_samp_fields</code>)",id:"var_samp-reaction_var_samp_fields",level:4},{value:"<code>variance</code> (<code>reaction_variance_fields</code>)",id:"variance-reaction_variance_fields",level:4}],s={toc:l};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'aggregate fields of "reaction"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type reaction_aggregate_fields {\n  avg: reaction_avg_fields\n  count(\n  columns: [reaction_select_column!]\n  distinct: Boolean\n): Int!\n  max: reaction_max_fields\n  min: reaction_min_fields\n  stddev: reaction_stddev_fields\n  stddev_pop: reaction_stddev_pop_fields\n  stddev_samp: reaction_stddev_samp_fields\n  sum: reaction_sum_fields\n  var_pop: reaction_var_pop_fields\n  var_samp: reaction_var_samp_fields\n  variance: reaction_variance_fields\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"avg-reaction_avg_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-avg-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_avg_fields")),")"),(0,r.kt)("h4",{id:"count-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"columns-reaction_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/reaction-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[reaction_select_column!]")),")"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("h4",{id:"max-reaction_max_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-max-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_max_fields")),")"),(0,r.kt)("h4",{id:"min-reaction_min_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-min-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_min_fields")),")"),(0,r.kt)("h4",{id:"stddev-reaction_stddev_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-stddev-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_stddev_fields")),")"),(0,r.kt)("h4",{id:"stddev_pop-reaction_stddev_pop_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-stddev-pop-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_stddev_pop_fields")),")"),(0,r.kt)("h4",{id:"stddev_samp-reaction_stddev_samp_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-stddev-samp-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_stddev_samp_fields")),")"),(0,r.kt)("h4",{id:"sum-reaction_sum_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-sum-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_sum_fields")),")"),(0,r.kt)("h4",{id:"var_pop-reaction_var_pop_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-var-pop-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_var_pop_fields")),")"),(0,r.kt)("h4",{id:"var_samp-reaction_var_samp_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-var-samp-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_var_samp_fields")),")"),(0,r.kt)("h4",{id:"variance-reaction_variance_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/reaction-variance-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"reaction_variance_fields")),")"))}p.isMDXComponent=!0}}]);